import { Outlet } from "react-router-dom";
import Footer from "../footer/ui";
import Navbar from "../navber/ui";
import { Div, Section } from "./styles";

export default function Layout(): JSX.Element {
  return (
    <div style={{ ...Div }}>
      <Navbar />
      <main>
        <section style={{ ...Section }}>
          <Outlet />
        </section>
      </main>
      <Footer />
    </div>
  );
}
