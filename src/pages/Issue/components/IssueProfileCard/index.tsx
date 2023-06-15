import { NavLink, useParams } from 'react-router-dom';
import { IssueProfileBox, IssueProfileContainer, IssueProfileDataContainer, 
  IssueProfileIconsAndData, IssueProfileIconsAndDataContainer, 
  IssueProfileNameContainer, IssueProfileReturnAndLinkContainer } from './styles';
import api from '../../../../services/api';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faChevronLeft, faCalendarDay, faComment} from '@fortawesome/free-solid-svg-icons';
import * as dayjs from 'dayjs'
import * as isLeapYear from 'dayjs/plugin/isLeapYear' 
import 'dayjs/locale/pt-br' 
import relativeTime from 'dayjs/plugin/relativeTime'
import { GithubOutlined } from '@ant-design/icons';

interface UserProps {
  login: string;
}

interface Issue {
  title: string;
  created_at: Date;
  comments: number;
  body: string;
  number: number;
  user: UserProps;
  html_url: string;
}

export function IssueProfileCard() {
  const [Issue, setIssue] = useState<Issue>()
  const {index} = useParams()
  console.log(index)

  useEffect(() => { 
    api.get(`repos/sergiosaruijr/projeto-github-blog/issues/${index}`).then( info => setIssue(info.data))
    // api.get(`/repos`).then( info => console.log(info.data))
  } ,[])

  console.log(Issue?.number)

  dayjs.extend(isLeapYear) 
  dayjs.locale('pt-br') 
  dayjs.extend(relativeTime)

  return (

    <IssueProfileContainer>
      <IssueProfileBox>
        <IssueProfileDataContainer>
          <IssueProfileReturnAndLinkContainer>
            <button>
              <NavLink to='/'>
                <FontAwesomeIcon icon={faChevronLeft} />
                VOLTAR
              </NavLink>
            </button>
            
           
           <button>
              <NavLink to={`/${Issue?.html_url}`}>
                VER NO GITHUB
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </NavLink>
           </button>
            
              
          </IssueProfileReturnAndLinkContainer>
          <IssueProfileNameContainer>
            <strong>
              {Issue?.title}
            </strong>
          </IssueProfileNameContainer>
          <IssueProfileIconsAndDataContainer>
            <IssueProfileIconsAndData>
              <GithubOutlined size={18}/>
              <p>{Issue?.user.login}</p>
            </IssueProfileIconsAndData>
            <IssueProfileIconsAndData>
              <FontAwesomeIcon icon={faCalendarDay} />
              <p>{dayjs(Issue?.created_at).fromNow()}</p>
            </IssueProfileIconsAndData>
            <IssueProfileIconsAndData>
              <FontAwesomeIcon icon={faComment} />
              <p>{Issue?.comments} comentários</p>
            </IssueProfileIconsAndData>
          </IssueProfileIconsAndDataContainer>
        </IssueProfileDataContainer>
      </IssueProfileBox>
    </IssueProfileContainer>
  )
}