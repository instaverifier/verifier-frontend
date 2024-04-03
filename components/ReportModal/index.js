import { Button, Col, Form, Input, Modal, Row, message } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";

const ReportModal = ({ reportOpen, setReportOpen }) => {
  const [loading, setLoading] = useState(false);
  const handleCancel = () => {
    setReportOpen(false);
  };
  const handleFinish = async (values) => {
    setLoading(true);
    const params = {
      ...values,
      ["isBad"]: 1,
      ["category_type"]: "Type A",
    };

    try {
      const sessionKey = Cookies.get("sessionKey");
      const response = await axios.post(
        `https://verifer-backend.onrender.com/v1/verifer/report`, // Assuming your backend server exposes an endpoint like this
        params,
        {
          headers: {
            Sessionkey: sessionKey, // Assuming your server expects the session key in a Bearer token format
            // Add other headers if needed
          },
        }
      );
      handleCancel();
    } catch (error) {
      message.error(error?.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Modal
      title="Report"
      open={reportOpen}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        layout="vertical"
        requiredMark={false}
        name="basic"
        onFinish={handleFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row>
          <Col xs={24}>
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input placeholder="Enter your name" />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item
              label="Company Name"
              name="cmp_name"
              rules={[
                {
                  required: true,
                  message: "Please input company name!",
                },
              ]}
            >
              <Input placeholder="Enter company name" />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item
              label="Company Address"
              name="cmp_address"
              rules={[
                {
                  required: true,
                  message: "Please input company address!",
                },
              ]}
            >
              <Input placeholder="Enter company address" />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item
              label="GST Number"
              name="gst_no"
              rules={[
                {
                  required: true,
                  message: "Please input GST number!",
                },
              ]}
            >
              <Input placeholder="Enter GST number" />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item
              label="Mobile"
              name="mobile"
              rules={[
                {
                  required: true,
                  message: "Please input mobile number!",
                },
              ]}
            >
              <Input placeholder="Enter mobile number" maxLength={10} />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item
              label="Amount"
              name="amount"
              rules={[
                {
                  required: true,
                  message: "Please input amount!",
                },
              ]}
            >
              <Input placeholder="Enter amount" />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item
              label="URL"
              name="url"
              rules={[
                {
                  required: true,
                  message: "Please input url!",
                },
              ]}
            >
              <Input placeholder="Enter URL" />
            </Form.Item>
          </Col>
          <Col xs={24} className="d-flex justify-end">
            <Button style={{ marginRight: "5px" }} onClick={handleCancel}>
              Cancel
            </Button>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};
export default ReportModal;
