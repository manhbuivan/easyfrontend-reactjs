import "./App.css";
import AlbumFeature from "./features/AlbumFeature";
import ColorBox from "./features/ColorBox";

function App() {
  return (
    <div className="App">
      {
        <AlbumFeature />
      }
      {<ColorBox />}
    </div>
  );
}

export default App;
