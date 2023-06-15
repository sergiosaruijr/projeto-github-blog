import { useEffect, useState } from 'react'
import api from '../../services/api';

interface User {
  login: string;
  company: string;
  followers: number;
  avatar_url: string;
}

interface TotalIssue{
  open_issues: number;
}

export function Teste2() {
  const [ user, setUser ] = useState<User>()
  const [totalIssue, setTotalIssue] = useState<TotalIssue>()

  

  async function loadUser() {
    const response = await fetch('https://api.github.com/users/sergiosaruijr');
    const data = await response.json();

    setUser(data)
    console.log(data)
  }

  useEffect(() => { 
    loadUser()
  }, [])

  useEffect(() => { 
    api.get('repos/sergiosaruijr/projeto-github-blog').then( info => setTotalIssue(info.data))
    // api.get(`/repos`).then( info => console.log(info.data))
  } ,[])

  function ExistOrNotCompany() {
    if (user?.company != null) {
      return user.company
    }else{
      return 'null'
    }
  }

  return (
    <>
      <h1>Oi</h1>
      <h1>{user?.login}</h1>
      <h1>{ExistOrNotCompany()}</h1>
      <p>{user?.followers}</p>
      <img src={user?.avatar_url} alt="" />
      <p>{totalIssue?.open_issues}</p>

    </>
  );
}