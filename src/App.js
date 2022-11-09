import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";

import MyImplementation from "./pages/MyImplementation";
import SourceImplementation from "./pages/SourceImplementation";
import GraphForm from "./pages/GraphForm";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/graph-form" element={<GraphForm/>}/>
                <Route path="/my-implementation" element={<MyImplementation/>}/>
                <Route path="/source-implementation" element={<SourceImplementation/>}/>
                <Route path="*" element={<div>Not Found</div>}/>
            </Routes>
        </div>
    );
}

export default App;