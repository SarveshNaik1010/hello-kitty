import { Outlet, redirect } from "react-router-dom";
import BtnLogout from "./BtnLogout";
import BtnAddNewPost from "./BtnAddNewPost";
import { useSelector } from "react-redux";
import { useState } from "react";
import AddNewPost from "../feature/posts/AddNewPost";
import store from "../store";
import { createPost } from "../services/apiPosts";

function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.user);
  console.log(user);

  function handleIsOpen(payload) {
    setIsOpen(payload);
  }

  return (
    <div className="min-h-dvh flex justify-center items-center bg-pink-200 font-sans">
      <Outlet />
      {isOpen && <AddNewPost handleIsOpen={handleIsOpen} />}
      {user.id && (
        <>
          <BtnLogout />
          <BtnAddNewPost onClick={() => handleIsOpen(true)} />
        </>
      )}
    </div>
  );
}

export default AppLayout;

export async function action({ request, params }) {
  try {
    const newPost = Object.fromEntries(await request.formData());
    const { user } = store.getState();
    newPost.date = Date.now();
    newPost.belongsTo = user.id;
    newPost.likedBy = [];
    createPost(newPost);
    return redirect("/home");
  } catch (error) {
    return error;
  }
}
