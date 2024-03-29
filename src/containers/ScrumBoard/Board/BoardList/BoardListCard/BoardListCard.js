import React from "react";
import { Link } from "react-router-dom";
import { Progress, Icon, Popover } from "antd";
import moment from "moment";
import {
  Avatar,
  InfoWrapper,
  Title,
  CreatedAt,
  ProjectInfo,
  MoreActionWrapper
} from "./BoardListCard.style";

import { IconSvg } from "../../../../../components/ScrumBoard/IconSvg/IconSvg";
import MoreIcon from "../../../../../static/Images/16.svg";
import PrivateIcon from "../../../../../static/Images/18.svg";
import PublicIcon from "../../../../../static/Images/19.svg";
import PlusIcon from "../../../../../static/Images/24.svg";
import SoftwareIcon from "../../../../../static/Images/20.svg";
import AvatarIcon from "../../../../../static/Images/08-icon.svg";

export default function BoardListCard({ item, onDelete, onEdit }) {
  const MoreActions = (
    <MoreActionWrapper>
      <p onClick={onEdit}>Edit Board</p>
      <p onClick={onDelete}>Delete Board</p>
    </MoreActionWrapper>
  );

  return (
    <tbody>
      <tr>
        <td>
          <Link to={`/dashboard/scrum-board/project/${item.id}`}>
            <ProjectInfo>
              <Avatar src={AvatarIcon} alt={item.name} />
              <InfoWrapper>
                <Title>{item.title}</Title>
                <CreatedAt>
                  {moment(item.created_at).format("ddd d, YYYY")}
                </CreatedAt>
              </InfoWrapper>
            </ProjectInfo>
          </Link>
        </td>
        <td>
          <div style={{ width: 180 }}>
            <Progress
              percent={parseInt(item.progress)}
              size="small"
              status="active"
            />
          </div>
        </td>
        <td>
          <IconSvg src={SoftwareIcon} border={"none"} />
          {item.category}
        </td>
        <td>
          <Icon
            type="star"
            theme="filled"
            style={{
              color: "#ED8A19",
              fontSize: 19,
              verticalAlign: "middle",
              marginRight: 10
            }}
          />
          Favorites
        </td>
        <td>
          {item.open_to_company ? (
            <>
              <IconSvg src={PublicIcon} border={"none"} />
              Public
            </>
          ) : (
            <>
              <IconSvg src={PrivateIcon} border={"none"} />
              Private
            </>
          )}
        </td>
        <td>
          <IconSvg src={PlusIcon} radius={"10% 30% 25%"} padding={8} />
        </td>
        <td>
          <Popover placement="bottom" content={MoreActions} trigger="click">
            <IconSvg src={MoreIcon} border={"none"} padding={"0"} />
          </Popover>
        </td>
      </tr>
    </tbody>
  );
}
