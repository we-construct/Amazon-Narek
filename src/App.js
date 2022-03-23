import "./App.css";
import {useEffect, useState} from "react";
import ProductsList from "./Product/ProductsList";
import SearchProduct from "./Search/search";
import Cart from "./Cart/Cart";
import {Routes, Route, Link} from "react-router-dom";

const initialProducts = [
    {
        name: 'banana',
        id: 1,
        count: 0,
        categories: ['mig'],

    },
    {
        name: 'tan',
        id: 2,
        count: 0,
        categories: ['asa', 'mig'],
    },
    {
        name: 'ban',
        id: 3,
        count: 0,
        categories: ['kam'],
    },
    {
        name: 'man',
        id: 4,
        count: 0,
        categories: ['man'],
    },
    {
        name: 'kan',
        id: 5,
        count: 0,
        categories: ['van'],
    },
];

const categoryOptions = ['', 'mig', 'tan', 'kam', 'man', 'van']

function App() {
    const [products, setProducts] = useState(initialProducts)
    const [searchTerm, setSearchTerm] = useState("")
    const [selectTerm, setSelectTerm] = useState(null)
    const [cart, setCart] = useState([])

    useEffect(() => {
        if (searchTerm || selectTerm) {
            searchProducts();
        } else {
            setProducts(initialProducts)
        }
    }, [searchTerm, selectTerm])

    const searchProducts = () => {
        const filteredProducts = initialProducts.filter(item => {
            if (searchTerm) {
                return item.name.includes(searchTerm)
            }
            if (selectTerm) {
                return item.categories.includes(selectTerm)
            }
        })
        setProducts(filteredProducts)
    }

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleSelectChange = (event) => {
        setSelectTerm(event.target.value)
    }
    const AddCart = (id) => {
        const product = products.find(i => i.id === id)
        const cartCopy = [...cart, {...product}]
        setCart(cartCopy)
        localStorage.setItem("cart", JSON.stringify(cartCopy));
    }
    const RemoveCart = (id) => {
        setCart((cart.filter(product => product.id !== id)))
        const cartLocal =  JSON.parse(localStorage.getItem('cart'));
        let index = cartLocal.findIndex(function(o){
            return o.id === id;
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
        <Routes>
            <Route path="/card" element={
                <Cart cart={cart}
                      RemoveCart={RemoveCart}
                      onDecrement={onDecrement}
                      onIncrement={onIncrement}
                />
            }/>
            <Route path="/" element={
                <div className="App">
                    <Link to="/card">
                        <button type="button">
                            Cart! {cart.length}
                        </button>
                    </Link>
                    <SearchProduct
                        categoryOptions={categoryOptions}
                        handleSearchChange={handleSearchChange}
                        handleSelectChange={handleSelectChange}
                    />
                    <ProductsList
                        items={products}
                        AddCart={AddCart}
                        RemoveCart={RemoveCart}
                    />
                </div>
            }/>
        </Routes>
    );
}

export default App;
