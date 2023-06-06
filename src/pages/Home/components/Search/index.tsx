import { InfoContainer, SearchForm, SearchFormContainer } from './styles';

export function Search() {
  return(
    <SearchFormContainer>
      <InfoContainer>
        <strong>Publicações</strong>
        <span> n publicações</span>
      </InfoContainer>
      <SearchForm>
        <input type="text" placeholder='Buscar conteúdo'/>
      </SearchForm>
    </SearchFormContainer>
  )
}