import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { AppShellLayout } from "./components/AppShellLayout/AppShellLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppShellLayout>
        <Homepage />
      </AppShellLayout>
    ),
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
