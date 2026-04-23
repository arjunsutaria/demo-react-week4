export function createUser(name, email) {
  if (!email.includes("@")) {
    throw new Error("Invalid email address");
  }
  return { id: Math.random().toString(36).slice(2), name, email, cart: [] };
}

export function getUserDisplayName(user) {
  return `${user.name} <${user.email}>`;
}

export function updateUserEmail(user, newEmail) {
  if (!newEmail.includes("@")) {
    throw new Error("Invalid email address");
  }
  return { ...user, email: newEmail };
}
