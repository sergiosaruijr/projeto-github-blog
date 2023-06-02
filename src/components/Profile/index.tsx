import { ProfileBox, ProfileContainer, ProfileDataContainer, ProfileIconsAndData, ProfileIconsAndDataContainer, ProfilePhoto, ProfileResumeContainer, ProfileTitleAndLinkContainer } from './styles';

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileBox>
        <ProfilePhoto>
          <h1>Teste</h1>
        </ProfilePhoto>
        <ProfileDataContainer>
          <ProfileTitleAndLinkContainer>
            <strong>Sergio Akira Sarui Junior</strong>
            <a href="">GITHUB</a>
          </ProfileTitleAndLinkContainer>
          <ProfileResumeContainer>
            <p>bla bla bla</p>
          </ProfileResumeContainer>
      
        </ProfileDataContainer>
      </ProfileBox>
    </ProfileContainer>
  )
}