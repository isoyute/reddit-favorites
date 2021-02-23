const initState = {
    posts: [],
    favorites: [],
    isSearching: false,
};

const updatePostFavoriteStatus = (posts, id, status) => {
    return [...posts].map((post) => {
        if (post.id === id) {
            post.isFavorited = status;
        }

        return post;
    });
};

const storeFavoritesLocally = (favorites) => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
    return favorites;
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_POSTS':
            const posts = action.posts
                .map((post) => ({
                    id: post.data.id,
                    title: post.data.title,
                    url: `https://www.reddit.com${post.data.permalink}`,
                    isStickied: post.data.stickied,
                    isFavorited: false,
                }))
                .filter((post) => !post.isStickied);

            return {
                ...state,
                posts: posts.map((post) => {
                    for (const favorite of state.favorites) {
                        if (post.id === favorite.id) {
                            post.isFavorited = true;
                            break;
                        }
                    }

                    return post;
                }),
            };
        case 'UPDATE_FAVORITES':
            return {
                ...state,
                favorites: action.posts,
            };
        case 'ADD_FAVORITE':
            return {
                posts: updatePostFavoriteStatus(
                    state.posts,
                    action.post.id,
                    true
                ),
                favorites: storeFavoritesLocally([
                    ...state.favorites,
                    action.post,
                ]),
                isSearching: state.isSearching,
            };
        case 'REMOVE_FAVORITE':
            return {
                posts: updatePostFavoriteStatus(state.posts, action.id, false),
                favorites: storeFavoritesLocally(
                    [...state.favorites].filter((post) => post.id !== action.id)
                ),
                isSearching: state.isSearching,
            };
        case 'UPDATE_ISSEARCHING':
            return {
                ...state,
                isSearching: action.isSearching,
            };
        default:
            return state;
    }
};

export default reducer;
