import React from "react";
import { Link } from "react-router-dom";

export default function TestB() {
  console.log("TestB 리렌더링");
  return (
    <>
      <div>router testB page</div>
      <Link to="/">Home 페이지 이동(SPA)</Link>
      <br />
      <Link to="/testA">testA 페이지 이동(SPA)</Link>
      {/* <Link to="/testB">testB 페이지 이동(SPA)</Link> */}
    </>
  );
}
