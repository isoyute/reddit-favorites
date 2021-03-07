import { useState } from 'react';
import { Row, Input, Note } from '@geist-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { Search as SearchIcon } from '@geist-ui/react-icons';
import { fetchPosts } from '../store/middlewares';
import '../styles/SearchBar.css';

const SearchBar = () => {
	const [subreddit, setSubreddit] = useState('');
	const error = useSelector(state => state.results.error);

	const dispatch = useDispatch();

	const handleUpdatePosts = e => {
		if (e.key === 'Enter' && subreddit) {
			dispatch(fetchPosts(subreddit));
		}
	};

	return (
		<>
			<Row className='search subreddit'>
				<Input
					value={subreddit}
					onChange={e => setSubreddit(e.target.value)}
					onKeyDown={handleUpdatePosts}
					icon={<SearchIcon />}
					placeholder="subreddit's name"
					size='large'
					width='100%'
				/>
			</Row>
			{error && (
				<Note type='error' label='error' filled>
					Could not retrieve posts from subreddit. Try again!
				</Note>
			)}
		</>
	);
};

export default SearchBar;
