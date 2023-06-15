import { useEffect, useState } from 'react';
import { InfoContainer, SearchForm, SearchFormContainer } from './styles';
import api from '../../../../services/api';

interface TotalIssue{
  open_issues: number;
}

export function Search() {
  const [totalIssue, setTotalIssue] = useState<TotalIssue>()

  useEffect(() => { 
    api.get('repos/sergiosaruijr/projeto-github-blog').then( info => setTotalIssue(info.data))
    // api.get(`/repos`).then( info => console.log(info.data))
  } ,[])

  return(
    <SearchFormContainer>
      <InfoContainer>
        <strong>Publicações</strong>
        <span> { totalIssue?.open_issues} publicações</span>
      </InfoContainer>
      <SearchForm>
        <input type="text" placeholder='Buscar conteúdo'/>
      </SearchForm>
    </SearchFormContainer>
  )
}