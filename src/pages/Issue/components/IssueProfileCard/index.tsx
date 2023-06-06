import { NavLink } from 'react-router-dom';
import { IssueProfileBox, IssueProfileContainer, IssueProfileDataContainer, 
  IssueProfileIconsAndData, IssueProfileIconsAndDataContainer, 
  IssueProfileNameContainer, IssueProfileReturnAndLinkContainer } from './styles';

export function IssueProfileCard() {
  return (
    <IssueProfileContainer>
      <IssueProfileBox>
        <IssueProfileDataContainer>
          <IssueProfileReturnAndLinkContainer>
            <NavLink to='/'><a href="">VOLTAR</a></NavLink>
            <a href="">GITHUB</a>
          </IssueProfileReturnAndLinkContainer>
          <IssueProfileNameContainer>
            <strong>
              JavaScript data types and data structures
            </strong>
          </IssueProfileNameContainer>
          <IssueProfileIconsAndDataContainer>
            <IssueProfileIconsAndData>
              Algo
            </IssueProfileIconsAndData>
            <IssueProfileIconsAndData>
              Algo
            </IssueProfileIconsAndData>
          </IssueProfileIconsAndDataContainer>
        </IssueProfileDataContainer>
      </IssueProfileBox>
    </IssueProfileContainer>
  )
}