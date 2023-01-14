import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import SignIn from "../routes/SignIn";

const AppRouter = ({ isLoggin }: { isLoggin: Boolean }) => {
  return (
    <Router>
      <Routes>
        {isLoggin ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<SignIn />} />
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;
