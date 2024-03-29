import React from "react";
import Button from "../../../../../ui/Antd/Button/Button";
import AvatarCard from "../AvatarCard/AvatarCard";
import Wrapper, { FollowerList, ListItem } from "./Followers.styles";

const Followers = ({ list, push, title }) => {
  console.log("Followers -> list", list);
  return (
    <Wrapper>
      <h3>
        <strong>{list.length}</strong> {title}
      </h3>
      <FollowerList>
        {list.length > 0 &&
          list.map((user) => (
            <ListItem key={`follower-key${user.id}`}>
              <AvatarCard
                profilePhoto={user.profilePhoto}
                fullName={`${user.name} ${user.lastName}`}
                userName={user.userName}
                push={push}
              />
              {/* <Button>Profile</Button> */}
            </ListItem>
          ))}
      </FollowerList>
    </Wrapper>
  );
};

export default Followers;
