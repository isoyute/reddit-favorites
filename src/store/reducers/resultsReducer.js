import {
	SET_POSTS,
	GET_POSTS_REQUEST,
	GET_POSTS_SUCCESS,
	GET_POSTS_FAILURE,
	SET_POST_FAVORITE,
} from '../actions/resultsActions';

const initialState = {
	posts: [],
	error: null,
	isSearching: false,
};

const handleSetPosts = posts => ({ ...initialState, posts });

const handleGetPostsRequest = () => ({ ...initialState, isSearching: true });
const handleGetPostsSuccess = posts => ({ ...initialState, posts });
const handleGetPostsFailure = error => ({ ...initialState, error });

const handleSetPostIsFavorite = (state, postID, isFavorited) => {
	const posts = [...state.posts].map(post => {
		if (post.id === postID) {
			post.isFavorited = isFavorited;
		}

		return post;
	});

	return { ...state, posts };
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_POSTS:
			return handleSetPosts(action.posts);
		case GET_POSTS_REQUEST:
			return handleGetPostsRequest();
		case GET_POSTS_SUCCESS:
			return handleGetPostsSuccess(action.posts);
		case GET_POSTS_FAILURE:
			return handleGetPostsFailure(action.error);
		case SET_POST_FAVORITE:
			return handleSetPostIsFavorite(
				state,
				action.payload.postID,
				action.payload.isFavorited
			);
		default:
			return state;
	}
};

export default reducer;
