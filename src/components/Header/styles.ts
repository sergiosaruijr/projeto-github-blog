import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  

  height: 18.5rem;
  margin: 0 auto;
  margin-left: 15rem;
  margin-right: 15rem;

  background: ${props => props.theme.colors['base-post']};
`
export const HeaderLogo = styled.img`
  /* padding-bottom: 8.375rem; */
  padding: 4rem 2.5rem 8.375rem 0rem;
`
export const HeaderLogoLeft = styled.img`
  /* padding-bottom: 8.375rem; */
  padding-top: 4.375rem;
  padding-bottom: 2.375rem;
  position: sticky;
`
export const HeaderLogoRight = styled.img`
  position: sticky;
`
  