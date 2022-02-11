export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const SET_CONTACTS = "SET_CONTACTS";

export const toggleFavorite = (id) => {
  return { type: TOGGLE_FAVORITE, id };
};

export const setContacts = (contacts) => {
  return { type: SET_CONTACTS, contacts };
};
