import React from "react";
import CardWrapper, { Avatar, Info } from "./AvatarCard.style";
import profilePlaceHolder from "../../../../assets/profile-placeholder.jpg";

const AvatarCard = ({ className, fullName, profilePhoto, userName }) => {
  const profilePhotoUri = profilePhoto
    ? `https://res.cloudinary.com/dsmfye6yy/image/upload/w_300,h_300,c_fill,g_custom/${profilePhoto}.jpg`
    : profilePlaceHolder;

  return (
    <CardWrapper className={`avatar-card ${className ? className : ""}`}>
      <Avatar className="avatar isoIconWrapper">
        <img src={profilePhotoUri} alt={fullName} />
      </Avatar>

      <Info className="info">
        {<h3 className="name">{fullName}</h3>}
        {<p className="username">{userName}</p>}
      </Info>
    </CardWrapper>
  );
};

export default AvatarCard;
