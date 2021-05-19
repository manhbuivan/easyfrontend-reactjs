import "./App.css";
import AlbumFeature from "./features/AlbumFeature";
import ColorBox from "./features/ColorBox";
import TodoFeature from "./features/ToDoFeatured";

function App() {
  return (
    <div className="App">
      {<AlbumFeature />}
      {<ColorBox />}
      <TodoFeature />
    </div>
  );
}

export default App;
