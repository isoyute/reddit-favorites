// SETS ALL POSTS
export const SET_POSTS = 'SET_POSTS';
export const setPosts = posts => ({ type: SET_POSTS, posts });

// REDDIT POST QUERYING
export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const getPostsRequest = () => ({ type: GET_POSTS_REQUEST });
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const getPostsSuccess = posts => ({ type: GET_POSTS_SUCCESS, posts });
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';
export const getPostsFailure = error => ({ type: GET_POSTS_FAILURE, error });

// TOGGLING A POST FAVORITE STATE
export const SET_POST_FAVORITE = 'SET_POST_FAVORITE';
export const setPostFavorite = (postID, isFavorited) => ({
	type: SET_POST_FAVORITE,
	payload: {
		postID,
		isFavorited,
	},
});
