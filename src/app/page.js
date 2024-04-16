"use client";
import { Col, Row } from "antd";
import Header from "../../components/common/Header";
import "../../styles/index.scss";
import ResultSection from "../../components/ResultSection";
import SearchDataSection from "../../components/SearchDataSection";
import Marquee from "react-fast-marquee";
import DisclaimerMarquee from "../../components/DisclaimerMarquee";
import { useState } from "react";
export default function Home() {
  const [data, setData] = useState(null);
  return (
    <div>
      <Header />
      {/* <Marquee style={{ background: "yellow" }}>
        <DisclaimerMarquee />
      </Marquee> */}
      <Row className="mainContainerBox">
        <Col xs={24} md={10}>
          <SearchDataSection setData={setData} />
        </Col>
        <Col xs={{ span: 24, offset: 0 }} md={{ span: 12, offset: 2 }}>
          <ResultSection data={data} />
        </Col>
      </Row>
    </div>
  );
}
