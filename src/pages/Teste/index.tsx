import { useEffect, useState } from 'react'
import api from '../../services/api'

export function Teste() {
  const [repos, setRepos] = useState([])
  

  useEffect(() => { 
    api.get('users/sergiosaruijr/repos').then( info => setRepos(info.data))
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
          return(
            <li>
                  <p>{item.owner.login}</p>
                  <p>{item.owner.followers_url}</p>
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