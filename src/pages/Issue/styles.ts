import styled from 'styled-components';

export const IssueContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  margin: 0 auto;
  margin-left: 15rem;
  margin-right: 15rem;

  background: ${props => props.theme.colors['base-background']};
`
export const IssueContentContainer =styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;

  /* background: ${props => props.theme.colors['base-background']};   */
`
