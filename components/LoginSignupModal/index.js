"use client";
import { Button, Col, Form, Input, Modal, Row, Spin, message } from "antd";
import React, { useState } from "react";
import LoginForm from "./loginForm";
import SignUpform from "./SignUpForm";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const LoginSignUpModal = ({ loginModalOpen, setLoginModalOpen }) => {
  const [currentForm, setCurrentForm] = useState("Login");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleCancel = () => {
    setLoginModalOpen(false);
  };
  const onLoginFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `https://verifer-backend.onrender.com/v1/verifer/user/login`, // Assuming your backend server exposes an endpoint like this
        values
      );
      const sessionKey = response?.data?.data?.session_key;

      // Store the session key in a cookie with expiry of 30 days
      Cookies.set("sessionKey", sessionKey, { expires: 30 });
      localStorage.setItem("userLogin", "true");
      message.success("Log in successfully!");
      window.location.reload();
      handleCancel();
    } catch (error) {
      message.error(error?.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  const onSignUpFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `https://verifer-backend.onrender.com/v1/verifer/user/signup`, // Assuming your backend server exposes an endpoint like this
        values
      );

      const sessionKey = response?.data?.data?.session_key;
      localStorage.setItem("userLogin", "true");

      // Store the session key in a cookie with expiry of 30 days
      Cookies.set("sessionKey", sessionKey, { expires: 30 });

      message.success("Sign up successfully!");
      window.location.reload();
      handleCancel();
    } catch (error) {
      message.error(error?.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      {loading && <Spin className="center_spinner" size="large" />}
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
    </div>
  );
};

export default LoginSignUpModal;
