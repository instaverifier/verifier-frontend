"use client";
import { Col, Row, Spin, message } from "antd";
import Header from "../../components/common/Header";
import "../../styles/index.scss";
import ResultSection from "../../components/ResultSection";
import SearchDataSection from "../../components/SearchDataSection";
import Marquee from "react-fast-marquee";
import DisclaimerMarquee from "../../components/DisclaimerMarquee";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [HomePageContent, setHomePageContent] = useState();
  const HomePageData = async (values) => {
    setLoading(true);
    try {
      const data = await axios.get(
        `https://verifer-backend.onrender.com/v1/verifer/static?param=home`
      );
      setHomePageContent(data?.data?.data?.value);
    } catch (error) {
      message.error(error?.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    HomePageData();
  }, []);
  return (
    <div>
      {loading && <Spin className="center_spinner" size="large" />}
      <Header />

      <Row className="mainContainerBox">
        <Col xs={24} md={10}>
          <SearchDataSection setData={setData} />
        </Col>
        <Row className="marquee_row_resp">
          <Marquee style={{ background: "yellow" }}>
            <DisclaimerMarquee
              content={HomePageContent?.disclaimer_for_search}
            />
          </Marquee>
        </Row>
        <Col xs={{ span: 24, offset: 0 }} md={{ span: 12, offset: 2 }}>
          <ResultSection
            data={data}
            disclaimerData={HomePageContent?.disclaimer_for_report}
          />
        </Col>
      </Row>
      <Row className="marquee_row">
        <Marquee style={{ background: "yellow" }}>
          <DisclaimerMarquee content={HomePageContent?.disclaimer_for_search} />
        </Marquee>
      </Row>
    </div>
  );
}
