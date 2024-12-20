import { useLoaderData, useNavigate } from "react-router-dom";
import DisplayPosts from "./DisplayPosts";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllPosts } from "../../services/apiPosts";
import { getAllUsers } from "../../services/apiUsers";

const Home = () => {
    const { posts, users } = useLoaderData();
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
      <DisplayPosts posts={posts} users={users} />
    </div>
  );
};

export default Home;

export async function loader() {
  const posts = await getAllPosts();
  const users = await getAllUsers();
  return { posts, users };
}
