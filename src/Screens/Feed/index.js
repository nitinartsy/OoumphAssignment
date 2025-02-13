import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./feed.module.css";
import DotsIcon from "@/Component/Icons/DotsIcon";
import MessageIcon from "@/Component/Icons/MessageIcon";
import LikeIcon from "@/Component/Icons/LikeIcon";
import LikeActiveIcon from "@/Component/Icons/LikeActiveIcon";
import Share from "@/Component/Icons/Share";
import SaveIcon from "@/Component/Icons/SaveIcon";

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [likedPosts, setLikedPosts] = useState(new Set());
    const [commentModal, setCommentModal] = useState({ isOpen: false, post: null });
    const [comments, setComments] = useState({});

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("https://636cce8dab4814f2b26ed36f.mockapi.io/posts");
                setPosts(response.data);
            } catch (error) {
                console.log("Error fetching posts:", error);
            }
        };

        fetchPosts();

        // Load liked posts from localStorage
        const storedLikes = JSON.parse(localStorage.getItem("likedPosts")) || [];
        setLikedPosts(new Set(storedLikes));

        // Load comments from localStorage
        const storedComments = JSON.parse(localStorage.getItem("comments")) || {};
        setComments(storedComments);
    }, []);

    const handleLike = (postId) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === postId
                    ? { ...post, likes: likedPosts.has(postId) ? post.likes - 1 : post.likes + 1 }
                    : post
            )
        );

        setLikedPosts((prevLikes) => {
            const newLikes = new Set(prevLikes);
            if (newLikes.has(postId)) {
                newLikes.delete(postId);
            } else {
                newLikes.add(postId);
            }
            localStorage.setItem("likedPosts", JSON.stringify([...newLikes]));
            return newLikes;
        });
    };

    const handleOpenCommentModal = (post) => {
        setCommentModal({ isOpen: true, post });
    };

    const handleCloseCommentModal = () => {
        setCommentModal({ isOpen: false, post: null });
    };

    const handleCommentChange = (event) => {
        setComments({
            ...comments,
            [commentModal.post.id]: event.target.value,
        });
    };

    const handleSaveComment = () => {
        localStorage.setItem("comments", JSON.stringify(comments));
        handleCloseCommentModal();
    };

    return (
        <div className={styles.feed_supremo_container}>
        <div className={styles.stories_main_container}>
        {posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post.id} className={styles.stories}>
                        <div className={styles.stories_main_container}>
                            <div className={styles.storiesInner}>
                                <img src={post.profile_picture} alt="User Avatar"  />
                                <span >{post.username}</span>
                            </div>
                        </div>
                      
                    </div>
                ))
            ) : (
                <p className={styles.loading}>Loading Stories.....</p>
            )}
        </div>
        <div className={styles.feedContainer}>
            {posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post.id} className={styles.post}>
                        <div className={styles.postHeader_main_container}>
                            <div className={styles.postHeader}>
                                <img src={post.profile_picture} alt="User Avatar" className={styles.avatar} />
                                <span className={styles.username}>{post.username}</span>
                            </div>
                            <DotsIcon />
                        </div>
                        <img src={post.post_image} alt="Post" className={styles.postImage} />
                        <div className={styles.postActive_main_container}>
                            <div className={styles.postActions}>
                                {likedPosts.has(post.id) ? (
                                    <LikeActiveIcon onClick={() => handleLike(post.id)} />
                                ) : (
                                    <LikeIcon onClick={() => handleLike(post.id)} />
                                )}
                                <MessageIcon onClick={() => handleOpenCommentModal(post)} />
                                <Share />
                            </div>
                            <SaveIcon />
                        </div>
                        <div className={styles.like_image}>
                            <img src="/img/likesImage.png" alt="" />
                            <span>{post.likes} Likes</span>
                        </div>
                        <p className={styles.caption}>
                            <strong>{post.username}</strong> {post.caption}
                        </p>
                        <p onClick={() => handleOpenCommentModal(post)} className={styles.comment}>View all {post.comments} comments</p>
                    </div>
                ))
            ) : (
                <p className={styles.loading}>Loading posts...</p>
            )}

            {commentModal.isOpen && commentModal.post && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <span className={styles.closeButton} onClick={handleCloseCommentModal}>
                            <svg width="27" height="27" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.25 4.75L4.75 11.25M4.75 4.75L11.25 11.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </span>
                        <img src={commentModal.post.post_image} alt="Post" className={styles.modalImage} />
                        <div className={styles.comment_container}>
                            <textarea

                                className={styles.commentBox}
                                placeholder="Add a comment..."
                                value={comments[commentModal.post.id] || ""}
                                onChange={handleCommentChange}
                            />
                            <button className={styles.saveButton} onClick={handleSaveComment}>
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </div>
    );
};

export default Feed;
