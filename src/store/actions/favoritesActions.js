// SETS ALL FAVORITES
export const SET_FAVORITES = 'SET_FAVORITES';
export const setFavorites = favorites => ({ type: SET_FAVORITES, favorites });

// SETTING AND REMOVING INDIVIDUAL FAVORITED POSTS
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const addFavorite = post => ({ type: ADD_FAVORITE, post });
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const removeFavorite = postID => ({ type: REMOVE_FAVORITE, postID });
