import { useEffect, useState } from 'react'
import api from '../../services/api'
import { dataFormatter, dataRelativeTimeFormatter } from '../../utils/formatter'
import { Search } from './components/Search'

interface ItensProps {
  [title: string]: any;
}

type Repos = {
  items?: ItensProps[];
}[]


export function Teste() {
  const [repos, setRepos] = useState<Repos>([])
  const [search, setSearch] = useState('')
  // console.log(search)
  
  

  useEffect(() => { 
    api.get(`search/issues?q=${search}%20repo:sergiosaruijr/projeto-github-blog`).then( info => setRepos(info.data))
    // api.get('repos/sergiosaruijr/projeto-github-blog/issues').then( info => setRepos(info.data))
    // api.get(`/repos`).then( info => setRepos(info.data))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  } ,[])


  // console.log(repos.items)
  return (
    <>
      <Search />
      {/* <h1> Hello World</h1>
      {repos.total_count} */}
      <input 
      placeholder='Busque aqui'
      onChange={(e) => setSearch(e.target.value)}
      />
    
      <ul>
        {repos.items?.filter((item: any) => {
          return search === '' 
          ? item 
          : item.title.includes(search)
        })
        .map((item: any, index: any) => {
          const days = dataFormatter.format(new Date(item.created_at))
          // console.log(Search)
          
          if (item.title === search){
            return <p>{item.title} algo mais</p> 
          }
          return(
            <li key={index}>
                  <h1>Titulos</h1>
                  <p>{item.title}</p> 
                  <p>{item.body}</p>
                  {/* arrumar formatação */}
                  <p>{dataRelativeTimeFormatter.format(-parseInt(days), 'day')}</p>
                  <p>{item.url}</p>
            </li>
          )
          })}
        </ul>
      
    </>
  )
}