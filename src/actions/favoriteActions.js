export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const toggleFavorites = () => {
  return { type: TOGGLE_FAVORITES };
};

export const addToFav = (movie) => {
  return { type: ADD_FAVORITE, payload: movie };
};

export const removeFav = (id) => {
  return { type: REMOVE_FAVORITE, payload: id };
};
