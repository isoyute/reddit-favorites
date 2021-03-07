import { useSelector, useDispatch } from 'react-redux';
import { setFavoritePosts } from '../store/middlewares';
import { Page, Tabs, Spinner } from '@geist-ui/react';
import SearchBar from './SearchBar';
import Posts from './Posts';
import { useEffect } from 'react';

const Content = () => {
	const posts = useSelector(state => state.results.posts);
	const favorites = useSelector(state => state.favorites.posts);
	const isSearching = useSelector(state => state.results.isSearching);

	const dispatch = useDispatch();

	useEffect(() => {
		// check to see if there are any favorites in local storage
		const storedFavorites = localStorage.getItem('favorites');
		if (storedFavorites) {
			dispatch(setFavoritePosts(JSON.parse(storedFavorites)));
		}
	}, [dispatch]);

	return (
		<Page.Content className='content'>
			<Tabs initialValue='search' hideDivider>
				<Tabs.Item label='Search' value='search'>
					<SearchBar />
					{isSearching ? <Spinner size='large' /> : <Posts posts={posts} />}
				</Tabs.Item>
				<Tabs.Item label='Favorites' value='favorites'>
					<Posts type='favorites' posts={favorites} />
				</Tabs.Item>
			</Tabs>
		</Page.Content>
	);
};

export default Content;
