import React from 'react';
import styles from './Header.module.css';
import igniteLogo from '../assets/ignite-logo.svg';

console.log(igniteLogo);
interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
	<header className={styles.header}>
	  <h2>{title}</h2>
	  <nav>
		<ul>
		  <li><a href="#home">Home</a></li>
		  <li><a href="#about">About</a></li>
		  <li><a href="#contact">Contact</a></li>
		</ul>
	  </nav>
	</header>
  );
};
