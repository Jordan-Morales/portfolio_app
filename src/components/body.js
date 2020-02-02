// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// components
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-bootstrap/Carousel'

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
        <Grid item xs={8} className="carousel">


        <Carousel>
          <Carousel.Item>
            <img
            src="https://res.cloudinary.com/htc0pkenr/image/upload/c_scale,w_471/v1578445797/kcw5rjnz29awou0chama.png"
            alt="compendium"
            />
            <Carousel.Caption>
            Image Carousel This is where some images goes
            <a href="https://complete-compendium.herokuapp.com/" alt="link to compendium project"><ion-icon name="link" size="large"></ion-icon>
            </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
            src="https://res.cloudinary.com/htc0pkenr/image/upload/c_scale,w_471/v1578445797/kcw5rjnz29awou0chama.png"
            alt="compendium"
            />
            <Carousel.Caption>
            Image Carousel This is where some images goes
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
            src="https://res.cloudinary.com/htc0pkenr/image/upload/c_scale,w_471/v1578445797/kcw5rjnz29awou0chama.png"
            alt="compendium"
            />
            <Carousel.Caption>
            Image Carousel This is where some images goes
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>


        </Grid>

        <Grid item xs={4} className="text">
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
