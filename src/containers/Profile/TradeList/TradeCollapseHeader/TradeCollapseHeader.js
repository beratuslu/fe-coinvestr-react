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
  MoreActionWrapper,
  Table,
  ProgressWrapper
} from "./TradeCollapseHeader.style";

import { IconSvg } from "../../../../components/ScrumBoard/IconSvg/IconSvg";
import MoreIcon from "../../../../static/Images/16.svg";
import PrivateIcon from "../../../../static/Images/18.svg";
import PublicIcon from "../../../../static/Images/19.svg";
import PlusIcon from "../../../../static/Images/24.svg";
import SoftwareIcon from "../../../../static/Images/20.svg";
import AvatarIcon from "../../../../static/Images/08-icon.svg";

export default function BoardListCard({ item, onDelete, onEdit }) {
  const MoreActions = (
    <MoreActionWrapper>
      <p onClick={onEdit}>Edit Board</p>
      <p onClick={onDelete}>Delete Board</p>
    </MoreActionWrapper>
  );

  return (
    <Table>
      <tbody>
        <tr>
          <td width="300">
            <Link to={`/dashboard/scrum-board/project/${item.id}`}>
              <ProjectInfo>
                <Avatar src={AvatarIcon} alt={item.name} />
                <InfoWrapper>
                  <Title>{item.user.name}</Title>
                  {/* <CreatedAt>
                    {moment(item.created_at).format("ddd d, YYYY")}
                  </CreatedAt> */}
                </InfoWrapper>
              </ProjectInfo>
            </Link>
          </td>
          <td>HOT_BTC</td>
          <td>0.000000004</td>
          <td>0.000000005</td>
          <td>0.000000003</td>
          <td>20/12/2020 15:30:05</td>
          <td>
            <ProgressWrapper>
              <Progress
                percent={item.status.stopLoss + item.status.profit}
                successPercent={item.status.stopLoss}
                strokeColor=""
                size="small"
                status="active"
                strokeColor="#52c41a"
              />
            </ProgressWrapper>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
