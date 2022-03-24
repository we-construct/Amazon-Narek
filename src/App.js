import "./App.css";
import {useEffect, useState} from "react";
import ProductsList from "./Product/ProductsList";
import SearchProduct from "./Search/search";
import Cart from "./Cart/Cart";
import {Routes, Route, Link} from "react-router-dom";
import Login from "./auht/Login";
import Register from "./auht/Register";
import Header from "./Header/header";
import {Container} from "@material-ui/core";

const initialProducts = [
    {
        name: 'banana',
        id: 1,
        count: 0,
        quantity: 10,
        categories: ['mig'],

    },
    {
        name: 'tan',
        id: 2,
        count: 0,
        quantity: 10,
        categories: ['asa', 'mig'],
    },
    {
        name: 'ban',
        id: 3,
        count: 0,
        quantity: 10,
        categories: ['kam'],
    },
    {
        name: 'man',
        id: 4,
        count: 0,
        quantity: 10,
        categories: ['man'],
    },
    {
        name: 'kan',
        id: 5,
        count: 0,
        quantity: 10,
        categories: ['van'],
    },
];

const categoryOptions = ['', 'mig', 'tan', 'kam', 'man', 'van']
const cartLocal = JSON.parse(localStorage.getItem('cart'));

function App() {
    const [products, setProducts] = useState(initialProducts)
    const [searchTerm, setSearchTerm] = useState("")
    const [selectTerm, setSelectTerm] = useState(null)
    const [cart, setCart] = useState([])
    const [state, setCartOpen] = useState(false)

    useEffect(() => {
        if (searchTerm || selectTerm) {
            searchProducts();
        } else {
            setProducts(initialProducts)
        }
    }, [searchTerm, selectTerm])

    const searchProducts = () => {
        // debugger
        const filteredProducts = initialProducts.filter(item => {
            if (searchTerm) {
                return item.name.includes(searchTerm)
            }
            if (selectTerm && selectTerm !== '') {
                return item.categories.includes(selectTerm)
            }
        })
        setProducts(filteredProducts)
    }

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleSelectChange = (event) => {
        console.log(event.target.value);
        setSelectTerm(event.target.value)
    }
    const addCart = (id) => {
        const product = products.find(i => i.id === id)
        const cartCopy = [...cart, {...product}]
        setCart(cartCopy)
        localStorage.setItem("cart", JSON.stringify(cartCopy));
    }
    const removeCart = (id) => {
        setCart((cart.filter(product => product.id !== id)))
        const cartLocal = JSON.parse(localStorage.getItem('cart'));
        let index = cartLocal.findIndex(function (product) {
            return product.id === id;
        })
        if (index !== -1) cartLocal.splice(index, 1);
        localStorage.removeItem('cart')
        localStorage.setItem("cart", JSON.stringify(cartLocal));
    }
    const onDecrement = (id) => {
        const itemsCopy = [...cart];
        itemsCopy.map(i => {
            if (i.id === id) {
                i.count--
            }
        })
        localStorage.setItem("cart", JSON.stringify(itemsCopy));
        setCart(itemsCopy)

    }
    const onIncrement = (id) => {
        const itemsCopy = [...cart];
        itemsCopy.map(i => {
            if (i.id === id) {
                i.count++
            }
        })
        localStorage.setItem("cart", JSON.stringify(itemsCopy));
        setCart(itemsCopy)
    }

    return (
        <>
            <Header
                handleCart={() => setCartOpen(true)}
                orderLen={cart ? cart.length : 0}

            />
            <Container>
                <Routes>
                    <Route path="/card" element={
                        <Cart
                            cartOpen={state}
                            onClose={() => {
                                setCartOpen(false)
                            }}
                            cart={cart}
                            cartLocal={cartLocal}
                            removeCart={removeCart}
                            onDecrement={onDecrement}
                            onIncrement={onIncrement}
                        />
                    }/>
                    <Route path="/login" element={
                        <Login
                        />
                    }/>
                    <Route path="/register" element={
                        <Register
                        />
                    }/>
                    <Route path="/" element={
                        <div className="App">
                            <SearchProduct
                                categoryOptions={categoryOptions}
                                selectTerm={selectTerm}
                                handleSearchChange={handleSearchChange}
                                handleSelectChange={handleSelectChange}
                            />
                            <ProductsList
                                items={products}
                                addCart={addCart}
                                removeCart={removeCart}
                            />
                        </div>
                    }/>
                </Routes>
            </Container>
        </>
    );
}

export default App;
