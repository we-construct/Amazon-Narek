import {Button, Divider, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import BasketItem from "./BasketItem";
import {ShoppingBasket} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useContext} from 'react';
import {Context} from "../App";

export default function Basket({toggleDrawer, cart, setCart, setSavedCart}) {
    const value = useContext(Context);
    const cartLocal = JSON.parse(localStorage.getItem('cart'));

    useEffect(() => {
        setSavedCart(value);
    }, [value]);

    const handleSave = (id) => {
        const product = cart.find(i => i.id === id);
        const savedPro = value.find(i => i.id === id);
        if (savedPro) {
            value.map(i => {
                if (i.id === id) {
                    i.count += product.count;
                }
            })
            setSavedCart(value);
            localStorage.setItem("cartForLater", JSON.stringify(value));
            removeCart(id);
        } else {
            const cartCopy = [...value, {...product}];
            setSavedCart(cartCopy);
            localStorage.setItem("cartForLater", JSON.stringify(cartCopy));
            removeCart(id);
        }
    }
    const removeCart = (id) => {
        setCart((cart.filter(product => product.id !== id)));
        const cartLocal = JSON.parse(localStorage.getItem('cart'));
        let index = cartLocal.findIndex(function (product) {
            return product.id === id;
        })
        if (index !== -1) cartLocal.splice(index, 1);
        localStorage.removeItem('cart');
        localStorage.setItem("cart", JSON.stringify(cartLocal));
    }
    return (
        <div sx={{width: '400px'}}>
            <List sx={{width: '400px'}}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket/>
                    </ListItemIcon>
                    <ListItemText primary='Basket'/>
                </ListItem>
                <Divider/>
                {
                    !cartLocal || !cartLocal.length > 0 ? (
                            <ListItem>
                                Basket Empty!
                            </ListItem>
                        ) :
                        (
                            <>
                                {(cartLocal.map((item) => (
                                    <BasketItem key={item.id}
                                                item={item}
                                                removeCart={removeCart}
                                                handleSave={handleSave}
                                    />
                                )))}
                                <Divider/>
                                <ListItem>
                                    <Typography sx={{fontWeight: 700}}>
                                        Total Cost: {''}
                                        {
                                            cartLocal.reduce((acc, item) => {
                                                return acc + item.price * item.count;
                                            }, 0)
                                        }{''}$
                                    </Typography>
                                </ListItem>
                                <Link to="/login" style={{textDecoration: 'none'}}>
                                    <Button
                                        onClick={() => toggleDrawer(false)}
                                        variant='contained'>
                                        checkout!
                                    </Button>
                                </Link>
                            </>
                        )
                }
            </List>
        </div>


    )
}