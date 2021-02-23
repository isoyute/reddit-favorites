import { useState } from 'react';
import { Row, Input } from '@geist-ui/react';
import { useDispatch } from 'react-redux';
import { Search as SearchIcon } from '@geist-ui/react-icons';
import axios from 'axios';
import '../styles/SearchBar.css';

const SearchBar = () => {
    const [subreddit, setSubreddit] = useState('');

    const dispatch = useDispatch();

    const handleUpdatePosts = (e) => {
        if (e.key === 'Enter' && subreddit) {
            // update the state to searching for posts to show spinner
            dispatch({ type: 'UPDATE_ISSEARCHING', isSearching: true });

            // request the posts, update the posts and remove the spinner
            axios
                .get(`https://www.reddit.com/r/${subreddit}/hot.json?limit=10`)
                .then((res) => res.data)
                .then((data) => data.data.children)
                .then((posts) => {
                    dispatch({ type: 'UPDATE_POSTS', posts });
                })
                .then(() =>
                    dispatch({ type: 'UPDATE_ISSEARCHING', isSearching: false })
                )
                .catch((err) => {
                    console.log(err);
                    dispatch({
                        type: 'UPDATE_ISSEARCHING',
                        isSearching: false,
                    });
                });
        }
    };

    return (
        <Row className='search subreddit'>
            <Input
                value={subreddit}
                onChange={(e) => setSubreddit(e.target.value)}
                onKeyDown={handleUpdatePosts}
                icon={<SearchIcon />}
                placeholder="subreddit's name"
                size='large'
                width='100%'
            />
        </Row>
    );
};

export default SearchBar;
