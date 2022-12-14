import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Form from "./components/form/Form";

function App() {
  return (
    <div className="bg-gray-700 w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create-task" element={<Form />} />
          <Route path="/edit-task/:id" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
