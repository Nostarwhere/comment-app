import { Route, Routes, BrowserRouter } from "react-router-dom";
import Comment from "./components/comment";
import ListComment from "./components/listComment";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Comment />}></Route>
        <Route path="/comments" element={<Comment />}></Route>
        <Route path="/list-comments" element={<ListComment />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
