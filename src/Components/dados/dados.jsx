import dice01 from '../../assets/dados/dice-1.png';
import dice02 from '../../assets/dados/dice-2.png';
import dice03 from '../../assets/dados/dice-3.png';
import dice04 from '../../assets/dados/dice-4.png';
import dice05 from '../../assets/dados/dice-5.png';
import dice06 from '../../assets/dados/dice-6.png';

import React from 'react';
import './styles.css';

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      faces: [
        {image: dice01 },
        {image: dice02 },
        {image: dice03 },
        {image: dice04 },
        {image: dice05 },
        {image: dice06 }
      ],
      randomNumber: Math.floor(Math.random() * (6 - 1)) + 1
    }

    /* bind section */
    this.randomNumberGenerated = this.randomNumberGenerated.bind(this);
  }

  /* methods section */
  randomNumberGenerated (decay) {
    this.setState({
      randomNumber: Math.floor(Math.random() * (6 - 1)) + 1
    });
    decay === 180 ? console.log('cabou') : setTimeout(() => this.randomNumberGenerated(decay += 10), decay)
  }

  render () {
    return (
      <div className="container">
          <div onClick={() => this.randomNumberGenerated(0)}>
            <img className="center" src={this.state.faces[this.state.randomNumber].image} alt="face 1"/>
            <p>Clique no dado para girar e aguarde a rolagem</p>
          </div>
        
      </div>
    ); 
  }
}

export default App;