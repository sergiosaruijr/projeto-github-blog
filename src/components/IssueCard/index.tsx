import { NavLink } from 'react-router-dom';
import { IssueCardContainer, IssueCardTitleAndTimeContainer, IssueResumeContainer } from './styles';

export function IssueCard() {
  return(
    <IssueCardContainer>
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