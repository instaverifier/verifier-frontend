import { Button, Col, Form, Input, Row } from "antd";

const LoginForm = ({ onLoginFinish, setCurrentForm }) => {
  return (
    <Form
      name="basic"
      layout="vertical"
      className="login_form_main_container"
      requiredMark={false}
      onFinish={onLoginFinish}
      // onFinishFailed={onFinishFailed}
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
          Dont have an account?{" "}
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
