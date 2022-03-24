import {AppBar, Toolbar,Badge, IconButton, Typography} from "@material-ui/core"
import {ShoppingBasket} from "@material-ui/icons"

export default function Header({handleCart,orderLen}) {
    return (
        <AppBar
            position='static'
        >
            <Toolbar>
                <Typography>
                    Shop
                </Typography>
                <IconButton
                    color='inherit'
                    onClick={handleCart}
                >
                    <Badge
                    color='secondary'
                    badgeContent={orderLen}
                    >
                        <ShoppingBasket/>
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}