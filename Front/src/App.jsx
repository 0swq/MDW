import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Index from "./Pages/Catalog/Index.jsx";
import Nosotros from "./Pages/Catalog/Nosotros.jsx";
import Metodos from "./Pages/Catalog/Metodos.jsx";
import Reclamaciones from "./Pages/Catalog/Reclamaciones.jsx";
import Contactanos from "./Pages/Catalog/Contactanos.jsx";
import Tienda from "./Pages/Catalog/Tienda.jsx";
import Carrito from "./Pages/Catalog/Carrito.jsx";
import {ToastContainer} from "react-toastify";
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
                <Route path="/carrito" element={<Carrito/>}/>
            </Routes>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                toastClassName="toast-quicksand"
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </Router>
    );
}

export default App;