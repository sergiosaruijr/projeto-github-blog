import { useEffect, useState } from 'react'
import api from '../../services/api'
import { dataFormatter, dataRelativeTimeFormatter } from '../../utils/formatter'

export function Teste() {
  const [repos, setRepos] = useState([])
  

  useEffect(() => { 
    api.get('repos/sergiosaruijr/projeto-github-blog/issues').then( info => setRepos(info.data))
    // api.get(`/repos`).then( info => console.log(info.data))
  } ,[])

  // useEffect(() => {
  //   api
  //    .get("users/sergiosaruijr")
  //    .then((response) => setRepos(response.data))
  //    .catch((err) => {
  //     console.error("ops! ocorreu um erro" + err);
  //    });
  //  }, []);


  return (
    <>
      <h1> Hello World</h1>
      <ul>
        {repos.map((item: any) => {
          const days = dataFormatter.format(new Date(item.created_at))
          console.log(parseInt(days))
          return(
            <li>
                  <p>{item.title}</p> 
                  <p>{item.body}</p>
                  {/* arrumar formatação */}
                  <p>{dataRelativeTimeFormatter.format(-parseInt(days), 'day')}</p>
                  <p>{item.url}</p>
            </li>
          )
        })}
      </ul>
      {/* {repos.map((item: any) => {
        return(
          <h1>{item.owner.login}</h1>
        )
      })} */}
    </>
  )
}