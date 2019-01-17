import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import periodic from './periodic.json'

class Element extends Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick()
  {
    console.log("Element",this.props.element)
    window.open(this.props.element.info)
    //alert("You opened: " +this.props.element.info)
  }

  render() {
    let e = this.props.element 
    let imagename="images/"+e.image;
    let info = this.props.info ;

    console.log("Element:", this.props)

    return (
    <div>
      <img width='100px' onClick={this.handleClick} src={imagename} title={e.name} alt=""/>
    </div>
    )
  }
}

class Family extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick()
  {
    alert("You opened: ", this.props.info)
  }
 
  render() {
    
     let el = this.props.elements ;
     let f = this.props.family ;
     let info = this.props.info ;
     console.log("Family",this.props)

    return (
    <div>
     <th><button height="60px" style={{color:"blue" ,"font-size":"larger", alignContent:"right"}} info={info}>{f}</button></th> 
     {el.map((x,i)=> <th><Element key={i} element={x}  info={info}/></th>)}
    </div>
    )
  }
}

class Periodic extends Component {
  render() {
    console.log(this.props.families)
    return (
      
      <div>{this.props.families.map((x,i)=><tr><Family key={i} family={x.family} elements={x.elements}></Family></tr>)}</div>
    
    )
  }
}

class App extends Component {

  render() {
    console.log(periodic)
    let p = periodic.periodic ;
    return (
      <div className="App">
        <header className="App-header">
         <a>
            <h1>"Future Careers by TING"</h1>
            <table id="periodic">
            <Periodic families={p}/>
            </table>          </a>
        </header>
      </div>
    );
  }
}

export default App;
