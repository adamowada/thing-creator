import React from "react";
import "./App.css";
import Header from "./header";
import Footer from "./footer";

// function App() {

//   );
// }



// export default App;


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      thing: [
        {

          id: 1,
          task: "clean dishes",
        
        },
        {

          id: 2,
          task: "take trash out",
        
        },
        {
      
          id: 3,
          task: "buy beer",
        
        },
      
      ], 
      
    }
  }
  

  render() {
    return (
      <div className="App">
        <Header tasks={this.state.thing}/>
        <h1>Hello adam Can you see me? yes</h1>
        <h2>Start editing to see some magic happen!</h2>
        <h2> did this work? </h2>
        <main>
        <ListThings thing={this.state.thing} onThingCreate={(thing) => onThingCreate(thing, this)}/>
        {/* <ListThings thing={this.state.thing} onThingCreate={(thing) => console.log(thing.thingId)}/> */}
        </main>
        <Footer text="Footer Text Here"/>
      </div>
    )
  }
}

function onThingCreate(task, parentThis){
  // console.log(task)
  // console.log(parentThis.state) 
  // expands that object inside the square braces
  //  = expand variable and put it inside what I'm in right now
  // .. is the expansion of the variable thing
  // fancy append
  //  variable in object is key value pair where key is the variable and the value of the variable
  let thing = [...parentThis.state.thing, {id: parentThis.state.thing.length+1, task}] 
  parentThis.setState({
  //  logic from 69 in 73 for thing
    thing
  })   
}



function ListThings(props) {
  return(
    <>
    <h2>list of things</h2>
    <ul>
      {props.thing.map(thing => <Thing item={thing} key={thing.id}/>)}
    </ul>
    {/* changed onThingCreate to onSubmit */}
    <ThingForm onThingCreate={props.onThingCreate}/>
    </>
  )
}

function Thing(props) {
  return <li>The task is: {props.item.task}</li>
}

class ThingForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      thingId: '',
      thingTask: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
  handleChange(event){
    let newId = event.target.value;
    this.setState({
      thingId: newId
    })
  }
  handleSubmit(event){
    event.preventDefault();
    // this.props.onThingCreate(this.state);
    // target here:
    this.props.onThingCreate(this.state.thingId)
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter Task:
          <input type="text" value={this.state.thingId} onChange={this.handleChange}/>
        </label>
      </form>
    )
  }
}
export default App;
