import { TOGGLE_FAVORITE } from "../actions/favorite";

const initialState = {
  favoriteContactIds: [],
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const isFavorite = state.favoriteContactIds.includes(action.id);
      if (!isFavorite) {
        return {
          ...state,
          favoriteContactIds: state.favoriteContactIds.concat(action.id),
        };
      } else {
        return {
          ...state,
          favoriteContactIds: state.favoriteContactIds.filter(
            (item) => item.id === action.id
          ),
        };
      }
    default:
      return state;
  }
};

export default contactsReducer;
