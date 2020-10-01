import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


    
   function ButtonAppBar() {
    
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };


      return (
       
          <div className={classes.root}>



            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <MenuIcon/>
                    </Button>
                    <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose} href="/">Profile</MenuItem>
                    <MenuItem onClick={handleClose} href="/Allposts">All Posts</MenuItem>
                    <MenuItem onClick={handleClose} href="/">Leave a Post!</MenuItem>
                  </Menu>

                </IconButton>
                <Typography variant="h6" className={classes.title} href="/">
                  CrafterSpace
                </Typography>
                <Button color="inherit" href="/">Login</Button>
              </Toolbar>
            </AppBar>
          </div>
        );
        
      }

 export default ButtonAppBar;
// <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
// <a className="navbar-brand" href="/">
//   Craftspace
// </a>
// <a className="navbar-brand" href="/Allposts">
//   See All Posts
// </a>
// <a className="navbar-brand" href="/">
//   Leave A Post!
// </a>
// </nav>