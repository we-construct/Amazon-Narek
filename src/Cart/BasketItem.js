import {IconButton, ListItem, Typography} from "@material-ui/core";
import {Close} from "@material-ui/icons";

export default function BasketItem({removeCart, item}) {
    return (
        <ListItem>
            <Typography
                style={{display: 'inline-block'}}
                variant='body1'>
                {item.name}{' '}{item.price}$ * {item.count}
            </Typography>
            <IconButton
                onClick={() => removeCart(item.id)}>
                <Close/>
            </IconButton>
        </ListItem>
    )
}