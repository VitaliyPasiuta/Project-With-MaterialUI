import React from 'react';

import { AppBar, Container, IconButton, Toolbar, Typography, Box, Button, 
  Paper, Grid, Card, CardMedia, CardContent, CardActions, BottomNavigation, BottomNavigationAction, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn'


import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles ((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    margin: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.3)"
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(6),
    marginTop: theme.spacing(6),
  },
  cardMedia: {
    paddingTop: "56.25%"
  },
  CardContent: {
    flexGrow: 1
  },
  cardGrid: {
    marginTop: theme.spacing(4)
  },
  canClick:{
    cursor: "pointer"
  },
}))

const cards = [1,2,3,4,5,6,7,8,9];

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const[open, setOpen] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const handleClickOpen = () =>{
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  return (
    <>
      <AppBar position="fixed">
          <Container fixed>
            <Toolbar>
              <IconButton edge="start" 
              color="inherit" aria-label="menu" className={classes.menuButton}>
              <MenuIcon/>
              </IconButton>
              <Typography variant="h6" className={classes.title}>My blog</Typography>
              <Box mr={3}>
                <Button color="inherit" variant="outlined" onClick={handleClickOpen}>Log in</Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="from-dialog-title">
                  <DialogTitle id="from-dialog-title">Log in</DialogTitle>
                  <DialogContent>
                    <DialogContentText> Log in to see more</DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="email"
                      label="Email Adres"
                      type="email"
                      fullWidth
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="pass"
                      label="Password"
                      type="Password"
                      fullWidth
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">Close</Button>
                    <Button onClick={handleClose} color="primary">Log in</Button>
                  </DialogActions>
                </Dialog>
              </Box>
              <Button color="secondary" variant="contained">Sign up</Button>
            </Toolbar>
          </Container>
      </AppBar>

      <main>
        <Paper className={classes.mainFeaturesPost}
        style={ {backgroundImage: 'url(https://source.unsplash.com/random)'}}>
          <Container fixed >
            <div className={classes.overlay}/>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom>

                    My blog 
                  </Typography>
                  <Typography
                    
                    variant="h5"
                    color="inherit"
                    paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Magnam, ea ad deleniti laboriosam quia, 
                        explicabo neque dolorem delectus repellat sunt quae 
                        expedita autem vitae reprehenderit amet. Mollitia illo minima quisquam.
                  </Typography>
                  <Button variant="contained" color="secondary">
                    Viev more
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <div className={classes.mainContent}>
          <Container maxWidth="md">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>My blog for Material-UI</Typography>
            <Typography variant="h5" align="center" color="textSecondary" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Magnam, ea ad deleniti laboriosam quia, 
              explicabo neque dolorem delectus repellat sunt quae 
            </Typography>
            <div className={classes.mainButton}>
              <Grid container spacing={3} justify="center">
                <Grid item >
                  <Button variant="contained" color="primary">Start now</Button>
                </Grid>
                <Grid item >
                  <Button variant="contained" color="secondary">Learn more</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random/"
                    title="image tatle"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                      Blog post
                    </Typography>
                    <Typography>
                      Some text some text some text some text some text some text
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                    <LayerIcon className={classes.canClick}/>
                    <PlayCircleFilledIcon className={classes.canClick}/>
                  </CardActions>
                </Card>

              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          className={classes.root}
        >
          <BottomNavigationAction
            lable="Recents"
            value="recents"
            icon={<RestoreIcon/>}
          />
          <BottomNavigationAction
            lable="Favorites"
            value="favorites"
            icon={<FavoriteIcon/>}
          />
          <BottomNavigationAction
            lable="Location"
            value="location"
            icon={<LocationOnIcon/>}
          />
          <BottomNavigationAction
            lable="Folder"
            value="folder"
            icon={<FolderIcon/>}
          />
        </BottomNavigation>
        <Typography align="center" color="textSecondary" variant="subtitle1">
          My test site from Material-UI
        </Typography>
      </footer>
    </>
  );
}

export default App;
