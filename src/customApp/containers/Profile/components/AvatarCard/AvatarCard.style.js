import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  .ion-camera {
    font-size: 24px;
    color: #323332;
    line-height: 1;
    position: absolute;
    bottom: -20px;
    left: 136px;
    cursor: pointer;
    z-index: 1;
    @media only screen and (max-width: 820px) {
      bottom: -0px;
      left: 118px;
    }
    @media only screen and (max-width: 480px) {
      bottom: 10px;
      left: 80px;
    }
  }
`;

export const Avatar = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 4px solid #ffffff;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Info = styled.div`
  width: calc(100% - 170px);
  padding-left: 10px;
`;

export default CardWrapper;
