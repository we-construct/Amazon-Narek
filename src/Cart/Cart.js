import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import BasketItem from "./BasketItem";

export default function Cart({removeCart, onClose, cartOpen}) {
    const cartLocal = JSON.parse(localStorage.getItem('cart'));

    return (
        <Drawer
            anchor="right"
            open={cartOpen}
            onClose={onClose}
        >
            <List sx={{width: '400px'}}>
                456465465

                <Divider/>
                {!cartLocal.length ? (
                        <ListItem>Basket empty</ListItem>
                    ) :
                    cartLocal.map((item) => (

                        <>
                            <BasketItem key={item.name} removeCart={removeCart}/>
                        </>
                    ))
                }
            </List>
            <Divider/>
        </Drawer>
    )
}