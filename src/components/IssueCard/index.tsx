import { NavLink } from 'react-router-dom';
import { IssueCardContainer, IssueCardTitleAndTimeContainer, IssueResumeContainer } from './styles';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { dataFormatter, dataRelativeTimeFormatter } from '../../utils/formatter';



export function IssueCard() {
  const [repos, setRepos] = useState([])
  

  useEffect(() => { 
    api.get('repos/sergiosaruijr/projeto-github-blog/issues').then( info => setRepos(info.data))
    // api.get(`/repos`).then( info => console.log(info.data))
  } ,[])

 

  return(
    <IssueCardContainer>
        {repos.map((item: any, index) => {
          const days = dataFormatter.format(new Date(item.created_at))
          return(
            <button key={index}>
            <NavLink to={`/issue/${index}`} >
              <IssueCardTitleAndTimeContainer>
                <strong> 
                  {item.title}
                </strong>
                <span> {dataRelativeTimeFormatter.format(-parseInt(days), 'day')} </span>
              </IssueCardTitleAndTimeContainer>
              <IssueResumeContainer>
                <p>
                  {item.body}
                </p>
              </IssueResumeContainer>
            </NavLink>
          </button>
          )
        })}

      <button>
        <NavLink to='/issue' >
          <IssueCardTitleAndTimeContainer>
            <strong> 
              JavaScript data types and data structures
            </strong>
            <span> Há 1 dia </span>
          </IssueCardTitleAndTimeContainer>
          <IssueResumeContainer>
            <p>
              Programming languages all have built-in data structures, 
              but these often differ from one language to another. 
              This article attempts to list the built-in data structures available in 
            </p>
          </IssueResumeContainer>
        </NavLink>
      </button>

      <button>
        <NavLink to='/issue' >
          <IssueCardTitleAndTimeContainer>
            <strong> 
              JavaScript data types and data structures
            </strong>
            <span> Há 1 dia </span>
          </IssueCardTitleAndTimeContainer>
          <IssueResumeContainer>
            <p>
              Programming languages all have built-in data structures, 
              but these often differ from one language to another. 
              This article attempts to list the built-in data structures available in 
            </p>
          </IssueResumeContainer>
        </NavLink>
      </button>

      <button>
        <NavLink to='/issue' >
          <IssueCardTitleAndTimeContainer>
            <strong> 
              JavaScript data types and data structures
            </strong>
            <span> Há 1 dia </span>
          </IssueCardTitleAndTimeContainer>
          <IssueResumeContainer>
            <p>
              Programming languages all have built-in data structures, 
              but these often differ from one language to another. 
              This article attempts to list the built-in data structures available in 
            </p>
          </IssueResumeContainer>
        </NavLink>
      </button>

      <button>
        <NavLink to='/issue' >
          <IssueCardTitleAndTimeContainer>
            <strong> 
              JavaScript data types and data structures
            </strong>
            <span> Há 1 dia </span>
          </IssueCardTitleAndTimeContainer>
          <IssueResumeContainer>
            <p>
              Programming languages all have built-in data structures, 
              but these often differ from one language to another. 
              This article attempts to list the built-in data structures available in 
            </p>
          </IssueResumeContainer>
        </NavLink>
      </button>
      
    </IssueCardContainer>
  )
}