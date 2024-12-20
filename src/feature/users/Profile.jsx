import { useSelector } from "react-redux";
import AllPosts from "../posts/DisplayPosts";
import BtnLogout from "../../ui/BtnLogout";
import AddNewPost from "../../ui/BtnAddNewPost";
import Error from "../../ui/Error";
import Button from "../../ui/Button";
import { Form, Link } from "react-router-dom";
import { useState } from "react";
import EditProfile from "./EditProfile";
import { getAllUsers, updateUser } from "../../services/apiUsers";
import DisplayPosts from "../posts/DisplayPosts";
import { getAllPosts } from "../../services/apiPosts";

function Profile({ user: userProfile, posts }) {
  const [isActive, setIsActive] = useState(false);
  const currUser = useSelector((state) => state.user);

  if (!currUser.id)
    return (
      <Error>
        Please <Link to={"/login"}>login</Link> to continue
      </Error>
    );

  return (
    <>
      {isActive && <EditProfile setIsActive={setIsActive} user={currUser} />}
      <div className="min-h-screen min-w-[75%] bg-pink-200 py-10 px-4 font-sans">
        <div className="relative max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {currUser.id === userProfile.id && (
            <Button
              type="primary"
              extraStyles="absolute top-4 right-4 text-4"
              onClick={() => setIsActive(true)}
            >
              Edit
            </Button>
          )}

          {/* Profile Header */}
          <div className="flex justify-center items-center gap-12">
            <div className="flex items-center justify-center bg-pink-300 p-6">
              <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-4 border-white shadow-md">
                <img
                  src={
                    userProfile?.dp ||
                    "https://media.istockphoto.com/id/1300658241/photo/young-man-is-playing-with-a-dog-and-do-selfie.jpg?s=612x612&w=0&k=20&c=3GuywLL9CeC7VRRcbH35ZRYLRtvmObrvmFjQqTgNjCE="
                  }
                  alt={`${userProfile.username}'s Profile`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Profile Info */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold text-pink-600">
                  {userProfile.username}
                </h1>
                <p className="text-gray-600 mt-2">{userProfile.bio}</p>
              </div>
              {userProfile.id !== currUser.id && (
                <div className="">
                  <Button type="primary">Follow</Button>
                </div>
              )}
            </div>
          </div>

          {/* Statistics */}
          <div className="flex justify-around bg-pink-100 py-4 border-t border-pink-300">
            <div className="text-center">
              <span className="block text-xl font-bold text-pink-600">
                {userProfile.posts?.length}
              </span>
              <span className="text-gray-600">Posts</span>
            </div>
            <div className="text-center">
              <span className="block text-xl font-bold text-pink-600">
                {userProfile.followers?.length}
              </span>
              <span className="text-gray-600">Followers</span>
            </div>
            <div className="text-center">
              <span className="block text-xl font-bold text-pink-600">
                {userProfile.following?.length}
              </span>
              <span className="text-gray-600">Following</span>
            </div>
          </div>
          <div className="flex justify-center items-center p-4">
            <DisplayPosts users={undefined} posts={posts} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;

export async function action({ request, params }) {
  const updatedUserData = Object.fromEntries(await request.formData());
  console.log(updatedUserData);
  await updateUser(+params.id, updatedUserData);

  return null;
}