import React from "react";
import ReactDOM from "react-dom";
import { loadRemoteComponent } from "module-federation";

const App = () => {
  const TileComponent = React.lazy(() =>
    loadRemoteComponent({
      remote: "tileApp",
      component: "./tile", // Path to the Tile component within the Tile app
    })
  );

  return (
    <div>
      <h1>Table App</h1>
      <React.Suspense fallback="Loading TileComponent...">
        <TileComponent />
      </React.Suspense>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
