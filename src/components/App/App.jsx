import { Description } from "../Description";
import "./common.css";

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className="app">
    <Description></Description>
  </div>);
}

export default App
