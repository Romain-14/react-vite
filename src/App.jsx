import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Pages/Home";
import Product from "./Components/Pages/Product";
import Login from "./Components/Pages/auth/Login";

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nos-produits" element={<Product />} />
                <Route path="/authentification" element={<Login />} />
                <Route
                    path="*"
                    element={<h2>Cela n&apos;existe pas encore !</h2>}
                />
            </Routes>
        </>
    );
}

export default App;
