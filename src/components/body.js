// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// components


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
    <body>
      <header className="header">
      Banner and Info
      </header>
      <div className="content">
        <div className="carousel">
        Image Carousel This is where some images goes
        <br />
        <img
        src="https://res.cloudinary.com/htc0pkenr/image/upload/c_scale,w_471/v1578445797/kcw5rjnz29awou0chama.png"
        alt="compendium"
        >
        </img>
        </div>

        <div className="text">
        Description This is where some text about stuff goes
        </div>
      </div>
      <footer className="footer">
      Footer Here
      </footer>
    </body>
  )


}
}

export default Body;
