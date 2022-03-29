import "./App.css";
import ProductsList from "./Product/ProductsList";
import {Routes, Route} from "react-router-dom";
import Login from "./auht/Login";
import Register from "./auht/Register";
import Header from "./Header/Header";
import {Container} from "@material-ui/core";
import {createContext, useState} from 'react';
export const Context = createContext([]);

function App() {
    const [cart, setCart] = useState([])
    const [savedCart, setSavedCart] = useState([])
    return (
        <Context.Provider value={savedCart}>
            <Header setCart={setCart} cart={cart} setSavedCart={setSavedCart} />
            <Container>
                <Routes>
                    <Route path="/login" element={
                        <Login />
                    }/>
                    <Route path="/register" element={
                        <Register />
                    }/>
                    <Route path="/" element={
                        <div>
                            <ProductsList setCart={setCart} cart={cart}/>
                        </div>
                    }/>
                </Routes>
            </Container>
        </Context.Provider>
    );
}

export default App;
