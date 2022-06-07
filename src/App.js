import React,  {Component} from 'react';
import './index.css';
import './style.css'

class App extends Component {
  
  constructor(props){
      super(props);
      this.state = {
        numero: 0,
        botao: 'Go!'
      };
      this.timer = null;
      this.vai = this.vai.bind(this);
      this.limpar = this.limpar.bind(this);
  }


  vai() {

    let state = this.state

    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      state.botao = 'Go!'
    } else {
      this.timer = setInterval(() => {
        let state = this.state;
        state.numero += 0.1;
        this.setState(state)
      }, 100);
      state.botao = 'Stop!'
    }
    
    this.setState(state)
  }

  limpar () {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }

    let state = this.state;
    state.numero = 0;
    state.botao = 'Go!';
    this.setState(state);
  }
  render(){
    return (
      <div className='container'>
        <h1><i>The time is running out!</i></h1>
        <img src={require('./assets/cronometro.png')} className='img' alt='clock'/>
        <a className='timer'>{this.state.numero.toFixed(1)}</a>
        <div className='areaBtn'>
          <a className='botao' onClick={this.vai}>{this.state.botao}</a>
          <a className='botao'onClick={this.limpar}>Zero!</a>
        </div>
      </div>
    )
  }
}
export default App;
