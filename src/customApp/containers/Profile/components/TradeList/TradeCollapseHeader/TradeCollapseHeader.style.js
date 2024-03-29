import styled from "styled-components";

export const ProjectInfo = styled.div`
  display: flex;
  align-items: center;
`;
export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #00c6e6;
  margin-right: 16px;
  flex-shrink: 0;
`;

export const InfoWrapper = styled.div`
  font-family: "Roboto";
  font-weight: 500;
`;
export const ProgressWrapper = styled.div`
  width: 180;
  .ant-progress-inner {
    background-color: #e2e2e2;
    .ant-progress-success-bg {
      background-color: #f5222d;
    }
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  color: #323332;
  margin-bottom: 3px;
`;
export const CreatedAt = styled.p`
  font-size: 13px;
  color: #838b9d;
  margin: 0;
`;

export const MoreActionWrapper = styled.div`
  p {
    cursor: pointer;
    font-size: 14px;
    color: #788195;
    text-transform: capitalize;
    padding: 4px 0;
    font-weight: 500;
    transition: color 0.3s ease-out;
    &:hover {
      color: #323332;
    }
  }
`;

export const Table = styled.table`
  table-layout: fixed;
  width: 1000px;
  tr {
    td {
      padding: 15px;
      text-align: left;
      width: 150px;
      /* @media (min-width: 768px) {
        padding-left: 0;
        padding-right: 0;
        text-align: left;
      } */
      color: #788195;
      font-size: 14px;
      font-weight: 500;

      &:first-child {
        width: 200px;
      }
      &:last-child {
        width: 200px;
      }
      .ant-progress {
        > div {
          display: flex;
          align-items: center;
        }
        .ant-progress-text {
          color: #788195;
          font-size: 14px;
          font-weight: 500;
        }
      }
    }
  }
`;
