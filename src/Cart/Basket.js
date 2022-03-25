import {Button, Divider, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import BasketItem from "./BasketItem";
import {ShoppingBasket} from "@material-ui/icons";
import {Link} from "react-router-dom";

export default function Basket({removeCart,toggleDrawer}) {
    const cartLocal = JSON.parse(localStorage.getItem('cart'));
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
                    !cartLocal.length > 0 ? (
                            <ListItem>
                                Basket Empty!
                            </ListItem>
                        ) :
                        (
                            <>
                                {  (cartLocal.map((item) => (
                                <BasketItem key={item.id}
                                            item={item}
                                            removeCart={removeCart}
                                />
                            )))}
                                <Divider/>
                                <ListItem>
                                    <Typography sx={{fontWeight:700}}>
                                        Total Cost: { ''}
                                        {
                                            cartLocal.reduce((acc,item) => {
                                                return acc+ item.price * item.count;
                                            },0)
                                        }{''}$
                                    </Typography>
                                </ListItem>
                                <Link to="/login" style={{ textDecoration: 'none' }}>
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