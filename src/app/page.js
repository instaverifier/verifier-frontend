import { Col, Row } from "antd";
import Header from "../../components/common/Header";
import "../../styles/index.scss";
import ResultSection from "../../components/ResultSection";
import SearchDataSection from "../../components/SearchDataSection";
import Marquee from "react-fast-marquee";
import DisclaimerMarquee from "../../components/DisclaimerMarquee";
export default function Home() {
  return (
    <div>
      <Header />
      {/* <Marquee style={{ background: "yellow" }}>
        <DisclaimerMarquee />
      </Marquee> */}
      <Row className="mainContainerBox">
        <Col xs={24} md={10}>
          <SearchDataSection />
        </Col>
        <Col xs={{ span: 24, offset: 0 }} md={{ span: 12, offset: 2 }}>
          <ResultSection />
        </Col>
      </Row>
    </div>
  );
}
