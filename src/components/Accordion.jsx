import { useState } from "react";
export const Accordion = ({ qna }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="accordion">
      <h3>
        {qna.question}{" "}
        <span onClick={() => setShow(!show)}>{show ? "➖" : "➕"}</span>
      </h3>
      {show && <p>{qna.answer}</p>}
    </div>
  );
};
