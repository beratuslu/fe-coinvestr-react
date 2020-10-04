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
  ProgressWrapper,
} from "./TradeCollapseHeader.style";

import { IconSvg } from "../../../../../../components/ScrumBoard/IconSvg/IconSvg";
import MoreIcon from "../../../../../../static/Images/16.svg";
import PrivateIcon from "../../../../../../static/Images/18.svg";
import PublicIcon from "../../../../../../static/Images/19.svg";
import PlusIcon from "../../../../../../static/Images/24.svg";
import SoftwareIcon from "../../../../../../static/Images/20.svg";
import AvatarIcon from "../../../../../../static/Images/08-icon.svg";

// export default function BoardListCard({ trade, onDelete, onEdit }) {
export default function TradeCollapseHeader({ trade }) {
  console.log("TradeCollapseHeader -> trade", trade);
  return (
    <Table>
      <tbody>
        <tr>
          <td width="300">
            <Link to={`/dashboard/scrum-board/project/${trade.id}`}>
              <ProjectInfo>
                <Avatar src={AvatarIcon} alt={trade.name} />
                <InfoWrapper>
                  <Title>{trade.user.userName}</Title>
                </InfoWrapper>
              </ProjectInfo>
            </Link>
          </td>
          <td>{trade.symbol.split("BTC")[0]}_BTC</td>
          <td>{trade.buyPrice.toFixed(8)}</td>
          <td>{trade.profitPrice.toFixed(8)}</td>
          <td>{trade.stopLossPrice.toFixed(8)}</td>
          <td>{moment(trade.createTime).format("YYYY-MM-DD HH:mm:ss.SSS")}</td>
          <td>
            <ProgressWrapper className="progressWrapper">
              <Progress
                percent={trade.status.stopLoss + trade.status.profit}
                successPercent={trade.status.stopLoss}
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