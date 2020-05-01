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
    constructor (props) {
    super(props)
    this.state = {
      index: 0,
      direction: null,
      carouselItemCount: 5
    }
  }

  // ==============
  // HANDLERS
  // ==============
toggleCarousel = (direction) => {
    let index = this.state.index
    const [min, max] = [0, this.state.carouselItemCount - 1]
    switch (direction) {
      case 'next':
        index++;
        break;
      case 'prev':
        index--;
        break;
      default:
    }

    if (index > max) {
      // at max, start from top
      index = 0
    }

    if (index < min) {
      // at min, start from max
      index = max
    }
    this.setState({
      direction,
      index
    })
  }
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
      <a href="https://github.com/Jordan-Morales/" target="_blank" rel="noopener noreferrer">
        <ion-icon class="ion-icon" name="logo-github"></ion-icon></a>

      <a href="https://www.linkedin.com/in/jordanmorales/"  target="_blank" rel="noopener noreferrer">
        <ion-icon class="ion-icon" name="logo-linkedin"></ion-icon></a>

      <a href="mailto:jordan.morales@gmail.com?Subject=Connect">
        <ion-icon class="ion-icon" name="mail"></ion-icon></a>

      <a href="resumev4.pdf" target="_blank" rel="noopener noreferrer">
        <ion-icon class="ion-icon" name="document">Resume</ion-icon></a>

      </Grid>
        <Grid item xs={2} lg={1} class="verticalCenter">
          <ion-icon name="arrow-back" className="left carousel-control" class="arrow" onClick={() => this.toggleCarousel('prev')}></ion-icon>
        </Grid>
        <Grid item xs={8} lg={5} className="carousel">
        <Carousel
          id="carousel"
          indicators={false}
          controls={false}
          activeIndex={this.state.index} direction={this.state.direction}>
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
              <Button variant="primary" href="https://complete-compendium.herokuapp.com/" alt="link to compendium project" target="_blank" rel="noopener noreferrer">View This Project</Button>
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
              Pokédex
            </Card.Title>
            <Card.Text>
            My first project using an external API and responsive design. I chose to work with the PokéAPI. The goal here was to mimic a true Pokédex feel, a digital device for viewing the pocket monsters in your world!
            </Card.Text>
            <Button variant="primary" href="https://jordan-morales.github.io/pokedex-plus/" alt="link to pokedex project" target="_blank" rel="noopener noreferrer">View This Project</Button>
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
            This was another group project, our goal was to pull data from SpaceX API and allow you to view it in a meaningful way. The app allows you to view and save your favorite SpaceX launches and shows the mission badge for each.
            </Card.Text>
            <Button variant="primary" href="spacex" alt="link to spacex project" target="_blank" rel="noopener noreferrer">View This Project</Button>
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
            This is a full-stack app I developed to track your favorite teas and any additional comments about them. Each user can login and view their own set of tea's or a global list.
            </Card.Text>
            <Button variant="primary" href="" alt="link to tealicious project" target="_blank" rel="noopener noreferrer">View This Project</Button>
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
            Betterboxd was a group project I worked on. We wanted our site functionality to be available to both a logged in user and one who has yet to sign up. Additionally we worked on getting a functiong "like button" in the form of a filled heart, this was a really big challenge suprisingly for such a small element.
            </Card.Text>
            <Button variant="primary" href="" alt="link to betterboxd project" target="_blank" rel="noopener noreferrer">View This Project</Button>
            </Card.Body>
            </Card>
            <br />
          </Carousel.Item>
        </Carousel>
        </Grid>
        <Grid item xs={2} lg={1} class="verticalCenter">
        <ion-icon name="arrow-forward" className="right carousel-control" class="arrow" onClick={() => this.toggleCarousel('next')}></ion-icon>
        </Grid>
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
