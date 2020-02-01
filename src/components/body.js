// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// components
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


// =============================
// COMPONENT CLASS
// =============================
class Body extends React.Component{
  // ==============
  // STATE
  // ==============

  // ==============
  // HANDLERS
  // ==============

  // ==============
  // RENDER
  // ==============
render(){
  return(
    <Grid container spacing={3}>
      <Grid item xs={12} className="header">
        Banner and Info
      </Grid>
        <Grid item xs={6} className="carousel">
        <Paper>
        Image Carousel This is where some images goes
        <br />
        <img
        src="https://res.cloudinary.com/htc0pkenr/image/upload/c_scale,w_471/v1578445797/kcw5rjnz29awou0chama.png"
        alt="compendium"
        >
        </img>
        </Paper>
        </Grid>

        <Grid item xs={6} className="text">
        Description This is where some text about stuff goes
        </Grid>
      <Grid item xs={12} className="footer">
      Footer Here
      </Grid>
    </Grid>
  )


}
}

export default Body;
