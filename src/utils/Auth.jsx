export function isLoggedIn() {
  return !!localStorage.getItem('accessToken');
}

export function handleLogout() {
  localStorage.clear();
  window.location.href = '/';
}

export const getUserDetails = () => {
  const username = localStorage.getItem('userName');
  const avatar = localStorage.getItem('avatar');
  const token = localStorage.getItem('accessToken');
  const email = localStorage.getItem('email');
  const manager = localStorage.getItem('venueManager');

  return {
    username: username,
    avatar: avatar,
    token: token,
    email: email,
    manager: manager,
  };
};

export function updateLocalStorage(key, value) {
  localStorage.setItem(key, value);
}
