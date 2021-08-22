import { TOGGLE_FAVORITES } from "../actions/favoriteActions";

const initialState = {
  favorites: [
    {
      id: 5,
      title: "Tombstone",
      director: "George P. Cosmatos",
      metascore: 89,
      genre: "Drama",
      description:
        "A successful lawman's plans to retire anonymously in Tombstone, Arizona are disrupted by the kind of outlaws he was famous for eliminating.",
    },
  ],
  displayFavorites: true,
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return { ...state, displayFavorites: !state.displayFavorites };
    default:
      return state;
  }
};

export default favoriteReducer;
