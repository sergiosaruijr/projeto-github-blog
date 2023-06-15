import { useEffect, useState } from 'react';
import { InfoContainer, SearchForm, SearchFormContainer } from './styles';
import api from '../../../../services/api';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


interface TotalIssue{
  open_issues: number;
}

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Search() {
  const { register, handleSubmit} = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })
 
  const [totalIssue, setTotalIssue] = useState<TotalIssue>()

  async function IssuesAxios(query?: string) {
    const response = await api.get(`repos/sergiosaruijr/projeto-github-blog/issues`, {
      params: {
        q: query,
      }
    })

    setTotalIssue(response.data)
    console.log(response.data)
  }


  useEffect(() => { 
    api.get('repos/sergiosaruijr/projeto-github-blog').then( info => setTotalIssue(info.data))
    IssuesAxios()
  } ,[])

  async function handleSearchIssue(data: SearchFormInputs) {
    await IssuesAxios(data.query)
  }

  return(
    <SearchFormContainer>
      <InfoContainer>
        <strong>Publicações</strong>
        <span> { totalIssue?.open_issues} publicações</span>
      </InfoContainer>
      <SearchForm onSubmit={handleSubmit(handleSearchIssue)}>
        <input 
        type="text" 
        placeholder='Buscar conteúdo'
        {...register('query')}
        />
      </SearchForm>
    </SearchFormContainer>
  )
}