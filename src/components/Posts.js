import { useSelector } from 'react-redux';
import { Row, Spinner } from '@geist-ui/react';
import Post from './Post';
import '../styles/Posts.css';

const Posts = ({ posts, type }) => {
    const isSearching = useSelector((state) => state.isSearching);

    return (
        <div className='search posts'>
            {isSearching ? (
                <Spinner size='large' />
            ) : posts && posts.length > 0 ? (
                <>
                    {!type && <p>{posts.length} posts found ...</p>}
                    {posts.map((post) => (
                        <Post key={post.id} post={post} />
                    ))}
                </>
            ) : (
                <Row className='search not-found' justify='center'>
                    nothing to see here.
                </Row>
            )}
        </div>
    );
};

export default Posts;
