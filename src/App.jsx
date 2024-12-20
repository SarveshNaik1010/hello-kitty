import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup, {
  action as userSignupAction,
} from "./feature/authentication/Signup";
import Login, {
  action as userLoginAction,
} from "./feature/authentication/Login";
import AppLayout, { action as newPostAction } from "./ui/AppLayout";
import UserProfile, {
  loader as getUserLoader,
} from "./feature/users/UserProfile";
import { action as updateUserProfileAction } from "./feature/users/Profile";
import Home from "./feature/posts/Home";
import { loader as renderPostLoader } from "./feature/posts/Home";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <h1>Page not found</h1>,
    children: [
      { path: "/signup", element: <Signup />, action: userSignupAction },
      {
        path: "/login",
        element: <Login />,
        action: userLoginAction,
        errorElement: <p>ERROR</p>,
      },
      {
        path: "/home",
        element: <Home />,
        action: newPostAction,
        loader: renderPostLoader,
      },
      {
        path: "/",
        element: <Home />,
        action: newPostAction,
        loader: renderPostLoader,
      },
      {
        path: "/profile/:id",
        element: <UserProfile />,
        loader: getUserLoader,
        action: updateUserProfileAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
