import "./App.css";
import ProductsList from "./Product/ProductsList";
import {Routes, Route} from "react-router-dom";
import Login from "./auht/Login";
import Register from "./auht/Register";
import Header from "./Header/Header";
import {Container} from "@material-ui/core";

function App() {
    return (
        <>
            <Header />
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
                            <ProductsList />
                        </div>
                    }/>
                </Routes>
            </Container>
        </>
    );
}

export default App;
