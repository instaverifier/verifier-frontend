import { Avatar, Col, Collapse, Rate, Row } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { customer_reviews_mock, items } from "../../constant";
import Image from "next/image";
import Check from "../../public/check.webp";
const ResultSection = ({ data }) => {
  return (
    <div className="resultSection_main_container">
      <Row className="company_info_row">
        <Col span={24}>
          <Avatar icon={<UserOutlined />} size={"large"} />
        </Col>
        <Col span={24} className="mt-10 d-flex align-center">
          <span
            className={
              data ? "company_title" : "company_title filter_blur_effect"
            }
          >
            {data ? data?.cmp_name : "xxxx"}
          </span>
          {data?.total_amount === 0 ? (
            <Image
              style={{ marginLeft: "5px" }}
              src={Check}
              alt="umg"
              height={25}
              width={25}
            />
          ) : null}
        </Col>
        <Col span={24} className="mt-8">
          <span
            className={
              data ? "company_desc" : "company_desc filter_blur_effect"
            }
          >
            {data ? data?.cmp_address : "No address found"}
          </span>
        </Col>
      </Row>
      <div className="details_sections">
        <Row>
          <Col xs={24}>
            <Row>
              <Col xs={6} className="title">
                Company Name
              </Col>
              <Col
                xs={18}
                className={data ? "desc" : "desc filter_blur_effect"}
              >
                {data ? data?.cmp_name : "xxxxx"}
              </Col>
            </Row>
            <Row className="mt-20">
              <Col xs={6} className="title">
                GST Number
              </Col>
              <Col
                xs={18}
                className={data ? "desc" : "desc filter_blur_effect"}
              >
                {data ? data?.gst_no : "xxxxx"}
              </Col>
            </Row>
            <Row className="mt-20">
              <Col xs={6} className="title">
                Contact
              </Col>
              <Col
                xs={18}
                className={data ? "desc" : "desc filter_blur_effect"}
              >
                {data ? data?.mobile : "xxxxxxxx"}
              </Col>
            </Row>
            <Row className="mt-20">
              <Col xs={6} className="title">
                Total Amount
              </Col>
              <Col
                xs={18}
                className={data ? "desc" : "desc filter_blur_effect"}
              >
                {data ? data?.total_amount : "xxx"}
              </Col>
            </Row>
            <Row className="mt-20">
              <Col xs={6} className="title">
                Total Reports
              </Col>
              <Col
                xs={18}
                className={data ? "desc" : "desc filter_blur_effect"}
              >
                {data ? data?.total_reports : "xxxx"}
              </Col>
            </Row>
            {/* <Row className="mt-20">
              <Col xs={6} className="title">
                Overall Rating
              </Col>
              <Col xs={18} className="desc">
                <Rate allowHalf defaultValue={3.5} />
              </Col>
            </Row> */}
          </Col>
        </Row>
      </div>
      {/* <div className="customer_reviews_main_container">
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
      </div> */}
    </div>
  );
};

export default ResultSection;
