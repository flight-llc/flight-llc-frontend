import React, { FC, useState } from "react";

type Props = {
    children : string,
}

export const ReadMore :FC<Props> = ({ children }) => {
  const text = children;

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text text-black text-xs pt-2 text-start">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};