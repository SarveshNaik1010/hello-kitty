import { useLoaderData } from "react-router-dom";
import { getUserFromId } from "../../services/apiUsers";
import Profile from "./Profile";
import { getAllPosts } from "../../services/apiPosts";

function UserProfile() {
  const { user, posts } = useLoaderData();
  const userPosts = posts.filter((post) => post.belongsTo === user.id);
  return <Profile user={user} posts={userPosts} />;
}

export default UserProfile;

export async function loader({ params }) {
  const user = await getUserFromId(params.id);
  const posts = await getAllPosts();
  return { user, posts };
}
