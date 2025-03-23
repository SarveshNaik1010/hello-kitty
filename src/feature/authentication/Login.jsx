import { Form, Link, redirect } from "react-router-dom";
import Button from "../../ui/Button";
import { loginUser } from "../../services/apiUsers";
import store from "../../store";
import { loginNewUser } from "../users/userSlice";
import { useEffect, useState } from "react";

function Login() {
  const [isIOS, setIsIOS] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    if (
      navigator.userAgent.includes("iPhone") ||
      navigator.userAgent.includes("iPad")
    ) {
      setIsIOS(true);
    }
  }, []);

  useEffect(() => {
    const handler = (event) => {
      console.log(deferredPrompt);
      event.preventDefault(); // Prevent automatic prompt
      setDeferredPrompt(event);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, [deferredPrompt]);

  const handleInstallClick = (e) => {
    e.preventDefault();
    console.log("somete");
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Show the install prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null);
      });
    }
  };

  function handleInfo() {
    setIsOpen(true);
  }

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

        {isIOS ? (
          <Button type="primary" onClick={handleInfo}>
            STEPS
          </Button>
        ) : (
          <Button type="primary" onClick={handleInstallClick}>
            Install
          </Button>
        )}

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
