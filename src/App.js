import React from 'react';
import './App.css';
import Body from './components/body'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer'


class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Body />
      <Footer />
    </div>
  );
}
}


export default App;
