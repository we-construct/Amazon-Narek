import {IconButton, ListItem, Typography} from "@material-ui/core";
import {Close} from "@material-ui/icons";

export default function BasketItem({removeCart, item, handleSave}) {
    return (
        <ListItem>
            <Typography
                style={{display: 'block'}}
                variant='body1'>
                {item.name}{' '}{item.price}$ * {item.count}
            </Typography>
            <Typography
                style={{display: 'inline-block'}}
                variant='caption'
                onClick={() => handleSave(item.id)}
            >
                Save for later
            </Typography>
            <IconButton
                onClick={() => removeCart(item.id)}>
                <Close/>
            </IconButton>
        </ListItem>
    )
}