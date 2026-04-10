import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Index from "./Pages/Catalog/Index.jsx";
import Nosotros from "./Pages/Catalog/Nosotros.jsx";
import Metodos from "./Pages/Catalog/Metodos.jsx";
import Reclamaciones from "./Pages/Catalog/Reclamaciones.jsx";
import Contactanos from "./Pages/Catalog/Contactanos.jsx";
import Tienda from "./Pages/Catalog/Tienda.jsx";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index/>}/>
                <Route path="/nosotros" element={<Nosotros/>}/>
                <Route path="/metodos" element={<Metodos/>}/>
                <Route path="/reclamaciones" element={<Reclamaciones/>}/>
                <Route path="/contactanos" element={<Contactanos/>}/>
                <Route path="/tienda" element={<Tienda/>}/>
            </Routes>
        </Router>
    );
}

export default App;