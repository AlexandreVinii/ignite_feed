import React from 'react';
import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

interface CommentProps {
    // Define the props for the Post component here
}

export const Comment: React.FC<CommentProps> = () => {
    return (

        <div className={styles.comment}>
            <Avatar src="https://github.com/dani-uxdev.png" alt='' />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Daniela Mariano</strong>
                            <time title='29 de Julho às 22:10h' dateTime="2024-07-29 22:10:05">Cerca de 1h atrás</time>

                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>

        </div>
    );
};
