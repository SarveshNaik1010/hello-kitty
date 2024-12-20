const userSchema = {
  id: 1,
  username: "sarvesh",
  password: "1111",
  bio: "",
  dp: "",
  posts: [],
  followers: [],
  following: [],
  saved: [],
};

export async function createUser(newUser) {
  try {
    // 1. Check if the username already exits
    const allUserRes = await getAllUsers();
    const isTaken = allUserRes.find(
      (user) => user.username === newUser.username
    );
    if (isTaken) {
      throw new Error("This username is already taken");
    }

    // 2. If everything is ok then create the user
    const res = await fetch(`https://api-generator.retool.com/5dCPRX/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function updateUser(userId, updatedUser) {
  console.log("sodngfodsdfng", updatedUser);

  const res = await fetch(
    `https://api-generator.retool.com/5dCPRX/users/${userId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    }
  );
  const data = await res.json();
  return data;
}

export async function deleteUser(userId) {
  const res = await fetch(
    `https://api-generator.retool.com/5dCPRX/users/${userId}`,
    {
      method: "DELETE",
    }
  );
  const data = await res.json();
  return data;
}

export async function getAllUsers() {
  const res = await fetch(`https://api-generator.retool.com/5dCPRX/users`);
  const data = await res.json();
  return data;
}

export async function getUserFromId(userId) {
  try {
    const res = await fetch(
      `https://api-generator.retool.com/5dCPRX/users/${userId}`
    );
    const data = await res.json();
    if (!data.username) throw new Error("User does not exists");
    return data;
  } catch (error) {
    return error;
  }
}

export async function getUserFromUsername(username) {
  const users = await getAllUsers();
  const user = users.find((user) => user.username === username);
  return user;
}

export async function loginUser(username, password) {
  try {
    const user = await getUserFromUsername(username);
    if (user.username !== username && user.password === password)
      throw new Error("Incorrect username or password");
    return { success: "success", user };
  } catch (error) {
    return error;
  }
}

updateUser(1, {
  dp: "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2018/11/11/Pictures/_b39a21a8-e577-11e8-bdc4-2ad11fc65eb2.jpg",
});
