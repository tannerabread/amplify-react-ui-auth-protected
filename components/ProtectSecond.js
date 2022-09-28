import { useAuthenticator, Heading } from "@aws-amplify/ui-react";

export function Protected() {
  const { route } = useAuthenticator((context) => [context.route]);

  const message =
    route === "authenticated" ? "SECOND PROTECTED ROUTE" : "Loading...";

  return <Heading level={1}>{message}</Heading>;
}
