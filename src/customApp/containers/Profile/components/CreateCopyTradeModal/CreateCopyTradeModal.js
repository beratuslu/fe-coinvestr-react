import React, { Component } from "react";
import moment from "moment";
import InputNumber from "../../../../../components/uielements/InputNumber";
import Radio from "../../../../../components/uielements/radio";
import Form from "../../../../../components/uielements/form";
import Select, {
  SelectOption,
} from "../../../../../components/uielements/select";
import { DateRangepicker } from "../../../../../components/uielements/datePicker";
import Modal from "../../../../../components/feedback/modal";
import { CalendarModalBody } from "./calendar.style";

// import Button from "../../../../../ui/Antd/Button/Button";
// import AvatarCard from "../../../../../components/AvatarCard/AvatarCard";

import DeleteButton from "./deleteButton";
import { symbol, symbols } from "d3-shape";
const RangePicker = DateRangepicker;

const localeDatePicker = {
  lang: {
    placeholder: "Select date",
    rangePlaceholder: ["Start date", "End date"],
    today: "Today",
    now: "Now",
    backToToday: "Back to today",
    ok: "Ok",
    clear: "Clear",
    month: "Month",
    year: "Year",
    timeSelect: "Select time",
    dateSelect: "Select date",
    monthSelect: "Choose a month",
    yearSelect: "Choose a year",
    decadeSelect: "Choose a decade",
    yearFormat: "YYYY",
    dateFormat: "M/D/YYYY",
    dayFormat: "D",
    dateTimeFormat: "M/D/YYYY HH:mm:ss",
    monthFormat: "MMMM",
    monthBeforeYear: true,
    previousMonth: "Previous month (PageUp)",
    nextMonth: "Next month (PageDown)",
    previousYear: "Last year (Control + left)",
    nextYear: "Next year (Control + right)",
    previousDecade: "Last decade",
    nextDecade: "Next decade",
    previousCentury: "Last century",
    nextCentury: "Next century",
  },
  timePickerLocale: {
    placeholder: "Select time",
  },
};
export default Form.create({ name: "form_in_modal" })(
  class CreateCopyModalForm extends Component {
    handleOk = () => {
      this.props.setModalData("ok", this.props.selectedData);
    };
    handleCancel = () => {
      this.props.setModalData("cancel");
    };

    handleDelete = () => {
      this.props.setModalData("delete", this.props.selectedData);
    };
    renderOptions = () => {
      const { symbols } = this.props;
      return symbols.map((symbol) => {
        return (
          <SelectOption key={symbol} value={symbol}>
            {symbol}
          </SelectOption>
        );
      });
    };
    render() {
      const {
        modalVisible,
        selectedData,
        setModalData,
        symbols,
        loading,
      } = this.props;

      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;

      if (!modalVisible) {
        return <div />;
      }
      const title =
        selectedData && selectedData.title ? selectedData.title : "";
      const desc = selectedData && selectedData.desc ? selectedData.desc : "";
      const start =
        selectedData && selectedData.start ? moment(selectedData.start) : "";
      const end =
        selectedData && selectedData.end ? moment(selectedData.end) : "";
      const onChangeTitle = (event) => {
        selectedData.title = event.target.value;
        setModalData("updateValue", selectedData);
      };
      const onChangeDesc = (event) => {
        selectedData.desc = event.target.value;
        setModalData("updateValue", selectedData);
      };
      const onChangeFromTimePicker = (value) => {
        try {
          selectedData.start = value[0].toDate();
          selectedData.end = value[1].toDate();
        } catch (e) {}
        setModalData("updateValue", selectedData);
      };
      const handleChange = (value) => {
        console.log("extends -> handleChange -> value", value);
      };

      return (
        <div>
          <Modal
            title="Create Trade"
            visible={modalVisible}
            okText="Create"
            onCancel={onCancel}
            onOk={onCreate}
            confirmLoading={loading}
          >
            <Form layout="vertical">
              <Form.Item label="Symbol">
                {getFieldDecorator("symbol", {
                  initialValue: "ETHBTC",
                })(
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    onChange={handleChange}
                    loading={!symbols.length}
                    disabled={!symbols.length}
                  >
                    {this.renderOptions()}
                  </Select>
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("buyPrice", {
                  rules: [
                    {
                      required: true,
                      message: "Required.",
                    },
                    {
                      type: "number",
                      message: "Should be a number.",
                    },
                  ],
                })(
                  <InputNumber
                    className="ant-input-number"
                    placeholder="Buy Price"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("profitPrice", {
                  rules: [
                    {
                      required: true,
                      message: "Required.",
                    },
                    {
                      type: "number",
                      message: "Should be a number.",
                    },
                  ],
                })(<InputNumber placeholder="Profit Price" />)}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("stopLossPrice", {
                  rules: [
                    {
                      required: true,
                      message: "Required.",
                    },
                    {
                      type: "number",
                      message: "Should be a number.",
                    },
                  ],
                })(
                  <InputNumber
                    style={{ width: "100%" }}
                    placeholder="Stop Loss Price"
                  />
                )}
              </Form.Item>
              {/* <Form.Item label="Description">
                {getFieldDecorator("description")(<Input type="textarea" />)}
              </Form.Item> */}
              {/* <Form.Item className="collection-create-form_last-form-item">
                {getFieldDecorator("modifier", {
                  initialValue: "public",
                })(
                  <Radio.Group>
                    <Radio value="public">Public</Radio>
                    <Radio value="private">Private</Radio>
                  </Radio.Group>
                )}
              </Form.Item> */}
            </Form>
            {/* <CalendarModalBody>
            <div className="isoCalendarInputWrapper">
              <Select
                showSearch
                defaultValue="ETHBTC"
                style={{ width: "100%" }}
                onChange={handleChange}
                loading={!symbols.length}
                disabled={!symbols.length}
              >
                {this.renderOptions()}
              </Select>
            </div>
            <div className="isoCalendarInputWrapper">
              <Input
                value={title}
                placeholder="Buy Price"
                onChange={onChangeTitle}
              />
            </div>
            <div className="isoCalendarInputWrapper">
              <Input
                value={title}
                placeholder="Profit Price"
                onChange={onChangeTitle}
              />
            </div>
            <div className="isoCalendarInputWrapper">
              <Input
                value={title}
                placeholder="Stop Loss Price"
                onChange={onChangeTitle}
              />
            </div>
          </CalendarModalBody> */}
          </Modal>
        </div>
      );
    }
  }
);
