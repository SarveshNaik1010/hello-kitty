import { useLoaderData } from "react-router-dom";
import { getAllPosts } from "../../services/apiPosts";
import Post from "./Post";
import { getAllUsers } from "../../services/apiUsers";

function DisplayPosts() {
  const { posts, users } = useLoaderData();
  console.log(users);
  return (
    <div className="w-fit flex flex-col justify-center items-center space-y-6">
      {posts.map((post) => (
        <Post
          post={post}
          key={post.id}
          belongsToUser={users.find((user) => user.id === post.belongsTo)}
        />
      ))}
    </div>
  );
}

export default DisplayPosts;

export async function loader() {
  const posts = await getAllPosts();
  const users = await getAllUsers();
  return { posts, users };
}
