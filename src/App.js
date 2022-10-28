import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";

import {Switch} from "@mui/material";
import MyImplementation from "./pages/MyImplementation";
import SourceImplementation from "./pages/SourceImplementation";

function App() {
    return (
        <div className="App">
                <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/my-implementation" element={<MyImplementation/>} />
                        <Route path="/source-implementation" element={<SourceImplementation/>} />
                </Routes>
        </div>
    );
}

export default App;