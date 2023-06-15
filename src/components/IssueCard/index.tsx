import { NavLink} from 'react-router-dom';
import { IssueCardContainer, IssueCardTitleAndTimeContainer, IssueResumeContainer } from './styles';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import * as dayjs from 'dayjs'
import * as isLeapYear from 'dayjs/plugin/isLeapYear' 
import 'dayjs/locale/pt-br' 
import relativeTime from 'dayjs/plugin/relativeTime'
import ReactMarkdown from 'react-markdown'
// import Search from '../../pages/Home/components/Search'

export function IssueCard() {
  const [repos, setRepos] = useState([])

  useEffect(() => { 
    api.get('repos/sergiosaruijr/projeto-github-blog/issues').then( info => setRepos(info.data))
  } ,[])

  dayjs.extend(isLeapYear) 
  dayjs.locale('pt-br') 
  dayjs.extend(relativeTime)
 
  

  return(
    <IssueCardContainer>
        {repos.map((item: any) => {
          // console.log(item.title)
          const index = item.number
          return(
            <button key={index}>
            <NavLink to={`/issue/${index}`} >
              <IssueCardTitleAndTimeContainer>
                <strong> 
                  {item.title}
                </strong>
                {/* <span> {dataRelativeTimeFormatter.format(-parseInt(days), 'day')} </span> */}
                <span>{dayjs(item.created_at).fromNow()}</span>
              </IssueCardTitleAndTimeContainer>
              <IssueResumeContainer>
                <p>
                  <ReactMarkdown>{item.body}</ReactMarkdown>
                </p>
              </IssueResumeContainer>
            </NavLink>
          </button>
          )
        })}
    </IssueCardContainer>
  )
}