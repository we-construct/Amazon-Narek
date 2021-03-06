import {Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, TextField} from "@material-ui/core";
import {useEffect, useState} from "react";

export default function Product({item, initialProducts, setCart, cart}) {
    const [products, setProducts] = useState(initialProducts);
    const [count, setCount] = useState(1);

    useEffect(() => {
            const cartLocal = JSON.parse(localStorage.getItem('cart')) || [];
            setCart(cartLocal);
        },
        []);

    const addCart = (id) => {
        const product = products.find(i => i.id === id);
        const pro = cart.find(i => i.id === id);
        if (pro) {
            cart.map(i => {
                if (i.id === id) {
                    i['count'] += count;
                }
            })
            setCart(cart);
            localStorage.setItem("cart", JSON.stringify(cart));
        } else {
            const pro = {...product};
            pro['count'] = 0;
            pro['count'] += count;
            const cartCopy = [...cart, {...pro}];
            setCart(cartCopy);
            localStorage.setItem("cart", JSON.stringify(cartCopy));
        }
    }

    const handleChange = (value) => {
        if (value) {
            setCount(Number(value));
        } else {
            setCount(1);

        }
    }
    return (
        <Grid item xs={12} md={4}>
            <Card
                sx={{
                    height: '100%'
                }}
            >
                <CardMedia
                    image={`https://wallpaperaccess.com/full/1101849.jpg`}
                    sx={{height: 100, width: 80}}
                    component='img'
                />
                <CardContent>
                    <Typography
                        variant='h6'
                        component='h5'
                    >{item.name}
                    </Typography>
                    <Typography
                        variant='body1'
                        component='h5'
                    >Price {item.price} $
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant='contained'
                        onClick={() => addCart(item.id)}
                    >
                        Add+
                    </Button>
                    <TextField
                        label='Qty'
                        type='number'
                        onChange={(event) => handleChange(event.target.value)}
                        inputProps={{min: 1, max: 10}}
                    />
                </CardActions>
            </Card>
        </Grid>
    )
}

