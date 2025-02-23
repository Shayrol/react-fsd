import { Link } from "react-router-dom";

export default function HomePage(): JSX.Element {
  return (
    <>
      <div>main home page</div>
      <Link to="/testA">testA 페이지 이동(SPA)</Link>
      <br />
      <Link to="/testB">testB 페이지 이동(SPA)</Link>
    </>
  );
}
