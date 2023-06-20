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
  height: 10.5rem;
  width: 54rem;
  background: ${props => props.theme.colors['base-profile']};

  margin: 0 auto;
  border-radius: 10px;
  filter: drop-shadow(0.2rem 0.2rem 0.2rem  ${props => props.theme.colors['base-profile']});
`

export const IssueProfileDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  padding-left: 2rem;
`

export const IssueProfileReturnAndLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50rem;
  button{
    background: transparent;
    border: none;
    margin-bottom: 0.5rem;
    border: 2px solid transparent;

    &:hover{
      border-bottom: 2px solid ${props => props.theme.colors['blue']};
      transition: 0.8s;
    }

    a {
      font-size: ${props => props.theme.textSizes['link']};
      color: ${props => props.theme.colors['blue']};
      text-decoration: none;
    }

    span {
      padding-right: 0.5rem;

      &:first-of-type{
        padding-left: 0.5rem;
      }
    }
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
  align-items: center;
  margin-top: 0.5rem;
  gap: 2rem;
`

export const IssueProfileIconsAndData = styled.div`
  display: flex;
  height: 1.625rem;
  align-items: center;
  color: ${props => props.theme.colors['base-label']};

  p {
    font-size: ${props => props.theme.textSizes['text-M']};
    color: ${props => props.theme.colors['base-span']};
    margin-left: 0.5rem;
  }
`




