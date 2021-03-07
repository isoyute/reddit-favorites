import {
	addFavorite,
	removeFavorite,
	setFavorites,
} from './actions/favoritesActions';
import {
	getPostsRequest,
	getPostsSuccess,
	getPostsFailure,
	setPostFavorite,
} from './actions/resultsActions';
import axios from 'axios';

const updateLocalStorage = favorites => {
	localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const setFavoritePosts = posts => dispatch => {
	dispatch(setFavorites(posts));
};

export const addFavoritePost = post => (dispatch, getState) => {
	dispatch(addFavorite(post));
	dispatch(setPostFavorite(post.id, true));
	updateLocalStorage(getState().favorites.posts);
};

export const removeFavoritePost = postID => (dispatch, getState) => {
	dispatch(removeFavorite(postID));
	dispatch(setPostFavorite(postID, false));
	updateLocalStorage(getState().favorites.posts);
};

export const fetchPosts = subreddit => (dispatch, getState) => {
	dispatch(getPostsRequest());

	axios
		.get(`https://www.reddit.com/r/${subreddit}/hot.json?limit=10`)
		.then(res => res.data)
		.then(data =>
			data.data.children
				.filter(post => !post.data.stickied)
				.map(post => ({
					id: post.data.id,
					title: post.data.title,
					url: `https://www.reddit.com${post.data.permalink}`,
					picture: post.data.thumbnail,
					isFavorited: false,
				}))
		)
		.then(posts => {
			dispatch(getPostsSuccess(posts));

			// make sure if any favorited posts are in the retrieved list that they are set to favorited
			[...getState().favorites.posts].forEach(post =>
				dispatch(setPostFavorite(post.id, true))
			);
		})
		.catch(() =>
			dispatch(
				getPostsFailure(
					'Could not retrieve posts from subreddit. Check the spelling and try again!'
				)
			)
		);
};
