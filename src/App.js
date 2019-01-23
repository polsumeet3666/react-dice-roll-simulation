import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import dice1 from './1.png';
import dice2 from './2.png';
import dice3 from './3.png';
import dice4 from './4.png';
import dice5 from './5.png';
import dice6 from './6.png';
class App extends Component {

  constructor(){
    super();
    this.state = {
      roll:null,
      result:null,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({result:null,roll:true});
    let result = Math.floor(Math.random()*Math.floor(6));
    setTimeout(()=>{
      this.setState({...this.state,roll:false,result})
    },3000);
    //alert(this.state);
  

  }

  render() {

    let resultImg;
    let resultText;
    let control;

    if(this.state.roll==null){
      resultImg = <img src={dice6}/>
    }
    else if(this.state.roll== true){
      resultImg = <img src={dice6} className="star"/>
      resultText= <h2>Rolling....</h2> 
    }
    else if(this.state.roll== false){
         switch(this.state.result){
            case 1: resultImg = <img src={dice1}/>
            resultText= <h2>{this.state.result}</h2>  
            break;
            case 2: resultImg = <img src={dice2}/>
            resultText= <h2>{this.state.result}</h2>  
            break;
            case 3: resultImg = <img src={dice3}/>
            resultText= <h2>{this.state.result}</h2>  
            break;
            case 4: resultImg = <img src={dice4}/>
            resultText= <h2>{this.state.result}</h2>  
            break;
            case 5: resultImg = <img src={dice5}/>
            resultText= <h2>{this.state.result}</h2>  
            break;
            case 6: resultImg = <img src={dice6}/>
            resultText= <h2>{this.state.result}</h2>  
            break;
          }
    }



    return (
      <div className="App">
        <header className="App-header">
            <h1>Dice Roll Simulation</h1>          
        </header>
        <div className="diceImage">
          {resultImg}
          <br></br>
          {resultText}
        </div>
        <div className="diceControl">
          <button className="btn btn-success" onClick={this.handleClick}>Roll Dice</button>
        </div>
      </div>
    );
  }
}

export default App;
