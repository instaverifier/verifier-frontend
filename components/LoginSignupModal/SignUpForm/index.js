import React from "react";
import { Button, Col, Form, Input, Row } from "antd";

const SignUpform = ({ onSignUpFinish, setCurrentForm }) => {
  return (
    <Form
      name="basic"
      layout="vertical"
      className="login_form_main_container"
      requiredMark={false}
      onFinish={onSignUpFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Row className="mt-20">
        <Col xs={24}>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your Name!",
              },
            ]}
          >
            <Input className="input_field" placeholder="Enter your name" />
          </Form.Item>
        </Col>
        <Col xs={24}>
          <Form.Item
            label="Mobile Number"
            name="mobile"
            rules={[
              {
                required: true,
                message: "Please input your mobile!",
              },
            ]}
          >
            <Input
              className="input_field"
              placeholder="Enter your mobile number"
              maxLength={10}
            />
          </Form.Item>
        </Col>
        <Col xs={24}>
          <Form.Item
            label="Company Name"
            name="cmp_name"
            rules={[
              {
                required: true,
                message: "Please company name!",
              },
            ]}
          >
            <Input className="input_field" placeholder="Enter company name" />
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
            <Input
              className="input_field"
              placeholder="Enter company address"
            />
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
            <Input className="input_field" placeholder="Enter GST number" />
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

        <Col xs={24} className="mt-20 d-flex justify-end ">
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Sign up
            </Button>
          </Form.Item>
        </Col>
        <Col xs={24}>
          Already have an account?
          <span
            className="pointer highlighted_text"
            onClick={() => {
              setCurrentForm("Login");
            }}
          >
            {"Log In"}
          </span>
        </Col>
      </Row>
    </Form>
  );
};

export default SignUpform;
