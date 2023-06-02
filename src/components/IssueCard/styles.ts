import styled from 'styled-components';

export const IssueCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  justify-content: space-between;
  margin: 4rem auto 0;

  div{
    background: ${props => props.theme.colors['base-post']};
    margin: 2rem 2rem 0 2rem;
  }
`

export const IssueCardTitleAndTimeContainer = styled.div`
  display: flex;
  width: 22rem;
  height: 4rem;

  align-items: center;
  justify-content: space-between;
 
  strong{
    font-size: ${props => props.theme.textSizes['title-M']};
    color:  ${props => props.theme.colors['base-title']};
  }

  span{
    font-size: ${props => props.theme.textSizes['text-S']};
    color:  ${props => props.theme.colors['base-span']};
  }
`
export const IssueResumeContainer = styled.div`
  display: flex;
  width: 22rem;
  height: 7rem;
  p {
    font-size: ${props => props.theme.textSizes['text-M']};
    color:  ${props => props.theme.colors['base-text']};
  }
`

