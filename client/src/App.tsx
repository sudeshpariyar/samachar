import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homePage/HomePage";
import Layout from "./Layout/Layout";
import CustomPages from "./pages/CustomPage/CustomPage";
import SingleBlog from "./pages/SingleBlog/SingleBlog";

function App() {
  const { state } = useLocation();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/sports" element={<CustomPages category="sports" />} />
        <Route path="/health" element={<CustomPages category="health" />} />
        <Route
          path="/political"
          element={<CustomPages category="politics" />}
        />
        <Route path="/business" element={<CustomPages category="business" />} />

        <Route path="/science" element={<CustomPages category="science" />} />
        <Route
          path="/search"
          element={<CustomPages query={`${state?.query}`} />}
        />
        <Route
          path="/entertainment"
          element={<CustomPages category="entertainment" />}
        />
        <Route path="/allnews" element={<CustomPages />} />
        <Route path="/blog/:id" element={<SingleBlog data={state} />} />
      </Route>
    </Routes>
  );
}

export default App;
