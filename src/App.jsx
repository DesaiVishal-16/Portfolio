import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import ResumePage from "./pages/ResumePage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,

      children: [
        {
          path: "/",
          element: <Navigate to="/about" />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/resume",
          element: <ResumePage />,
        },
        {
          path: "/projects",
          element: <ProjectPage />,
        },
        {
          path: "/blog",
          element: <BlogPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
      ],
    },
  ]);
  return (
    <div className="bg-black h-full">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
