import { createFileRoute, redirect } from "@tanstack/react-router";

const isAuthenticated = false;

export const Route = createFileRoute("/about")({
  component: () => <div>Hello /about!</div>,
  beforeLoad: () => {
    if (!isAuthenticated)
      throw redirect({ to: "/login", search: { redirect: location.href } });
  },
});
