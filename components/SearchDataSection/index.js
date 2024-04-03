"use client";
import { Button, Col, Input, Row, Spin, message } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useRef, useState } from "react";

const SearchDataSection = ({ setData }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const gstRef = useRef();
  useEffect(() => {
    // Check if session key exists in cookies
    const sessionKey = Cookies.get("sessionKey");

    if (sessionKey) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [Cookies.get("sessionKey")]);

  const handleSearch = async () => {
    setLoading(true);
    if (!isLogin) {
      message.error("Please login first!");
      setLoading(false);
      return;
    } else {
      const sessionKey = Cookies.get("sessionKey");
      try {
        const response = await axios.get(
          `https://verifer-backend.onrender.com/v1/verifer/report?gst_no=${gstRef?.current?.input?.value}`,
          {
            headers: {
              Sessionkey: sessionKey, // Assuming your server expects the session key in a Bearer token format
              // Add other headers if needed
            },
          }
        );

        setData(response?.data?.data);
      } catch (error) {
        message.error(
          error?.response?.data?.message || "Something went wrong!"
        );
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <div className="searchDataSectionMainContainer">
      {loading && <Spin className="center_spinner" size="large" />}
      <Row>
        <Col xs={24}>
          <span className="search_heading">
            Video calls and meetings for everyone
          </span>
          <div className="subHeading_div">
            <span>
              Google Meet provides secure, easy-to-use video calls and meetings
              for everyone, on any device.
            </span>
          </div>
          <div className="d-flex  search_button_section">
            <Input
              className="search_input_box"
              placeholder="Enter GST number"
              ref={gstRef}
            />
            <Button
              type="primary"
              className="primary_button"
              onClick={handleSearch}
            >
              Search
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SearchDataSection;
