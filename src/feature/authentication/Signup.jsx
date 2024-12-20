import { Form, Link, redirect } from "react-router-dom";
import Button from "../../ui/Button";
import { createUser } from "../../services/apiUsers";

function Signup() {
  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 md:p-12">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-pink-600 mb-6">
          Sign Up for Kitty World!
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

        {/* Confirm Password Field */}
        <div>
          <label className="block text-pink-700 font-semibold mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        {/* Submit Button */}
        <Button type="primary">Sign Up</Button>
        <Button type="secondary">
          <Link to={"/login"}>Already have an account? Login</Link>
        </Button>
      </Form>
    </div>
  );
}

export default Signup;

export async function action({ request }) {
  const form = await request.formData();
  const username = form.get("username");
  const password = form.get("password");
  const confirmPassword = form.get("confirmPassword");
  if (password !== confirmPassword)
    throw new Error("Password and Confirm Password did not match");

  const data = await createUser({ username, password });
  console.log(data);
  localStorage.setItem("user", JSON.stringify(data));
  return redirect(`/home`);
}
