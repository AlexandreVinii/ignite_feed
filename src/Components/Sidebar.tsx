import styles from './Sidebar.module.css';

interface SidebarProps {

}

export const Sidebar: React.FC<SidebarProps> = () => {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover}
                src="https://images.unsplash.com/photo-1678055703308-42e919de802c?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />

            <div className={styles.profile}>
                <strong>Alexandre Vinicius</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">Editar seu Perfil</a>
            </footer>
        </aside>
    );
}