import { HeaderContainer, HeaderLogo, HeaderLogoLeft, HeaderLogoRight } from './styles';
import logo from '../../assets/logo.svg'
import leftLogo from '../../assets/left-logo.svg'
import rightLogo from '../../assets/right-logo.svg'


export function Header() {
  return(
    <HeaderContainer>
      <HeaderLogoLeft src={leftLogo} alt="" />
      <HeaderLogo src={logo} alt="" /> 
      <HeaderLogoRight src={rightLogo} alt="" /> 
    </HeaderContainer>
  )
}