import React, { useState, useEffect } from "react";
import Banner from "./components/Banner/index";
import Items from "./components/Items/index";
import LoadingScreen from "./components/LoadingScreen/index";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);

  return (
    <>
      {loading === false ? (
        <div>
          <Banner />
          <Items />
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default App;
