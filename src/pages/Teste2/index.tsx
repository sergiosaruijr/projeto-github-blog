import { useEffect, useState } from 'react'

interface User {
  login: string;
  company: string;
  followers: number;
  avatar_url: string;
}

export function Teste2() {
  const [ user, setUser ] = useState<User>()

  async function loadUser() {
    const response = await fetch('https://api.github.com/users/sergiosaruijr');
    const data = await response.json();

    setUser(data)
    console.log(data)
  }

  useEffect(() => { 
    loadUser()
  }, [])

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

    </>
  );
}