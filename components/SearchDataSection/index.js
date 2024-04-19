import { Button, Col, Input, Row, Spin, message, Select, Form } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useRef, useState } from "react";
import { debounce } from "lodash";

const { Option } = Select;

const SearchDataSection = ({ setData }) => {
  const [loading, setLoading] = useState(false);
  const [searchType, setSearchType] = useState("gst_no"); // Default search type is GST
  const [inputValue, setInputValue] = useState(""); // State to hold input value
  const searchRef = useRef();
  const debouncedHandleSearch = useRef(null);

  useEffect(() => {
    return () => {
      if (debouncedHandleSearch.current) {
        debouncedHandleSearch.current.cancel();
      }
    };
  }, []);

  const handleSearch = () => {
    setLoading(true);
    setInputValue(""); // Clear input value
    if (localStorage.getItem("userLogin") !== "true") {
      message.error("Please login first!");
      setLoading(false);
      return;
    } else {
      const sessionKey = Cookies.get("sessionKey");
      const isValidInput =
        searchType === "gst_no"
          ? /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(
              inputValue
            )
          : /^[0-9]{10}$/.test(inputValue);

      if (!isValidInput) {
        message.error(
          searchType === "gst_no"
            ? "Please enter a valid GST Number!"
            : "Please enter a valid Mobile Number!"
        );
        setLoading(false);
        return;
      }

      if (!debouncedHandleSearch.current) {
        debouncedHandleSearch.current = debounce(async () => {
          try {
            const response = await axios.get(
              `https://verifer-backend.onrender.com/v1/verifer/report?${searchType}=${inputValue}`,
              {
                headers: {
                  Sessionkey: sessionKey,
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
        }, 2000);
      }
      debouncedHandleSearch.current();
    }
  };

  const handleSearchTypeChange = (value) => {
    setSearchType(value);
    setInputValue(""); // Clear input value when search type changes
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="searchDataSectionMainContainer">
      {loading && <Spin className="center_spinner" size="large" />}
      <Row>
        <Col xs={24}>
          <span className="search_heading">
            {`Build trust here and earn on your chair`}
          </span>
          <div className="subHeading_div">
            <span>
              {`We provide customer history as reported by others, aiming to offer transparency without intending to disparage anyone's reputation.`}
            </span>
          </div>
          <div className="d-flex  search_button_section">
            <Select
              defaultValue="gst_no"
              className="search_type_select"
              onChange={handleSearchTypeChange}
            >
              <Option value="gst_no">GST</Option>
              <Option value="mobile">Mobile</Option>
            </Select>
            <Input
              className="search_input_box"
              placeholder={`Enter ${
                searchType === "gst_no" ? "GST" : "Mobile"
              } Number`}
              value={inputValue}
              onChange={handleInputChange}
              pattern={
                searchType === "gst_no"
                  ? /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/
                  : /^[0-9]{10}$/
              }
              title={
                searchType === "gst_no"
                  ? "Please enter a valid GST Number!"
                  : "Please enter a valid Mobile Number!"
              }
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
