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

export const IssueBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 53.375rem;
  height: 26.375rem;

  background: ${props => props.theme.colors['base-span']};
`

export const IssueContentContainer =styled.div`
  padding: 2.5rem 2rem 0 2rem;
  line-height: 160%;
  /* background: ${props => props.theme.colors['base-background']};   */
`
