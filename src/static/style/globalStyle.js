import { createGlobalStyle } from "styled-components";
import "antd/dist/antd.css";

const GlobalStyles = createGlobalStyle`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 32px;
    font-weight: 700;
    color: #fff;
  }

  .ant-table-thead > tr.ant-table-row-hover:not(.ant-table-expanded-row) > td, .ant-table-tbody > tr.ant-table-row-hover:not(.ant-table-expanded-row) > td, .ant-table-thead > tr:hover:not(.ant-table-expanded-row) > td, .ant-table-tbody > tr:hover:not(.ant-table-expanded-row) > td {
    background: #f8f8f8!important;
  }

  .ant-row.ant-form-item {
    margin-bottom: 5px;
  }

  .has-success.has-feedback {
    .ant-select {
      .ant-select-selection {
        .ant-select-selection__rendered {
          .ant-select-selection__placeholder {
            display: none !important;
          }
        }
      }
    }
  }

  /*-----------------------------------------------*/ 
  // style for project category menu [ScrumBoard]
  /*-----------------------------------------------*/
  .project-category {
    .ant-select-dropdown-menu {
      .ant-select-dropdown-menu-item {
        padding: 8px 12px;
        color: #000000;
        font-family: 'Roboto';
        font-weight: 400;
      }
    }
  }

  /*-----------------------------------------------*/ 
  // style for project menu [ScrumBoard]
  /*-----------------------------------------------*/
  .ant-dropdown {
    &.project-menu {
      width: 280px;
      top: 133px !important;
      
      .ant-dropdown-menu {
        padding: 0;
        overflow: hidden;

        .ant-dropdown-menu-item {
          min-height: 54px;
          line-height: auto;
          display: flex;
          align-items: center;
          padding: 10px 20px;

          &:first-child {
            padding: 0;
            border-bottom: 1px solid #f4f6fd;

            &:hover,
            &:focus {
              background-color: #ffffff;
            }
          }

          &:hover,
          &:focus {
            background-color: #F3F5FD;
          }

          &:last-child {
            background-color: #E6EAF8;
          }
        }
      }
    }
  }

  /*-----------------------------------------------*/ 
  // style for popover [ScrumBoard]
  /*-----------------------------------------------*/
  .ant-popover {
    .ant-checkbox-group {
      display: flex;
      flex-direction: column;
      .ant-checkbox-group-item {
        margin: 5px 0;
        span {
          font-size: 14px;
          color: #788195;
          text-transform: capitalize;
        }
      }
    }
  }

  /*-----------------------------------------------*/ 
  // style for modal [ScrumBoard]
  /*-----------------------------------------------*/
  .ant-modal-wrap {
    .ant-modal {
      .ant-modal-content {
        .ant-modal-body {
          .render-form-wrapper {
            padding: 10px;
            h2 {
              margin: 0;
            }
            form {
              padding: 15px 0 3px;
              .field-container {
                margin-bottom: 26px;
              }
            }
          }
        }
      }
    }
  }


/*-----------------------------------------------*/ 
  // style for Drawer [ScrumBoard]
/*-----------------------------------------------*/



/* Instagram Modal */

.ant-modal-wrap.instagram-modal .ant-modal {
  max-width: 935px;
  width: 100% !important;
}

@media only screen and (max-width: 991px) {
  .ant-modal-wrap.instagram-modal .ant-modal {
    padding: 0 60px;
  }
}

@media only screen and (max-width: 767px) {
  .ant-modal-wrap.instagram-modal .ant-modal {
    max-width: 580px;
  }
}

.ant-modal-wrap.instagram-modal .ant-modal-content {
  border-radius: 0;
}

.ant-modal-wrap.instagram-modal .ant-modal-content button.ant-modal-close {
  position: fixed;
  color: #fff;
}

.ant-modal-wrap.instagram-modal .ant-modal-content button.ant-modal-close i {
  font-size: 24px;
}

.ant-modal-wrap.instagram-modal .ant-modal-content .ant-modal-body {
  padding: 0;
}


  


`;

export default GlobalStyles;
