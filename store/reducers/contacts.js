import { TOGGLE_FAVORITE, SET_CONTACTS } from "../actions/contacts";

const initialState = {
  allContacts: [],
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
    case SET_CONTACTS:
      return {
        ...state,
        allContacts: action.contacts,
      };
    default:
      return state;
  }
};

export default contactsReducer;
