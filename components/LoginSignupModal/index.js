import { Button, Col, Form, Input, Modal, Row } from "antd";
import React, { useState } from "react";
import LoginForm from "./loginForm";
import SignUpform from "./SignUpForm";

const LoginSignUpModal = ({ loginModalOpen, setLoginModalOpen }) => {
  const [currentForm, setCurrentForm] = useState("Login");
  const handleCancel = (e) => {
    setLoginModalOpen(false);
  };
  const onLoginFinish = (values) => {
    console.log("values", values);
  };
  const onSignUpFinish = (values) => {
    console.log("vvv", values);
  };
  return (
    <Modal
      title={currentForm === "Login" ? "Login" : "Sign Up"}
      centered
      footer={null}
      open={loginModalOpen}
      onCancel={handleCancel}
      className="login_signup_modal_main_container"
    >
      {currentForm === "Login" ? (
        <LoginForm
          onLoginFinish={onLoginFinish}
          setCurrentForm={setCurrentForm}
        />
      ) : (
        <SignUpform
          onSignUpFinish={onSignUpFinish}
          setCurrentForm={setCurrentForm}
        />
      )}
    </Modal>
  );
};

export default LoginSignUpModal;
