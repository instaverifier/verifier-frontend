import { Rate } from "antd";

export const customer_reviews_mock = [
  {
    key: "1",
    Date: "22/03/2022",
    productRating: 4,
    comments:
      "These ratings and reviews help with product research and purchase decisions. This can drive more qualified customers to your product pages.",
  },
  {
    key: "2",

    Date: "22/03/2022",
    productRating: 4,
    comments:
      "These ratings and reviews help with product research and purchase decisions. This can drive more qualified customers to your product pages.",
  },
  {
    key: "3",
    Date: "22/03/2022",
    productRating: 4,
    comments:
      "These ratings and reviews help with product research and purchase decisions. This can drive more qualified customers to your product pages.",
  },
  {
    key: "4",

    Date: "22/03/2022",
    productRating: 4,
    comments:
      "These ratings and reviews help with product research and purchase decisions. This can drive more qualified customers to your product pages.",
  },
];
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
export const items = [
  {
    key: "1",
    label: (
      <div className="d-flex justify-between">
        <p>This is panel header 1</p>
        <Rate allowHalf defaultValue={2.5} />
      </div>
    ),
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: (
      <div className="d-flex justify-between">
        <p>This is panel header 2</p>
        <Rate allowHalf defaultValue={3} />
      </div>
    ),
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: (
      <div className="d-flex justify-between">
        <p>This is panel header 3</p>
        <Rate allowHalf defaultValue={5} />
      </div>
    ),
    children: <p>{text}</p>,
  },
];
