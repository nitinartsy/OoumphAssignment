import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from './suggestions.module.css'

const Suggestions = () => {
    const [posts, setPosts] = useState([]);

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
    }, []);

    return (
        <>

            <div className={styles.feedContainer}>
                <div className={styles.feedd_inner_header}>
                <h1>Suggested for you</h1>
                <p>See All</p>
                </div>
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post.id} className={styles.post}>
                            <div className={styles.postHeader_main_container}>
                                <div className={styles.postHeader}>
                                    <img src={post.profile_picture} alt="User Avatar" className={styles.avatar} />
                                    <div className={styles.postHeaderInnertext}>
                                        <span className={styles.username}>{post.username}</span>
                                        <p>Followed by ooumph</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))
                ) : (
                    <p className={styles.loading}>Loading posts...</p>
                )}

            </div>
        </>
    )
}

export default Suggestions