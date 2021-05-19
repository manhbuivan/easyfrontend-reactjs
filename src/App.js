import "./App.css";
import AlbumFeature from "./features/AlbumFeature";
import ColorBox from "./features/ColorBox";
import ListProduct from "./features/ListProduct";
import TodoFeature from "./features/ToDoFeatured";

function App() {
  return (
    <div className="App">
      {/* {<AlbumFeature />}
      {<ColorBox />}
      <TodoFeature /> */}
      <ListProduct/>
    </div>
  );
}

export default App;
