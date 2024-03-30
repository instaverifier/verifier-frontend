import { Button, Col, Input, Row } from "antd";
import React from "react";

const SearchDataSection = () => {
  return (
    <div className="searchDataSectionMainContainer">
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
            />
            <Button type="primary" className="primary_button">
              Search
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SearchDataSection;
