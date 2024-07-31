import React from 'react';
import styles from './Avatar.module.css';

interface AvatarProps {
    src: string;
};

export const Avatar: React.FC<AvatarProps> = (props) => {
    return(
        <img className={styles.avatar} src={props.src} />
    
    );
};