import { TOGGLE_FAVORITE, SET_CONTACTS } from "../actions/favorite";

const initialState = {
  allContacts: [],
  favoriteContacts: [],
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const isFavorite = state.favoriteContacts.includes(action.contact);
      if (!isFavorite) {
        return {
          ...state,
          favoriteContacts: state.favoriteContacts.concat(action.contact),
        };
      } else {
        return {
          ...state,
          favoriteContacts: state.favoriteContacts.filter(
            (item) => item.contact === action.contact
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
