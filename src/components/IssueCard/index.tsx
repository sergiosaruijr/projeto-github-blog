import { NavLink} from 'react-router-dom';
import { InfoContainer, IssueCardContainer, IssueCardTitleAndTimeContainer, IssueResumeContainer, SearchForm, SearchFormContainer } from './styles';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import * as dayjs from 'dayjs'
import * as isLeapYear from 'dayjs/plugin/isLeapYear' 
import 'dayjs/locale/pt-br' 
import relativeTime from 'dayjs/plugin/relativeTime'
import ReactMarkdown from 'react-markdown'

interface ItensProps {
  [title: string]: any;
}

type Repos = {
  items?: ItensProps[];
}[]



export function IssueCard() {
  const [repos, setRepos] = useState<Repos>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    api.get(`search/issues?q=${search}%20repo:sergiosaruijr/projeto-github-blog`).then( info => setRepos(info.data))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  dayjs.extend(isLeapYear) 
  dayjs.locale('pt-br') 
  dayjs.extend(relativeTime)


  return(
    <>
      <SearchFormContainer>
        <InfoContainer>
          <strong>Publicações</strong>
        </InfoContainer>
        <SearchForm>
          <input 
          type="text" 
          placeholder='Buscar conteúdo'
          onChange={(e) => setSearch(e.target.value)}
          />
        </SearchForm>
      </SearchFormContainer>
      <IssueCardContainer>
        {repos.items?.filter((item: any) => {
          return search === ''
            ? item
            : item.title.toLowerCase().includes(search.toLowerCase());
        }).map((item: any) => {
          const index = item.number;
          return (
            <button key={index}>
              <NavLink to={`/issue/${index}`}>
                <IssueCardTitleAndTimeContainer>
                  <strong>
                    {item.title}
                  </strong>
                  <span>{dayjs(item.created_at).fromNow()}</span>
                </IssueCardTitleAndTimeContainer>
                <IssueResumeContainer>
                  <span>
                    <ReactMarkdown>{item.body}</ReactMarkdown>
                  </span>
                </IssueResumeContainer>
              </NavLink>
            </button>
          );
        })}
      </IssueCardContainer></>
  )
}