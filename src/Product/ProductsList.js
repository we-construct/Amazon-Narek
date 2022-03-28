import Product from "./Product";
import {Grid} from "@material-ui/core";
import SearchProduct from "../Search/Search";
import {useState} from "react";

const initialProducts = [
    {
        name: 'banana',
        id: 1,
        count: 1,
        price: 10,
        quantity: 10,
        categories: ['mig'],
    },
    {
        name: 'tan',
        id: 2,
        count: 1,
        price: 57,
        quantity: 10,
        categories: ['asa', 'mig'],
    },
    {
        name: 'ban',
        id: 3,
        count: 1,
        price: 8,
        quantity: 10,
        categories: ['kam'],
    },
    {
        name: 'man',
        id: 4,
        count: 1,
        price: 20,
        quantity: 10,
        categories: ['man'],
    },
    {
        name: 'kan',
        id: 5,
        count: 1,
        price: 45,
        quantity: 10,
        categories: ['van'],
    },
];

const categoryOptions = ['mig', 'tan', 'kam', 'man', 'van']
export default function BodyCounts({}) {
    const [products, setProducts] = useState(initialProducts)

    const searchProducts = (searchTerm, selectTerm) => {
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

    return (
        <>
        <SearchProduct
            searchProducts={searchProducts}
            initialProducts={initialProducts}
            categoryOptions={categoryOptions}
            setProducts={setProducts}
        />
        <Grid container spacing={2}>
            {products.map((item) => (
                <Product key={item.id}
                         item={item}
                         initialProducts={initialProducts}
                         max={item.quantity}
                />

            ))}
        </Grid>
</>
    );
}
