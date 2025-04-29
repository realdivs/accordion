import { Accordion } from "./Accordion";
import data from "../data.json";
export const FAQ = () => {
  return (
    <>
      <h1 className="title">FAQ's</h1>
      {data.faqs.map((obj, index) => (
        <Accordion key={index} qna={obj} />
      ))}
    </>
  );
};
