import { Outlet } from "react-router-dom";
import Footer from "./footer/footer";
import Navbar from "./navber/navber";

export default function Layout() {
  return (
    <div
      style={{
        width: "100%;",
        backgroundColor: "lightgoldenrodyellow",
      }}
    >
      <Navbar />
      <main>
        <section
          style={{
            maxWidth: "1200px",
            width: "100%",
            height: "100vh",
            margin: "0 auto",
            backgroundColor: "lightsalmon",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Outlet />
        </section>
      </main>
      <Footer />
    </div>
  );
}
