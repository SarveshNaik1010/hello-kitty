import { useNavigate } from "react-router-dom";
import DisplayPosts from "./DisplayPosts";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const userId = useSelector((state) => state.user.id);

  useEffect(() => {
    if (!userId) navigate("/login");
  }, [navigate, userId]);

  return (
    <div className="min-h-screen bg-pink-200 py-10 px-4">
      <h1 className="text-center text-3xl font-bold text-pink-600 mb-8">
        User Posts
      </h1>
      <DisplayPosts />
    </div>
  );
};

export default Home;
