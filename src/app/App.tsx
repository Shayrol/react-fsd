import { client } from "../shared/api/apollo-client";
import Providers from "./providers";
import { router } from "./router";

export default function App() {
  return <Providers router={router} client={client} />;
}
