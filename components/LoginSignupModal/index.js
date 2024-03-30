import { Button, Col, Form, Input, Modal, Row } from "antd";
import React, { useState } from "react";
import LoginForm from "./loginForm";
import SignUpform from "./SignUpForm";
import axios from "axios";

const LoginSignUpModal = ({ loginModalOpen, setLoginModalOpen }) => {
  const [currentForm, setCurrentForm] = useState("Login");
  const handleCancel = (e) => {
    setLoginModalOpen(false);
  };
  const onLoginFinish = async (values) => {
    console.log("values", values);
    try {
      const response = await axios.post(
        `http://verifer-backend.onrender.com/v1/verifer/user/login`, // Assuming your backend server exposes an endpoint like this
        values
      );
      console.log("response", response);
    } catch (error) {
      console.error("Error:", error);
    }
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
