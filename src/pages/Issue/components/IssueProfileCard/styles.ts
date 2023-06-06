import styled from 'styled-components'; 

export const IssueProfileContainer = styled.section`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;

  margin-top: -5.5rem;
`

export const IssueProfileBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 13.25rem;
  width: 54rem;
  background: ${props => props.theme.colors['base-profile']};

  margin: 0 auto;
  border-radius: 10px;
  filter: drop-shadow(0.2rem 0.2rem 0.2rem  ${props => props.theme.colors['base-profile']});
`

export const IssueProfileDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 9.25rem; */
  /* width: 38.25rem; */
  margin-top: 2.5rem;
  /* margin-right: 2rem; */
`

export const IssueProfileReturnAndLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  a{
    font-size: ${props => props.theme.textSizes['link']};
    color: ${props => props.theme.colors['blue']};
    margin-bottom: 1rem;
    text-decoration: none;
  }
`
export const IssueProfileNameContainer = styled.div`
  display: flex;
  width: 38.25rem;
  margin-top: 0.5rem;

  strong{
    font-size: ${props => props.theme.textSizes['title-L']};
    color:  ${props => props.theme.colors['base-title']};
  }

`
export const IssueProfileIconsAndDataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
`

export const IssueProfileIconsAndData = styled.div`
  display: flex;
  height: 1.625rem;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: ${props => props.theme.textSizes['text-M']};
    color: ${props => props.theme.colors['base-subtitle']};
  }
`




