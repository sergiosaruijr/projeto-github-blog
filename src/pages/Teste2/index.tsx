import { useEffect, useState } from 'react'

export function Teste2() {
  
  async function loadUser() {
    const response = await fetch('https://api.github.com/users/sergiosaruijr');
    const data = await response.json();

    console.log(data)
  }

  useEffect(() => { 
    loadUser()
  }, [])

  return (

    <h1>Oi</h1>

    // <ul>
    //     {user.map((item: any, index: any) => {
    //       return(
    //         <div key={index}>
    //           <li>
    //             <p>{item.owner.login}</p>
    //             <p>{item.owner.followers_url}</p>
    //           </li>
    //         </div>
    //       )
    //     })}
    //   </ul>
  );
}