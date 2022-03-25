import Product from "./Product";
import {Grid} from "@material-ui/core";

export default function BodyCounts({items, addCart, handleClose, open}) {
    return (
        <Grid container spacing={2}>
            {items.map((item) => (
                <Product key={item.id}
                         item={item}
                         addCart={addCart}
                         handleClose={handleClose}
                         open={open}
                />

            ))}
        </Grid>
    );
}
