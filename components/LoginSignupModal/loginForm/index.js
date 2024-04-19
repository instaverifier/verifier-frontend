import React from "react";
import { Button, Col, Form, Input, Row } from "antd";
import _ from "lodash";

const LoginForm = ({ onLoginFinish, setCurrentForm }) => {
  const debouncedLogin = _.debounce(onLoginFinish, 1000); // Adjust debounce time as needed

  const handleSubmit = (values) => {
    debouncedLogin(values);
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      className="login_form_main_container"
      requiredMark={false}
      onFinish={handleSubmit}
      autoComplete="off"
    >
      <Row className="mt-20">
        <Col xs={24}>
          <Form.Item
            label="GST Number"
            name="gst_no"
            rules={[
              {
                required: true,
                message: "Please input your GST Number!",
              },
              {
                pattern:
                  /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
                message: "Please enter a valid GST Number!",
              },
            ]}
          >
            <Input className="input_field" placeholder="Enter GST Number" />
          </Form.Item>
        </Col>
        <Col xs={24}>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              className="input_field"
              placeholder="Enter password"
            />
          </Form.Item>
        </Col>
        <Col xs={24}>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Log In
            </Button>
          </Form.Item>
        </Col>
        <Col xs={24}>
          Don't have an account?{" "}
          <span
            className="pointer highlighted_text"
            onClick={() => setCurrentForm("signup")}
          >
            Sign Up
          </span>
        </Col>
      </Row>
    </Form>
  );
};

export default LoginForm;
