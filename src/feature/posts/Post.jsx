import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import { Link, useNavigate } from "react-router-dom";

function Post({ post, belongsToUser }) {
  console.log(belongsToUser);
  return (
    <div
      key={post.id}
      className="bg-white rounded-lg shadow-md p-6 border border-pink-300 w-[70%]"
    >
      <Link to="/me">
        <div className="flex justify-start gap-4 items-center mb-4">
          <div className="w-[50px] h-[50px] rounded-full overflow-hidden border-4 border-pink-400 shadow-md">
            <img
              src={
                belongsToUser.dp ||
                "https://media.istockphoto.com/id/1300658241/photo/young-man-is-playing-with-a-dog-and-do-selfie.jpg?s=612x612&w=0&k=20&c=3GuywLL9CeC7VRRcbH35ZRYLRtvmObrvmFjQqTgNjCE="
              }
              alt={`${belongsToUser.name}'s Profile`}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-semibold text-xl text-pink-600">
            {belongsToUser.username}
          </p>
        </div>
      </Link>

      {post.media !== "" && (
        <div className="mb-4 flex justify-center items-center">
          <img src={post.media} className="h-[400px]" alt="" />
        </div>
      )}
      <h2 className="text-xl font-bold text-pink-700 mb-2">{post.title}</h2>
      <p className="text-gray-700 mb-4">{post.captions}</p>
      <div className="flex items-center justify-between">
        <span className="text-pink-600 font-semibold">
          ❤️ {post.likedBy?.length || 0} Likes
        </span>
        <Button type="primary" extraStyles="w-fit">
          Like
        </Button>
      </div>
    </div>
  );
}

export default Post;
