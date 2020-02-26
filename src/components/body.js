// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// components
// import Image from 'react-bootstrap/Image'
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
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
        <h1 className="name">Jordan Morales</h1>
        <h3>Software Engineer</h3>

      Connect with me:<br/>
      <a  href="https://github.com/Jordan-Morales/" ><ion-icon class="ion-icon" name="logo-github"></ion-icon></a>
      <a href="https://www.linkedin.com/in/jordanmorales/"><ion-icon class="ion-icon" name="logo-linkedin"></ion-icon></a>
      </Grid>
        <Grid item xs={2} lg={1}></Grid>
        <Grid item xs={8} lg={5} className="carousel">


        <Carousel>
          <Carousel.Item>
            <Card >
            <Card.Img
            src="https://res.cloudinary.com/htc0pkenr/image/upload/v1580646711/portfolio/d4ymvvkioxl9rvsea5zo.png"
            alt="compendium"
            fluid
            />
            <Card.Body>
            <Card.Title>
              Complete-Compendium
            </Card.Title>
            <Card.Text>
              This project was my final project during my General Assembly program. I really enjoyed making this and playing with the stylization to make it really give that tabletop RPG feel.
            </Card.Text>
              <Button variant="primary" href="https://complete-compendium.herokuapp.com/" alt="link to compendium project">view this project</Button>
            </Card.Body>
            </Card>
            <br />
          </Carousel.Item>

          <Carousel.Item>
            <Card >
            <Card.Img
            src="https://res.cloudinary.com/htc0pkenr/image/upload/v1580645476/portfolio/zwzy3thoqbnsyfvekpnn.png"
            alt="pokedex"
            fluid
            />
            <Card.Body>
            <Card.Title>
              Pokedex
            </Card.Title>
            <Card.Text>
            Infos about pokedex
            </Card.Text>
            <Button variant="primary" href="https://jordan-morales.github.io/pokedex-plus/" alt="link to pokedex project">view this project</Button>
            </Card.Body>
            </Card>
            <br />
          </Carousel.Item>

          <Carousel.Item>
          <Card >
            <Card.Img
            src="https://res.cloudinary.com/htc0pkenr/image/upload/v1580645477/portfolio/aaakijkanyuj9lmosolf.png"
            alt="SpaceX"
            fluid
            />
            <Card.Body>
            <Card.Title>
            SpaceX
            </Card.Title>
            <Card.Text>
            Infos about spacex
            </Card.Text>
            <Button variant="primary" href="spacex" alt="link to spacex project">view this project</Button>
            </Card.Body>
            </Card>
            <br />
          </Carousel.Item>


          <Carousel.Item>
            <Card >
            <Card.Img
            src="https://res.cloudinary.com/htc0pkenr/image/upload/v1580645477/portfolio/kgetozqxgvvnlzwzqhib.png"
            alt="tealicious"
            fluid
            />
            <Card.Body>
            <Card.Title>
            tealicious
            </Card.Title>
            <Card.Text>
            Infos about tealicious
            </Card.Text>
            <Button variant="primary" href="" alt="link to tealicious project">view this project</Button>
            </Card.Body>
            </Card>
            <br />
          </Carousel.Item>


          <Carousel.Item>
            <Card >
            <Card.Img
            src="https://res.cloudinary.com/htc0pkenr/image/upload/v1580645476/portfolio/gcpej0kb79dhvlgjhgqj.png"
            alt="betterboxd"
            fluid
            />
            <Card.Body>
            <Card.Title>
              Betterboxd
            </Card.Title>
            <Card.Text>
            Infos about betterboxd
            </Card.Text>
            <Button variant="primary" href="" alt="link to betterboxd project">view this project</Button>
            </Card.Body>
            </Card>
            <br />
          </Carousel.Item>
        </Carousel>
        </Grid>
        <Grid item xs={2} lg={1}></Grid>
        <Grid item xs={2} lg={1}></Grid>
        <Grid item xs={8} lg={3}>
        <div className="text">

        <h2>Who am I?</h2>

        <section>
        I am a software engineer who is a technoid, highly cognizant, life-long learner. I enjoy making sure everyone on my team is armed with the knowledge they will need to succeed. When I’m not busy learning, you can find me relaxing to some anime or listening to Lights and Janelle Monae.

        </section>
        </div>
        </Grid>
        <Grid item xs={2} lg={1}></Grid>
    </Grid>
  )


}
}

export default Body;
