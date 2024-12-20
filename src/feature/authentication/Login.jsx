import { Form, Link, redirect } from "react-router-dom";
import Button from "../../ui/Button";
import { loginUser } from "../../services/apiUsers";
import store from "../../store";
import { loginNewUser } from "../users/userSlice";

function Login() {
  return (
    <div className="w-fit bg-white rounded-lg shadow-lg p-8 md:p-12">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-pink-600 mb-6">
          Welcome back to Kitty World!
        </h1>
      </div>

      <Form method="POST" className="space-y-6">
        {/* Username Field */}
        <div>
          <label className="block text-pink-700 font-semibold mb-1">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            name="username"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-pink-700 font-semibold mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        {/* Submit Button */}
        <Button type="primary">Login</Button>
        <Button type="secondary">
          <Link to="/signup">Do not have an account? SignUp</Link>
        </Button>
      </Form>
    </div>
  );
}

export default Login;

export async function action({ request, params }) {
  try {
    const formData = Object.fromEntries(await request.formData());
    const user = await loginUser(formData.username, formData.password);
    store.dispatch(loginNewUser(user.user));
    return redirect("/home");
  } catch (error) {
    return error;
  }
}
