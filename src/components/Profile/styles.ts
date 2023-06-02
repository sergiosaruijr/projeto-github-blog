import styled from 'styled-components';

export const ProfileContainer = styled.section`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  
  margin-top: -5rem;
`

export const ProfileBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 13.25rem;
  width: 54rem;
  background: ${props => props.theme.colors['base-profile']};

  margin: 0 auto;
  border-radius: 10px;
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
  background: ${props => props.theme.colors['base-span']};
`

export const ProfileTitleAndLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  strong{
    font-size: ${props => props.theme.textSizes['title-L']};
    color:  ${props => props.theme.colors['base-title']};
  }

  a{
    font-size: ${props => props.theme.textSizes['link']};
    color: ${props => props.theme.colors['blue']};
  }
`
export const ProfileResumeContainer = styled.div`
  display: flex;
  width: 38.25rem;

  p{
    font-size: ${props => props.theme.textSizes['text-M']};
    color: ${props => props.theme.colors['base-text']};
  }
`
export const ProfileIconsAndDataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ProfileIconsAndData = styled.div`
  display: flex;
  height: 1.625rem;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: ${props => props.theme.textSizes['text-M']};
    color: ${props => props.theme.colors['base-subtitle']};
  }
`




