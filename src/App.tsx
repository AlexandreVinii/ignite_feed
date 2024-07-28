import { Header } from "./Components/Header";
import { Post } from "./Post";

import styles from './App.module.css';

import './global.css';
import { Sidebar } from "./Components/Sidebar";

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Alex Vinicius"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ut quod corrupti? Officia earum natus quisquam cupiditate facilis eveniet amet nesciunt porro non ipsam vitae, dolores, ratione neque inventore exercitationem?"
          />
          <Post
            author="Maria Eduarda"
            content="MUITO LEGAl"
          />
        </main>
      </div>
    </div>
  )
}

// export default App;
