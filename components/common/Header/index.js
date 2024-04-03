"use client";
import { Button, Col, Row } from "antd";
import { useEffect, useState } from "react";
import LoginSignUpModal from "../../LoginSignupModal";
import Cookies from "js-cookie";
import ReportModal from "../../ReportModal";

const Header = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [sessionKey, setSessionKey] = useState(Cookies.get("sessionKey"));
  console.log("dasdsadsd", sessionKey);
  useEffect(() => {
    // Check if session key exists in cookies
    const sessionKey = Cookies.get("sessionKey");

    if (sessionKey) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [Cookies.get("sessionKey")]);
  const handleLogout = () => {
    Cookies.remove("sessionKey");
  };

  const handleReport = () => {
    setReportOpen(true);
  };
  return (
    <div>
      <ReportModal reportOpen={reportOpen} setReportOpen={setReportOpen} />
      <LoginSignUpModal
        loginModalOpen={loginModalOpen}
        setLoginModalOpen={setLoginModalOpen}
      />
      <Row className="header_main_container">
        <Col xs={12} md={8}>
          {/* <span>LOGO</span> */}
          <span className="heading">Trust Checker</span>
        </Col>
        <Col xs={12} md={16} className="d-flex justify-end">
          {isLogin && (
            <Button
              style={{ background: "red", color: "white", marginRight: "10px" }}
              onClick={handleReport}
            >
              REPORT
            </Button>
          )}
          {!isLogin ? (
            <Button type="primary" onClick={() => setLoginModalOpen(true)}>
              Login
            </Button>
          ) : (
            <Button type="primary" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Col>
      </Row>
    </div>
  );
};
export default Header;
