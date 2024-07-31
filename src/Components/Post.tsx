import React from 'react';
import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

interface PostProps {
    // Define the props for the Post component here

}

export const Post: React.FC<PostProps> = () => {
    // Implement the component logic here
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/AlexandreVinii.png" />
                    
                    
                    <div className={styles.authorInfo}>
                        <strong>Alex Vinicius</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='29 de Julho às 22:10h' dateTime="2024-07-29 22:10:05">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href='#'>Alex.Developer/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto</a>
                    <a href="#">#nlw</a>
                    <a href="#">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>

                <textarea
                    placeholder="Deixe um comentário"
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>


            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
};
// export default Post;