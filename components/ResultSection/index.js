import { Avatar, Col, Collapse, Rate, Row } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { customer_reviews_mock, items } from "../../constant";

const ResultSection = () => {
  return (
    <div className="resultSection_main_container">
      <Row className="company_info_row">
        <Col span={24}>
          <Avatar icon={<UserOutlined />} size={"large"} />
        </Col>
        <Col span={24} className="mt-10">
          <span className="company_title">Amazon</span>
        </Col>
        <Col span={24} className="mt-8">
          <span className="company_desc">Huda City Center, Gurugram</span>
        </Col>
      </Row>
      <div className="details_sections">
        <Row>
          <Col xs={24}>
            <Row>
              <Col xs={6} className="title">
                Company Name
              </Col>
              <Col xs={18} className="desc">
                Amazon
              </Col>
            </Row>
            <Row className="mt-20">
              <Col xs={6} className="title">
                GST Number
              </Col>
              <Col xs={18} className="desc">
                345AFR6688DD2
              </Col>
            </Row>
            <Row className="mt-20">
              <Col xs={6} className="title">
                Owner Name
              </Col>
              <Col xs={18} className="desc">
                Jeff Bezos
              </Col>
            </Row>
            <Row className="mt-20">
              <Col xs={6} className="title">
                Email
              </Col>
              <Col xs={18} className="desc">
                amazon@gmail.com
              </Col>
            </Row>
            <Row className="mt-20">
              <Col xs={6} className="title">
                Contact
              </Col>
              <Col xs={18} className="desc">
                +91 8899336688
              </Col>
            </Row>
            <Row className="mt-20">
              <Col xs={6} className="title">
                Overall Rating
              </Col>
              <Col xs={18} className="desc">
                <Rate allowHalf defaultValue={3.5} />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="customer_reviews_main_container">
        <Row>
          <Col xs={24} className="customer_reviews">
            Customer Reviews
          </Col>
        </Row>

        <Row className="mt-20">
          <Col xs={24}>
            <Collapse items={items} defaultActiveKey={["1"]} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ResultSection;
