export const setTokenToLS = (token) => {
  localStorage.setItem('jwt', token);
};

export const removeTokenFromLS = () => {
  localStorage.removeItem('jwt');
};
