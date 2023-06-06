import styled from 'styled-components';

export const SearchFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 54rem;
  margin: 4rem auto 0;
  margin-bottom: 3rem;
  /* background: ${props => props.theme.colors['base-span']}; */
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong{
    font-size: ${props => props.theme.textSizes['title-S']};
    color: ${props => props.theme.colors['base-subtitle']};
  }

  span{
    font-size: ${props => props.theme.textSizes['text-S']};
    color: ${props => props.theme.colors['base-span']};
  }
`

export const SearchForm = styled.form`
  display: flex;
  margin-top: 0.75rem;

  input{
    flex: 1;
    padding-left: 1rem;
    height: 3.125rem;
    border: 2px solid ${props => props.theme.colors['base-border']};
    border-radius: 6px;
    background: ${props => props.theme.colors['base-input']};
    color: ${props => props.theme.colors['base-subtitle']};
    /* padding: 1rem; */

    &::placeholder {
      color: ${props => props.theme.colors['base-text']};
    }
  }
`