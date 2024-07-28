import Greeting from "./components/Greeting";
import FuncGreeting from "./components/FuncGreeting";
import "./App.css";
function App() {
  return (
    <>
      <Greeting message="Hey" name="Mohanad Hamed" />
      <FuncGreeting message="Long time no see" name="Moha" />
    </>
  );
}

export default App;
