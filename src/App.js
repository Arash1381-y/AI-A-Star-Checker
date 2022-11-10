import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";

import MyImplementation from "./pages/MyImplementation";
import Examples from "./pages/Examples";
import GraphForm from "./pages/GraphForm";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/AI-A-Star-Checker" element={<Home/>} />
                <Route path="/graph-form" element={<GraphForm/>}/>
                <Route path="/my-implementation" element={<MyImplementation/>}/>
                <Route path="/examples" element={<Examples/>}/>
                <Route path="/*" element={<div>Not Found</div>}/>
            </Routes>
            <ToastContainer />
        </div>
    );
}

export default App;