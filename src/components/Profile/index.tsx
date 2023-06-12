import { ReactNode, useEffect, useState } from 'react';
import { ProfileBox, ProfileContainer, ProfileDataContainer, ProfileIconsAndData, ProfileIconsAndDataContainer, ProfilePhoto, ProfileResumeContainer, ProfileTitleAndLinkContainer } from './styles';
import api from '../../services/api';
import { Buildings, Users} from 'phosphor-react'
import { GithubOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

interface User {
  login: string;
  company: string;
  followers: number;
  name: string;
}

export function Profile() {
  // const [ infoProfiles, setInfoProfile] = useState([])

  // useEffect(() => {
  //   fetch('https://api.github.com/users/sergiosaruijr')
  //   .then(response => response.json())
  //   .then(data => setInfoProfile(data))
  // }, [])

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
    <ProfileContainer>
      <ProfileBox>
        <ProfilePhoto>
          <h1>Foto</h1>
        </ProfilePhoto>
        <ProfileDataContainer>
          <ProfileTitleAndLinkContainer>
            <strong>{user?.name}</strong>
            {/* arrumar espaçamento */}
              <a href="">
                GITHUB
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
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
              <GithubOutlined size={18}/>
              <p>{user?.login}</p>
            </ProfileIconsAndData>
            <ProfileIconsAndData>
              <Buildings size={18} weight="fill"/>
              <p>{ExistOrNotCompany()}</p>
            </ProfileIconsAndData>
            <ProfileIconsAndData>
              <Users size={18} weight='fill'/>
              <p>{user?.followers}</p>
            </ProfileIconsAndData>
          </ProfileIconsAndDataContainer>
        </ProfileDataContainer>
      </ProfileBox>
    </ProfileContainer>
  )
}