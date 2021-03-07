import { useDispatch } from 'react-redux';
import { Row, Col, Card, useToasts } from '@geist-ui/react';
import { Heart, HeartFill } from '@geist-ui/react-icons';
import { addFavoritePost, removeFavoritePost } from '../store/middlewares';
import '../styles/Post.css';

const Post = ({ post }) => {
	const [, setToast] = useToasts();

	const dispatch = useDispatch();

	const favoritePost = () => {
		const isNowFavorited = !post.isFavorited;

		if (isNowFavorited) {
			dispatch(addFavoritePost({ ...post, isFavorited: true }));
		} else {
			dispatch(removeFavoritePost(post.id));
		}

		setToast({
			text: isNowFavorited ? 'Post favorited.' : 'Post unfavorited.',
			type: isNowFavorited ? 'success' : 'error',
		});
	};

	const hasThumbnail = post.picture && post.picture !== 'self';

	return (
		<Row className='search post'>
			<Card>
				<Row align='middle'>
					{hasThumbnail && (
						<Col className='thumbnail' span={5}>
							<img src={post.picture} alt='thumbnail' />
						</Col>
					)}
					<Col className='content' span={hasThumbnail ? 18 : 23}>
						<h4>{post.title}</h4>
						<a href={post.url} target='_blank' rel='noreferrer'>
							<p>{post.url}</p>
						</a>
					</Col>
					<Col span={1}>
						<span className='favorite icon' onClick={favoritePost}>
							{post.isFavorited ? <HeartFill /> : <Heart />}
						</span>
					</Col>
				</Row>
			</Card>
		</Row>
	);
};

export default Post;
