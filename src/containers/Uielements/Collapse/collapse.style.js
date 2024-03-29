import styled from "styled-components";
import { palette } from "styled-theme";
import { borderRadius, transition } from "../../../settings/style-util";
import WithDirection from "../../../settings/withDirection";

const CollapseStyleWrapper = styled.div`
  .ant-collapse {
    background-color: transparent;
    border-radius: 0;
    border: 0;

    > .ant-collapse-item {
      background-color: #fff;
      border-radius: 4px;
      border: 1px solid ${palette("border", 0)};
      margin-bottom: 5px;

      &:last-child {
        margin-bottom: 0;
      }

      > .ant-collapse-header {
        height: 42px;
        line-height: 19px;
        padding-left: ${props =>
          props["data-rtl"] === "rtl" ? "16px" : "40px"}
        padding-right: ${props =>
          props["data-rtl"] === "rtl" ? "16px" : "40px"};
        font-size: 14px;
        font-weight: 500;
        color: ${palette("text", 0)};
        cursor: pointer;
        position: relative;
        background-color: ${palette("grayscale", 6)};
        ${transition(0.4)};
        ${borderRadius("4px 4px 0 0")};

        .arrow {
          font-size: 12px;
          right: ${props => (props["data-rtl"] === "rtl" ? "auto" : "16px")};
          left: ${props => (props["data-rtl"] === "rtl" ? "16px" : "auto")};
        }
      }

      .ant-collapse-content {
        border-top: 1px solid ${palette("border", 0)};
        ${borderRadius("0 0 4px 4px")};

        p {
          font-size: 13px;
          color: ${palette("text", 3)};
        }
      }
    }

    &.ant-collapse-borderless {
      > .ant-collapse-item {
        border-radius: 0;
        border: 0;

        > .ant-collapse-header {
          background-color: ${palette("secondary", 1)};
          ${borderRadius()};
        }

        .ant-collapse-content {
          border-top: 0;
          ${borderRadius()};
        }
      }
    }
  }
`;

export default WithDirection(CollapseStyleWrapper);
