import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { palette } from "styled-theme";
import {
  transition,
  borderRadius,
  boxShadow,
} from "../../../settings/style-util";

export const FollowDropDownMenuStyles = createGlobalStyle`
  body{
    .followDropDownMenu{
      .unfollow{
        background-color:#F75D81;
        color:white;
        &:hover{
          background-color:#fb436e
        }
      }
      
    }
  } 
`;

const Wrapper = styled.div`
  .isoTradeTypeTab {
    margin-bottom: 20px;
    display: flex;

    .isoTradeType {
      margin-left: ${(props) =>
        props["data-rtl"] === "rtl" ? "auto" : "inherit"};
      margin-right: ${(props) =>
        props["data-rtl"] === "rtl" ? "inherit" : "auto"};

      .ant-radio-button-wrapper {
        margin: 0;
        height: auto;
        line-height: 1.5;
        color: rgba(0, 0, 0, 0.65);
        display: inline-block;
        transition: all 0.3s ease;
        cursor: pointer;
        border: 0;
        background: transparent;
        padding: 0 15px;
        ${boxShadow("none")};

        &:last-child {
          padding-right: ${(props) =>
            props["data-rtl"] === "rtl" ? "15px" : "0"};
          padding-left: ${(props) =>
            props["data-rtl"] === "rtl" ? "0" : "15px"};
        }

        &:first-child {
          padding-left: ${(props) =>
            props["data-rtl"] === "rtl" ? "15px" : "0"};
          padding-right: ${(props) =>
            props["data-rtl"] === "rtl" ? "0" : "15px"};
        }

        &:not(:first-child)::before {
          left: ${(props) =>
            props["data-rtl"] === "rtl" ? "inherit" : "-1px"};
          right: ${(props) =>
            props["data-rtl"] === "rtl" ? "-1px" : "inherit"};
        }

        span {
          font-size: 14px;
          font-weight: 400;
          color: ${palette("text", 3)};
        }
      }

      .ant-radio-button-wrapper-checked {
        span {
          color: ${palette("primary", 0)};
        }
      }
    }
  }
`;

export const Banner = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 400px;
  position: relative;
  &::after {
    content: "";
    height: 160px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.41));
  }

  .container {
    height: 400px;
    position: relative;
    z-index: 1;
    .avatar-card {
      position: absolute;
      bottom: -7px;
      height: 100px;
      left: 30px;
      /* pointer-events: none; */
      width: calc(100% - 60px);
      @media only screen and (max-width: 820px) {
        bottom: -35px;
      }
      @media only screen and (max-width: 820px) {
        bottom: 20px;
      }
      .avatar {
        @media only screen and (max-width: 820px) {
          width: 160px;
          height: 160px;
        }
        @media only screen and (max-width: 820px) {
          width: 140px;
          height: 140px;
        }
        @media only screen and (max-width: 480px) {
          width: 100px;
          height: 100px;
          border-width: 3px;
        }
      }
      .info {
        @media only screen and (max-width: 767px) {
          padding-left: 15px;
          width: calc(100% - 160px);
        }
        @media only screen and (max-width: 667px) {
          width: calc(100% - 140px);
        }
        @media only screen and (max-width: 480px) {
          width: calc(100% - 100px);
        }
        h3 {
          font-size: 24px;
          line-height: 36px;
          font-weight: 500;
          color: #ffffff;
          pointer-events: all;
          @media only screen and (max-width: 667px) {
            font-size: 22px;
            line-height: 34px;
          }
          @media only screen and (max-width: 480px) {
            font-size: 18px;
            line-height: 30px;
          }
        }
        p {
          color: #ffffff;
          font-size: 14px;
          line-height: 24px;
          pointer-events: all;
        }
      }
    }
  }
`;

export const Navigation = styled.div`
  background-color: #ffffff;
  pointer-events: all;
  box-shadow: 0 1px 2px #e5e5e5;
  .innerWrapper {
    display: flex;
    justify-content: space-between;
    ul.menu {
      display: flex;
      align-items: center;
      margin-left: 182px;
      @media only screen and (max-width: 820px) {
        margin-left: 0px;
      }
      li {
        margin: 0 15px;
        display: block;
        padding: 18px 15px 19px;
        color: ${palette("secondary", 5)};
        font-size: 14px;
        font-weight: 400;
        cursor: pointer;
        &:first-child {
          margin-left: 0;
        }
        &:last-child {
          margin-right: 0;
        }
        strong {
          font-size: 18px;
          font-weight: 600;
          margin-right: 4px;
        }
        &.active {
          border-bottom: 2px solid ${palette("secondary", 5)};
        }
        &.disabled {
          cursor: initial;
        }

        @media only screen and (max-width: 570px) {
          margin: 0 0px;
          padding: 18px 7px 10px;
          text-align: center;

          strong {
            font-size: 14px;
          }
        }
      }
    }
    ul.buttons {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .unfollow {
        background-color: red;
      }
    }
  }
`;

export const ContentWrapper = styled.div`
  padding: 30px 0;
`;

export { Wrapper };
// export default Wrapper;
