import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const SingleQuestion = ({ title, info }) => {
  const [substring, setSubString] = useState(-1);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn">
          <AiOutlinePlus
            onClick={() => {
              setSubString(info.length);
            }}
          />
          <AiOutlineMinus />
        </button>
      </header>
      <p>{info.substring(0, substring)}</p>
    </article>
  );
};

export default SingleQuestion;
