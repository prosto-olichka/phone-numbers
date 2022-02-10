export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const SET_CONTACTS = "SET_CONTACTS";

export const toggleFavorite = (contact) => {
  return { type: TOGGLE_FAVORITE, contact };
};

export const setContacts = (contacts) => {
  return { type: SET_CONTACTS, contacts };
};
