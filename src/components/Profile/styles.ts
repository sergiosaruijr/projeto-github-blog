import styled from 'styled-components';

export const ProfileContainer = styled.section`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  
  margin-top: -5.5rem;
`

export const ProfileBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 13.25rem;
  width: 54rem;
  background: ${props => props.theme.colors['base-profile']};

  margin: 0 auto;
  border-radius: 10px;
  filter: drop-shadow(0.05rem 0.05rem 0.05rem  ${props => props.theme.colors['base-profile']});
`

export const ProfilePhoto = styled.div`
  height: 9.25rem;
  width: 9.25rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: 2.5rem;
  background: ${props => props.theme.colors['base-label']};
`

export const ProfileDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 9.25rem;
  width: 38.25rem;
  margin-top: 2.5rem;
  margin-right: 2rem;
  margin-left: 2rem;
`

export const ProfileTitleAndLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  div {
    background: ${props => props.theme.colors['base-background']};
    width: 4.2rem;
  }
  strong{
    font-size: ${props => props.theme.textSizes['title-L']};
    color:  ${props => props.theme.colors['base-title']};
  }

  a{
    /* height: 1.2; */
    color: ${props => props.theme.colors['blue']};
    font-size: ${props => props.theme.textSizes['link']};
    margin-bottom: 1rem;
    margin-right: 0.5rem;
    
    h3{
      margin-left: 0.5rem;
      font-size: ${props => props.theme.textSizes['link']};
    }
  }
`
export const ProfileResumeContainer = styled.div`
  display: flex;
  width: 38.25rem;
  margin-top: 0.5rem;

  p{
    font-size: ${props => props.theme.textSizes['text-M']};
    color: ${props => props.theme.colors['base-text']};
  }
`
export const ProfileIconsAndDataContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  gap:2rem;
  align-items: center;
  margin-top: 1.5rem;
`

export const ProfileIconsAndData = styled.div`
  display: flex;
  height: 1.625rem;
  /* justify-content: space-between; */
  align-items: center;
  color: ${props => props.theme.colors['base-label']};

  p {
    font-size: ${props => props.theme.textSizes['text-M']};
    color: ${props => props.theme.colors['base-subtitle']};
    margin-left: 0.5rem;
  }
`




