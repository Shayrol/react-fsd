import { Link } from "react-router-dom";

const LiStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "600",
  padding: "10px 20px",
  borderRadius: "5px",
  transition: "background-color 0.3s",
};

export default function Navbar() {
  return (
    <nav
      style={{
        width: "100%",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#7e7e7e",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <ul
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          margin: 0,
          padding: 0,
          listStyle: "none",
        }}
      >
        <li>
          <Link
            to="/"
            style={LiStyle}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
              // e.target.style.backgroundColor = "#555";
              e.currentTarget.style.backgroundColor = "#555";
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/testA"
            style={LiStyle}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.backgroundColor = "#555";
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            TestA
          </Link>
        </li>
        <li>
          <Link
            to="/testB"
            style={LiStyle}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.backgroundColor = "#555";
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            TestB
          </Link>
        </li>
      </ul>
    </nav>
  );
}
