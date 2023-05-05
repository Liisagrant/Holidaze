export function isLoggedIn() {
  return !!localStorage.getItem('accessToken');
}

export function handleLogout() {
  localStorage.clear();
  window.location.href = '/';
}

export const getUserDetails = () => {
  const username = localStorage.getItem('username');
  const avatar = localStorage.getItem('avatar');
  const token = localStorage.getItem('accessToken');

  console.log(username, avatar, token);

  return {
    username: username,
    avatar: avatar,
    token: token,
  };
};
