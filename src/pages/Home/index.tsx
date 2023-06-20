import { Header } from '../../components/Header';
import { IssueCard } from '../../components/IssueCard';
import { Profile } from '../../components/Profile';
import { HomeContainer, HomeContentContainer} from './styles';

export function Home() {
  return(
    <>
    <Header />
    <HomeContainer>
        <Profile />
      <HomeContentContainer>
        <IssueCard />
      </HomeContentContainer>
    </HomeContainer>
    </>
  )
}