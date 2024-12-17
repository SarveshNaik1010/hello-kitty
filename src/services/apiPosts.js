const postSchema = {
  id: 1,
  belongsTo: 1,
  title: "Leo's 1st vet appointment 🐾",
  captions:
    "He was very nervous at first but then the doctor smartly handled the dog 🐕‍🦺",
  media: "",
  date: null,
  likedBy: [1],
};

export async function createPost(newPost) {
  try {
    const res = await fetch(`https://retoolapi.dev/qeg6Bc/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function updatePost(postId, updatedPost) {
  const res = await fetch(`https://retoolapi.dev/qeg6Bc/posts/${postId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedPost),
  });
  const data = await res.json();
  return data;
}

export async function deletePost(postId) {
  const res = await fetch(`https://retoolapi.dev/qeg6Bc/posts/${postId}`, {
    method: "DELETE",
  });
  const data = await res.json();
  return data;
}

export async function getAllPosts() {
  const res = await fetch(`https://retoolapi.dev/qeg6Bc/posts`);
  const data = await res.json();
  return data;
}

export async function getPost(postId) {
  try {
    const res = await fetch(`https://retoolapi.dev/qeg6Bc/posts/${postId}`);
    const data = await res.json();
    if (!data.username) throw new Error("Post does not exists");
    return data;
  } catch (error) {
    return error;
  }
}

// updatePost(1, {
//   data: Date.now(),
//   media: "",
//   date: Date.now(),
// });