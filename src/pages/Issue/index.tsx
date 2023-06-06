import { Header } from '../../components/Header';
import { IssueProfileCard } from './components/IssueProfileCard';
import { IssueContainer, IssueContentContainer } from './styles';

export function Issue() {
  return(
    <>
      <Header />
      <IssueContainer>
        <IssueProfileCard />
        <IssueContentContainer>
          Programming languages all have built-in data structures, 
          but these often differ from one language to another. 
          This article attempts to list the built-in data structures available 
          in JavaScript and what properties they have. 
          These can be used to build other data structures. 
          Wherever possible, comparisons with other languages are drawn.

        </IssueContentContainer>
      </IssueContainer>
    </>
    
  )
}