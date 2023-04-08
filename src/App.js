import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import MyStore from "./pages/MyStore";

const router = createBrowserRouter([
  { path: "/", element: <Main /> },
  { path: "/my-store", element: <MyStore /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
