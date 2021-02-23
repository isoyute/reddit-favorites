import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Page, Tabs } from '@geist-ui/react';
import SearchBar from './SearchBar';
import Posts from './Posts';

const Content = () => {
    const posts = useSelector((state) => state.posts);
    const favorites = useSelector((state) => state.favorites);

    const dispatch = useDispatch();

    useEffect(() => {
        if (favorites && favorites.length === 0) {
            const storedFavorites = JSON.parse(
                localStorage.getItem('favorites')
            );

            if (storedFavorites && storedFavorites.length > 0) {
                dispatch({ type: 'UPDATE_FAVORITES', posts: storedFavorites });
            }
        }
    }, [favorites, dispatch]);

    return (
        <Page.Content className='content'>
            <Tabs initialValue='search' hideDivider>
                <Tabs.Item label='Search' value='search'>
                    <SearchBar />
                    <Posts posts={posts} />
                </Tabs.Item>
                <Tabs.Item label='Favorites' value='favorites'>
                    <Posts posts={favorites} type='favorites' />
                </Tabs.Item>
            </Tabs>
        </Page.Content>
    );
};

export default Content;
