import { useSelector } from "react-redux";
import AllPosts from "../posts/DisplayPosts";
import BtnLogout from "../../ui/BtnLogout";
import AddNewPost from "../../ui/BtnAddNewPost";
import Error from "../../ui/Error";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";

function Profile() {
  const user = useSelector((state) => state.user);

  if (!user.id) return <Error>Please login to continue</Error>;

  return (
    <div className="min-h-screen min-w-[75%] bg-pink-200 py-10 px-4 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Profile Header */}
        <div className="flex justify-center items-center gap-12">
          <div className="flex items-center justify-center bg-pink-300 p-6">
            <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-4 border-white shadow-md">
              <img
                src={
                  user.dp ||
                  "https://media.istockphoto.com/id/1300658241/photo/young-man-is-playing-with-a-dog-and-do-selfie.jpg?s=612x612&w=0&k=20&c=3GuywLL9CeC7VRRcbH35ZRYLRtvmObrvmFjQqTgNjCE="
                }
                alt={`${user.name}'s Profile`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Profile Info */}
          <div className="w-full space-y-4">
            <h1 className="text-3xl font-bold text-pink-600">
              {user.username}
            </h1>
            <p className="text-gray-600 mt-2">{user.bio}</p>
          </div>
        </div>

        {/* Statistics */}
        <div className="flex justify-around bg-pink-100 py-4 border-t border-pink-300">
          <div className="text-center">
            <span className="block text-xl font-bold text-pink-600">
              {user.posts.length}
            </span>
            <span className="text-gray-600">Posts</span>
          </div>
          <div className="text-center">
            <span className="block text-xl font-bold text-pink-600">
              {user.followers.length}
            </span>
            <span className="text-gray-600">Followers</span>
          </div>
          <div className="text-center">
            <span className="block text-xl font-bold text-pink-600">
              {user.following.length}
            </span>
            <span className="text-gray-600">Following</span>
          </div>
        </div>
        <div className="flex justify-center items-center p-4">
          <Button type="secondary">
            <Link to="/home">Posts</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
