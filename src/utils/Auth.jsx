export function isLoggedIn() {
  return !!localStorage.getItem('accessToken');
}

export function handleLogout() {
  localStorage.removeItem('userName');
  localStorage.removeItem('accessToken');
  localStorage.removeItem('avatar');
  window.location.href = '/';
}

export const getUserDetails = () => {
  console.log(username, avatar, token);
  return {
    username: localStorage.getItem('username'),
    avatar: localStorage.getItem('avatar'),
    token: localStorage.getItem('accesstoken'),
  };
};
