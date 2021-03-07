import { Col, Row } from '@geist-ui/react';
import Post from './Post';
import '../styles/Posts.css';

const Posts = ({ posts, type }) => {
	const isFavorites = type === 'favorites';
	const noPostsText = isFavorites
		? 'list of favorites is empty'
		: 'nothing to see here.';

	return (
		<Row className='search posts' justify='center'>
			{posts && posts.length > 0 ? (
				<Col>
					{!isFavorites && <p>{posts.length} posts found ...</p>}
					{posts.map(post => (
						<Post key={post.id} post={post} />
					))}
				</Col>
			) : (
				<Col className='search not-found'>{noPostsText}</Col>
			)}
		</Row>
	);
};

export default Posts;
