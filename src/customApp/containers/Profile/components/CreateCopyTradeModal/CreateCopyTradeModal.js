import React, { Component } from "react";
import moment from "moment";
import Input from "../../../../../components/uielements/input";
import Select, {
  SelectOption,
} from "../../../../../components/uielements/select";
import { DateRangepicker } from "../../../../../components/uielements/datePicker";
import Modal from "../../../../../components/feedback/modal";
import { CalendarModalBody } from "./calendar.style";

// import Button from "../../../../../ui/Antd/Button/Button";
// import AvatarCard from "../../../../../components/AvatarCard/AvatarCard";

import DeleteButton from "./deleteButton";
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
export default class extends Component {
  handleOk = () => {
    this.props.setModalData("ok", this.props.selectedData);
  };
  handleCancel = () => {
    this.props.setModalData("cancel");
  };

  handleDelete = () => {
    this.props.setModalData("delete", this.props.selectedData);
  };
  render() {
    const { modalVisible, selectedData, setModalData } = this.props;
    if (!modalVisible) {
      return <div />;
    }
    const title = selectedData && selectedData.title ? selectedData.title : "";
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
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="ok"
          cancelText="Cancel"
        >
          <CalendarModalBody>
            <div className="isoCalendarInputWrapper">
              <Select
                defaultValue="lucy"
                style={{ width: "100%" }}
                onChange={handleChange}
              >
                <SelectOption value="jack">Jack</SelectOption>
                <SelectOption value="lucy">Lucy</SelectOption>
                <SelectOption value="disabled" disabled>
                  Disabled
                </SelectOption>
                <SelectOption value="Yiminghe">yiminghe</SelectOption>
              </Select>
            </div>
            <div className="isoCalendarInputWrapper">
              <Input
                value={title}
                placeholder="Set Title"
                onChange={onChangeTitle}
              />
            </div>

            <div className="isoCalendarInputWrapper">
              <Input
                value={desc}
                placeholder="Set DEscription"
                onChange={onChangeDesc}
              />
            </div>

            <div className="isoCalendarDatePicker">
              <RangePicker
                locale={localeDatePicker}
                ranges={{
                  Today: [moment(), moment()],
                  "This Month": [moment(), moment().endOf("month")],
                }}
                value={[start, end]}
                showTime
                format="YYYY/MM/DD HH:mm:ss"
                onChange={onChangeFromTimePicker}
              />
              <DeleteButton handleDelete={this.handleDelete} />
            </div>
          </CalendarModalBody>
        </Modal>
      </div>
    );
  }
}
