import "./App.css";
import Controls from "./components/Controls";
import Header from "./components/Header";
import Video from "./components/Video";

function App() {
  return (
    <div className="bg-[#fefefe] h-screen flex flex-col">
      <Header />
      <Video />
      <Controls />
    </div>
  );
}

export default App;
