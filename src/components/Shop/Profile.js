import ProfileLeft from "./ProfileLeft";
import ProfileRight from "./ProfileRight";
import './Profile.css'

const Profile = (props) => {
  return (
    <div className="profile_container">
      <ProfileLeft />
      <ProfileRight />
    </div>
  );
};

export default Profile;
