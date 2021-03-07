import {
	SET_FAVORITES,
	ADD_FAVORITE,
	REMOVE_FAVORITE,
} from '../actions/favoritesActions';

const initialState = {
	posts: [],
};

const handleSetFavorites = posts => ({ posts });

const handleAddFavorite = (state, post) => ({ posts: [...state.posts, post] });
const handleRemoveFavorite = (state, postID) => ({
	posts: [...state.posts].filter(post => post.id !== postID),
});

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_FAVORITES:
			return handleSetFavorites(action.favorites);
		case ADD_FAVORITE:
			return handleAddFavorite(state, action.post);
		case REMOVE_FAVORITE:
			return handleRemoveFavorite(state, action.postID);
		default:
			return state;
	}
};

export default reducer;
