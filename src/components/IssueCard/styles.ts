import styled from 'styled-components';

export const IssueCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  margin: 0 auto;
/* 
  div{
    background: ${props => props.theme.colors['base-post']};
    width: 26rem;
    border-radius: 10px;
  } */

  button {
    background: ${props => props.theme.colors['base-post']};
    border-radius: 10px;
    width: 26rem;
    border: 2px solid transparent;

    &:hover{
      border: 2px solid ${props => props.theme.colors['base-label']};
      transition: 0.5s;
      /* background: ${props => props.theme.colors['base-border']}; */
    }

    a {
      text-decoration: none;
    }
  }

`

export const IssueCardTitleAndTimeContainer = styled.div`
  display: flex;
  padding-top: 2rem;
  padding-bottom: 1.25rem;
  padding-left: 2rem;
  padding-right: 2rem;
  /* align-items: center;
  justify-content: space-between; */
 
  strong{
    font-size: ${props => props.theme.textSizes['title-M']};
    color:  ${props => props.theme.colors['base-title']};
    text-align: left;
  }

  span{
    font-size: ${props => props.theme.textSizes['text-S']};
    color:  ${props => props.theme.colors['base-span']};
    white-space: nowrap;
    padding-left: 1rem;
    margin-bottom: 1.5rem;
    
  }
`
export const IssueResumeContainer = styled.div`
  display: flex;
  height: 7rem;
  margin-bottom: 2rem;
  padding: 0 2rem 1rem 2rem;
  
  p {
    font-size: ${props => props.theme.textSizes['text-M']};
    color:  ${props => props.theme.colors['base-text']};
    line-height: 160%;
    text-align: left;
    overflow: hidden;
    /* text-overflow: ellipsis; */
   
  }
`

