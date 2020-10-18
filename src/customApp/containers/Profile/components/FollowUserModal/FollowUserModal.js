import React, { Component } from "react";
import moment from "moment";
import InputNumber from "../../../../../components/uielements/InputNumber";
import Form from "../../../../../components/uielements/form";
import Select, {
  SelectOption,
} from "../../../../../components/uielements/select";
import Modal from "../../../../../components/feedback/modal";

export default Form.create({ name: "form_in_modal_follow" })(
  class CreateCopyModalForm extends Component {
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
        visible,
        onCancel,
        onCreate,
        form,
        modalVisible,
        symbols,
        loading,
        title,
        isFollowed,
        followAmount,
      } = this.props;
      const { getFieldDecorator } = form;

      if (!modalVisible) {
        return <div />;
      }

      return (
        <div>
          <Modal
            title={isFollowed ? "Edit Copy Amount" : "Enter Copy Amount"}
            visible={modalVisible}
            okText={isFollowed ? "Edit Amount" : "Copy Next Trades"}
            onCancel={onCancel}
            onOk={onCreate}
            confirmLoading={loading}
          >
            <Form layout="vertical">
              <Form.Item>
                {getFieldDecorator("amount", {
                  initialValue: isFollowed ? followAmount : null,
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
                    placeholder="Amount"
                  />
                )}
              </Form.Item>
            </Form>
          </Modal>
        </div>
      );
    }
  }
);
