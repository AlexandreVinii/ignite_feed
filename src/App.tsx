import { Header } from "./Components/Header";
import { Post } from "./Post";
import './global.css';

export function App() {

  return (
    <div>
      <Header
        title="Ingnite Feed"
      />

      <Post 
        author="Alex Vinicius"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ut quod corrupti? Officia earum natus quisquam cupiditate facilis eveniet amet nesciunt porro non ipsam vitae, dolores, ratione neque inventore exercitationem?"
      />
      <Post 
        author="Maria Eduarda"
        content="MUITO LEGAl"
      
      />
    </div>
  )
}

// export default App;
