import { React, useState } from 'react';
import clsx from 'clsx';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Badge, Button, InputBase } from '@material-ui/core';
import { makeStyles, useTheme, alpha } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';
import UserOptions from "./UserOptions";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ContactsIcon from '@material-ui/icons/Contacts';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    // flexGrow: 1,
    display: 'none',
    [ theme.breakpoints.up('sm') ]: {
      display: 'block',
    },
    // backgroundColor:"null !important"
  },
  maincontainer: {
    justifyContent: "space-between"
  },
  appBar: {
    transition: theme.transitions.create([ 'margin', 'width' ], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create([ 'margin', 'width' ], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [ theme.breakpoints.up('sm') ]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [ theme.breakpoints.up('md') ]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [ theme.breakpoints.up('sm') ]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [ theme.breakpoints.up('md') ]: {
      display: 'none',
    },
  },
}));

export default function PersistentDrawerLeft({ history }) {
  const { cartItems } = useSelector((state) => state.cart);
  const classes = useStyles();
  const theme = useTheme();
  const [ open, setOpen ] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const links = [
    {
      text: "Home",
      url: "/",
      icon: <InboxIcon />
    },
    {
      text: "Products",
      url: "/products",
      icon: <LocalMallIcon />
    },
    {
      text: "About Us",
      url: "/about",
      icon: <LibraryBooksIcon />
    },
    {
      text: "Contact",
      url: "/contact",
      icon: <ContactsIcon />
    },
  ]
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [ keyword, setKeyword ] = useState("");

  return (
    <div className={classes.root} >
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [ classes.appBarShift ]: open,
        })}
      >
        <Toolbar className={classes.maincontainer}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" root={{}} noWrap>
              Material-UI
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon} >
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
            <IconButton color="inherit" aria-label="fingerprint" href={`/products/${keyword}`}><SearchIcon/></IconButton>
          </div>
          <div style={{ display: "flex" }}>
            <div className={classes.sectionDesktop} style={{ marginRight: "4rem" }}>
              <IconButton aria-label="show 4 new mails" color="inherit" href='/cart'>
                <Badge badgeContent={4} color="secondary">
                  <ShoppingCartIcon
                    style={{ color: cartItems.length > 0 ? "tomato" : "unset" }} 
                  />
                </Badge>
              </IconButton>
            </div>
            {isAuthenticated ? <UserOptions user={user} /> :
              <Button href='/login'
                size="medium"
                variant="outlined"
                aria-label="fingerprint"
                style={{ color: "#fff" }}
              >
                Login&Signup
              </Button>
            }
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {links.map(({ text, url, icon }) => (
            <Link to={url} key={text}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItem button>
                <ListItemText primary={text} />
              </ListItem>
            </Link>

          ))}
        </List>
      </Drawer>

    </div>
  );
}
