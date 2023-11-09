import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import axios from "axios";
import Mod1 from "./mod1.jsx";
import Mod2 from "./mod2.jsx";
import Mod3 from "./mod3.jsx";
import Mod4 from "./mod4.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Main() {
  const [data, changedata] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const url = `${import.meta.env.VITE_server_URL}/getUser`;
        const { data } = await axios.get(url, { withCredentials: true });
        console.log(data);
        changedata(data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Mod1 data={data} />} />
          <Route path="/mod2" element={<Mod2 />} />
          <Route path="/mod3" element={<Mod3 />} />
          <Route path="/mod4" element={<Mod4 />} />
        </Routes>
      </Router>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<Main />);
