import { useDispatch } from 'react-redux';
import { Row, Col, Card, useToasts } from '@geist-ui/react';
import { Heart, HeartFill } from '@geist-ui/react-icons';
import '../styles/Post.css';

const Post = ({ post }) => {
    const [, setToast] = useToasts();

    const dispatch = useDispatch();

    const triggerToast = (type, text) =>
        setToast({
            text,
            type,
        });

    const favoritePost = () => {
        const newHeartState = !post.isFavorited;

        if (newHeartState) {
            dispatch({
                type: 'ADD_FAVORITE',
                post: {
                    id: post.id,
                    title: post.title,
                    url: post.url,
                    isFavorited: true,
                },
            });
        } else {
            dispatch({ type: 'REMOVE_FAVORITE', id: post.id });
        }

        triggerToast(
            newHeartState ? 'success' : 'error',
            newHeartState ? 'Post favorited.' : 'Post unfavorited.'
        );
    };

    return (
        <Row className='search post'>
            <Card>
                <Row align='middle'>
                    <Col span={23}>
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
