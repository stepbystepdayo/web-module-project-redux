import {
  TOGGLE_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from "../actions/favoriteActions";

const initialState = {
  favorites: [
    {
      id: 4,
      title: "Dumb and Dumber",
      director: "The Farely Brothers",
      metascore: 76,
      genre: "Comedy",
      description:
        "After a woman leaves a briefcase at the airport terminal, a dumb limo driver and his dumber friend set out on a hilarious cross-country road trip to Aspen to return it.",
    },
  ],
  displayFavorites: true,
};

const favoriteReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return { ...state, displayFavorites: !state.displayFavorites };
    case ADD_FAVORITE:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => action.payload !== item.id),
      };
    default:
      return state;
  }
};

export default favoriteReducer;
