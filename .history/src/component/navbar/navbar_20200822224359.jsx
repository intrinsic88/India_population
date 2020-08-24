import React, { useState } from 'react';
import { AppBar, Toolbar, Grid, Button, makeStyles, Theme, createStyles, Container, Typography, SwipeableDrawer, List, ListItem, Box } from '@material-ui/core';
import logo from '../../assets/logo.png';
import { isMobile } from 'react-device-detect';
import logosm from '../../assets/Petonix_Logo_small.png';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import StoreIcon from '@material-ui/icons/Store';
import ForumIcon from '@material-ui/icons/Forum';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import EmailIcon from '@material-ui/icons/Email';
import AssignmentIcon from '@material-ui/icons/Assignment';

const useStyles = makeStyles((theme) =>
    createStyles({
        title: {
            flexGrow: 1,
        },
        image: {
            width: '250px',
            height: '65px'
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary
        },
        menuButton: {
            float: 'right',
            marginTop: '1%'
        },
        loginBtn: {
            borderRadius: '25em'

        }
    }),
);


function Navbar() {
    const classes = useStyles();

    const [drawerOpen, setdrawerOpen] = useState(false)

    const openDrawer = () => {

        setdrawerOpen(!drawerOpen)
    }

    const drawerOpenHandler = (event) => {
        setdrawerOpen(true)
    }

    const drawerCloseHandler = (event) => {
        setdrawerOpen(false)
    }

    const menuList = () => (
        <div>
            <List>
                <ListItem>
                    <Typography>
                        <Button color='primary'>
                            <HomeIcon />
                            <Box fontWeight='fontWeightBold'>
                                Home
                            </Box>
                        </Button>
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography>
                        <Box>
                            <Button >
                                <SearchIcon />
                                Find a Vet</Button>
                        </Box>
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography>
                        <Box>
                            <Button >
                                <StoreIcon />
                                Pet Pharmacy</Button>
                        </Box>
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography>
                        <Box>
                            <Button >
                                <AssignmentIcon />
                                Blogs</Button>
                        </Box>
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography>
                        <Box>
                            <Button >
                                <ForumIcon />
                                Community</Button>
                        </Box>
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography>
                        <Box>
                            <Button >
                                <SupervisorAccountIcon />
                                About Us</Button>
                        </Box>
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography>
                        <Box>
                            <Button >
                                <EmailIcon />
                                Contact Us</Button>
                        </Box>
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography>
                        <Box>
                            <Button variant="contained" color="primary" className={classes.loginBtn}>Login / Sign up</Button>
                        </Box>
                    </Typography>
                </ListItem>
            </List>

        </div>
    )

    return (
        <Container>
            {
                !isMobile &&
                <AppBar position="fixed" color="secondary">
                    <Toolbar>
                        <Grid container justify="space-between" spacing={3}>
                            <Grid item xs={12} sm={12} lg={2} md={2}>
                                <div>
                                    <img width="100%" src={logo} alt="logo" />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} lg={10} md={10}>
                                <div className={classes.menuButton}>
                                        <Button color='primary'>
                                            <Box fontWeight='fontWeightBold'>
                                                Home
                                            </Box>
                                        </Button>
                                    <Button >Find a Vet</Button>
                                    <Button >Pet Pharmacy</Button>
                                    <Button >Blogs</Button>
                                    <Button> Community</Button>
                                    <Button >About Us</Button>
                                    <Button variant="contained" color="primary" className={classes.loginBtn}>Login / Sign up</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            }

            {
                isMobile &&
                <AppBar position="fixed" color="secondary">
                    <Toolbar>
                        <Grid container justify="space-between" spacing={3}>
                            <Grid item xs={12} sm={12}>
                                <Grid container>
                                <Grid item xs={2}>
                                        <Typography align='left'>
                                            <Button onClick={openDrawer}>
                                                <MenuIcon />
                                            </Button>
                                        </Typography>
                                        <SwipeableDrawer
                                            anchor='left'
                                            open={drawerOpen}
                                            onOpen={drawerOpenHandler}
                                            onClose={drawerCloseHandler}
                                        >
                                            {menuList()}
                                        </SwipeableDrawer>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography align='center'>
                                            <img src={logosm} alt="logo" />
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            }
        </Container>
    )
}


export default Navbar;