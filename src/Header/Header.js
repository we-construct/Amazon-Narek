import {AppBar, Toolbar, Badge, IconButton, Typography, Drawer} from "@material-ui/core"
import {ShoppingBasket} from "@material-ui/icons"
import Basket from "../Cart/Basket";
import {Link} from "react-router-dom";

export default function Header({orderLen, toggleDrawer, toggle, removeCart}) {

    return (
        <AppBar position='static'
             >
            <Toolbar>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Typography style={{ color: 'white' }}>Shop</Typography>
                </Link>
                <IconButton
                    color='inherit'
                    onClick={() => toggleDrawer(true)}
                >
                    <Badge
                        color='secondary'
                        badgeContent={orderLen}
                    >
                        <ShoppingBasket/>
                    </Badge>
                </IconButton>
                <Drawer
                    anchor="right"
                    open={toggle}
                    onClose={() => toggleDrawer(false)}
                >
                    <Basket
                        toggleDrawer={toggleDrawer}
                        removeCart={removeCart}

                    />
                </Drawer>
            </Toolbar>
        </AppBar>
    )
}