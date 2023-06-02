import { Header } from '../../components/Header';
import { Profile } from '../../components/Profile';
import { HomeContainer } from './styles';

export function Home() {
  return(
    <>
    <Header />
    <Profile />
    <HomeContainer>
      <h1>Home Page</h1>
    </HomeContainer>
    </>
  )
}