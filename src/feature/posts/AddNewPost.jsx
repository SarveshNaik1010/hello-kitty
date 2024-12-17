import { Form } from "react-router-dom";
import Button from "../../ui/Button";

function AddNewPost({ handleIsOpen }) {
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 w-full max-w-md relative">
          {/* Close Button */}
          <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
            &times;
          </button>

          {/* Overlay Content */}
          <h2 className="text-2xl font-bold text-pink-600 mb-4 text-center">
            Add New Post
          </h2>

          <Form method="POST" className="space-y-4">
            {/* Title Field */}
            <div>
              <label className="block text-pink-700 font-semibold mb-1">
                Title
              </label>
              <input
                type="text"
                placeholder="Enter post title"
                name="title"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            {/* Content Field */}
            <div>
              <label className="block text-pink-700 font-semibold mb-1">
                Content
              </label>
              <textarea
                rows="4"
                placeholder="Write your post here..."
                name="captions"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              ></textarea>
            </div>

            {/* Image Field */}
            <div>
              <label className="block text-pink-700 font-semibold mb-1">
                Upload Media
              </label>
              <input
                type="text"
                name="media"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <Button
                type="secondary"
                onClick={(e) => {
                  e.preventDefault();
                  handleIsOpen(false);
                }}
              >
                Cancel
              </Button>
              <Button
                type="primary"
                className="ml-2"
              >
                Post
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default AddNewPost;
