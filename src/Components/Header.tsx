import React from 'react';
import styles from './Header.module.css';
import igniteLogo from '../assets/ignite-logo.svg';

interface HeaderProps {
}

export const Header: React.FC<HeaderProps> = () => {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite" /> 
        </header>
    );
};
