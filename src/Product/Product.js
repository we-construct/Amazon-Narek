import {Grid, Card, CardMedia, CardContent, Typography, CardActions, Button} from "@material-ui/core";
import {useEffect, useState} from "react";

export default function Product({item, addCart}) {
    return (
        <Grid item xs={12} md={4}>
            <Card
                sx={{
                    height: '100%'
                }}
            >
                <CardMedia
                    image={`https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg`}
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
                    >Price {item.count} $
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant='contained'
                        onClick={() => addCart(item.id)}>
                        Buy
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

