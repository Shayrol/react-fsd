import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from "@apollo/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

type Props = {
  router: ReturnType<typeof createBrowserRouter>;
  client: ApolloClient<NormalizedCacheObject>;
};

export default function Providers({ router, client }: Props) {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}
