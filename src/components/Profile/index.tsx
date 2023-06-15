import { useEffect, useState } from 'react';
import { 
  ProfileBox, ProfileContainer, ProfileDataContainer, ProfileIconsAndData, 
  ProfileIconsAndDataContainer, ProfilePhoto, ProfileResumeContainer, ProfileTitleAndLinkContainer 
} from './styles';
import { Buildings, Users} from 'phosphor-react'
import { GithubOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

interface User {
  login: string;
  company: string;
  followers: number;
  name: string;
  avatar_url: string;
  html_url: string;
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
          <img src={user?.avatar_url} alt="" />
        </ProfilePhoto>
        <ProfileDataContainer>
          <ProfileTitleAndLinkContainer>
            <strong>{user?.name}</strong>
            {/* arrumar espaçamento */}
              <NavLink to={`${user?.html_url}`}>
                GITHUB
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </NavLink>

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