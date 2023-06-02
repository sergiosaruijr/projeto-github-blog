import { Header } from '../../components/Header';
import { IssueCard } from '../../components/IssueCard';
import { Profile } from '../../components/Profile';
import { HomeContainer} from './styles';

export function Home() {
  return(
    <>
    <Header />
    <Profile />
    <HomeContainer>
      {/* <IssueContainer>
        <div>
          <h1>Home Page 1</h1>
        </div>
        <div>
          <h1>Home Page 2</h1>
        </div>
      </IssueContainer> */}
      <IssueCard />
    </HomeContainer>
    </>
  )
}