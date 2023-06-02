import { ProfileBox, ProfileContainer, ProfileDataContainer, ProfileIconsAndData, ProfileIconsAndDataContainer, ProfilePhoto, ProfileResumeContainer, ProfileTitleAndLinkContainer } from './styles';

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileBox>
        <ProfilePhoto>
          <h1>Foto</h1>
        </ProfilePhoto>
        <ProfileDataContainer>
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
            <ProfileIconsAndData>
              Aqui
            </ProfileIconsAndData>
          </ProfileIconsAndDataContainer>
        </ProfileDataContainer>
      </ProfileBox>
    </ProfileContainer>
  )
}