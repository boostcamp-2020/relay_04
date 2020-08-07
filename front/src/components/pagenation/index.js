import React from "react";
import "./pagenation.css";

function unit(startPosition, endPosition) {
  const arr = [];
  for (let i = startPosition; i <= endPosition; i++) {
    arr.push(<a className="pagenation-unit" href="#">{i}</a>);
  }
  return arr;
}

function PageNation({ lastPage, currentPage }) {
  const startPosition = parseInt((currentPage - 1) / 10) * 10 + 1;
  const endPosition =
    startPosition + 9 > lastPage ? lastPage : startPosition + 9;

  return <div id="pagenation-warpper">{unit(startPosition, endPosition)}</div>;
}

export default PageNation;
