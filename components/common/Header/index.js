"use client";
import { Button, Col, Row } from "antd";
import { useState } from "react";
import LoginSignUpModal from "../../LoginSignupModal";

const Header = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  return (
    <div>
      <LoginSignUpModal
        loginModalOpen={loginModalOpen}
        setLoginModalOpen={setLoginModalOpen}
      />
      <Row className="header_main_container">
        <Col xs={12} md={8}>
          {/* <span>LOGO</span> */}
          <span className="heading">Instaverifier</span>
        </Col>
        <Col xs={12} md={16} className="d-flex justify-end">
          <Button type="primary" onClick={() => setLoginModalOpen(true)}>
            Login
          </Button>
        </Col>
      </Row>
    </div>
  );
};
export default Header;
