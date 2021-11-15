import { BrowserRouter, Routes, Route } from "react-router-dom";

//Views
import Home from "../views/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*Views*/}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
