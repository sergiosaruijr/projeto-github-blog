import { ReactNode, useEffect, useState } from 'react';
import { ProfileBox, ProfileContainer, ProfileDataContainer, ProfileIconsAndData, ProfileIconsAndDataContainer, ProfilePhoto, ProfileResumeContainer, ProfileTitleAndLinkContainer } from './styles';
import api from '../../services/api';

export function Profile() {
  // const [ infoProfiles, setInfoProfile] = useState([])

  // useEffect(() => {
  //   fetch('https://api.github.com/users/sergiosaruijr')
  //   .then(response => response.json())
  //   .then(data => setInfoProfile(data))
  // }, [])

  const [repos, setRepos] = useState ([])

  useEffect(() => { 
    api.get('').then( info => setRepos(info.data))
  } ,[])

  return (
    <ProfileContainer>
      <ProfileBox>
        <ProfilePhoto>
          <h1>Foto</h1>
        </ProfilePhoto>
        <ProfileDataContainer>
          {/* {infoProfiles.map(infoProfile => {
            return(
              <h3>{infoProfile.name}</h3>
            )
          })} */}
          <ProfileTitleAndLinkContainer>
            <strong>Sergio Akira Sarui Junior</strong>
            <a href="">GITHUB</a>
          </ProfileTitleAndLinkContainer>
          <ProfileResumeContainer>
            <p>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. 
              Eu viverra massa quam dignissim aenean malesuada suscipit. 
              Nunc, volutpat pulvinar vel mass.
            </p>
          </ProfileResumeContainer>
          <ProfileIconsAndDataContainer>
            {/* {repos.map((item: any , index) => {
                return(
                  <div key={index}>
                    {item.name}
                  </div>
                )
            })} */}
            <ProfileIconsAndData>
              Aqui
            </ProfileIconsAndData>
          </ProfileIconsAndDataContainer>
        </ProfileDataContainer>
      </ProfileBox>
    </ProfileContainer>
  )
}