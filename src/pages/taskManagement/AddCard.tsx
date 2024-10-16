import React from "react";
import { createStyles } from "antd-style";
import { Button, Form, Input, Modal, Space } from "antd";

const useStyle = createStyles(({ token }) => ({
  "my-modal-body": {
    background: token.blue1,
    padding: token.paddingSM,
  },
  "my-modal-mask": {
    boxShadow: `inset 0 0 15px #fff`,
  },
  "my-modal-header": {
    borderBottom: `1px dotted ${token.colorPrimary}`,
  },
  "my-modal-footer": {
    color: token.colorPrimary,
  },
  "my-modal-content": {
    border: "1px solid #333",
  },
}));
interface AddCardType {
  isModalOpen: boolean[];
  toggleModal: (index: number, open: boolean) => void;
}
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const AddCard = ({ isModalOpen, toggleModal }: AddCardType) => {
  const { styles } = useStyle();
  //   const token = useTheme();
  const [form] = Form.useForm();
  const classNames = {
    body: styles["my-modal-body"],
    mask: styles["my-modal-mask"],
    header: styles["my-modal-header"],
    footer: styles["my-modal-footer"],
    content: styles["my-modal-content"],
  };

  const modalStyles = {
    header: {
      borderRadius: 0,
      paddingInlineStart: 5,
    },
    body: {
      //   boxShadow: "inset 0 0 5px #999",
      borderRadius: 5,
    },
    mask: {
      backdropFilter: "blur(10px)",
    },
    footer: {
      //   borderTop: "1px solid #333",
    },
    content: {
      //   boxShadow: "0 0 30px #999",
    },
  };

  const onFinish = () => {};

  return (
    <div>
      <Modal
        title=" Add Task"
        open={isModalOpen[0]}
        // onOk={() => toggleModal(0, false)}
        // onCancel={() => toggleModal(0, false)}
        footer={null}
        classNames={classNames}
        styles={modalStyles}
      >
        <Form
          {...layout}
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          style={{ maxWidth: 600, padding: "10px" }}
        >
          <Form.Item name="note" label="Note" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) =>
              prevValues.gender !== currentValues.gender
            }
          >
            {({ getFieldValue }) =>
              getFieldValue("gender") === "other" ? (
                <Form.Item
                  name="customizeGender"
                  label="Customize Gender"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              ) : null
            }
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Space>
              <Button type="primary" htmlType="submit">
                Add
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => toggleModal(0, false)}
              >
                Cancel
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddCard;
