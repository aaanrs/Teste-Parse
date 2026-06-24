import "./style.css";

const Post = ({ username, image, caption, likes }) => {
    return (
        <div className="post_container">
            <div className="heading_part">
                <img src={image} alt="profile_pic" className="profile_pic" />
                <p className="name">{username}</p>
            </div>
            <div className="image_part">
                <img src={image} alt="post_pic" className="post_pic" />
            </div>
            <div className="bottom_part">
                <div>
                    <li><i className="far fa-heart"></i></li>
                    <li><i className="fas fa-location-arrow"></i></li>
                    <li><i className="far fa-comment"></i></li>
                    <li><i className="fas fa-ellipsis-h"></i></li>
                </div>
                <div>
                    <img src={image} alt="liked_by_pic" className="liked_by_pic" />
                    <p className="liked_by">
                        Liked by &nbsp;
                        <strong style={{ display: 'inline-block' }}>{username}</strong>
                        &nbsp; and &nbsp;
                        <strong>{likes}&nbsp;</strong>
                        others.
                    </p>
                </div>
                <div>
                    <h4>{username}</h4>
                    <p>{caption}</p>
                </div>
            </div>
            <div className="comment_part">
                <p>Add a Comment...</p>
            </div>
        </div>
    );
};

export default Post;