import { Header } from '../../components/Header';
import { IssueCard } from '../../components/IssueCard';
import { Profile } from '../../components/Profile';
import { Search } from './components/Search';
import { HomeContainer, HomeContentContainer} from './styles';

export function Home() {
  return(
    <>
    <Header />
    <HomeContainer>
        <Profile />
      <HomeContentContainer>
        <Search />
        <IssueCard />
      </HomeContentContainer>
    </HomeContainer>
    </>
  )
}