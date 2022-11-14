import { Component } from "react";
import AddItem from "./components/AddItem/AddItem";
import TodoItems from "./components/TodoItems/TodoItems";
import "./App.css"
import T from './T'



class  App extends Component  {
    state= {
      items : [
        {id: "a0" , name :" firas", age: 20,last : "saidi"},
        {id: "2z" , name :" mohamed", age: 21,last : "arbi"},
        {id: "3a" , name :"saidi", age: 25,last : "firas"},

      ]
    }
    deletItems = (id) =>{
      let items =this.state.items.filter(item => {
        return item.id !== id 
      })
      this.setState({items})
      
    }
   addItem =(item)=>{
    item.id = Math.floor((1 + Math.random()) * 0x100)
    .toString(16)
    .substring(1);
    let items = this.state.items
    items.push(item)
    this.setState({items})
   }

  render(){
    
  return (
      <div className="app"> 
      <div  className="vh-100" >
      <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-9 col-xl-7">
          <div className="card rounded-3">
          <div className="card-body p-4">
          <h4 className="text-center my-3 pb-3 title">To Do App</h4>
          <AddItem addItem ={this.addItem }/>
          <TodoItems items ={this.state.items} deletItems={this.deletItems}/>
          <T/>
      </div>
    </div> 
  </div>
 </div> 
 </div> 
 </div> 
 </div> 

 
 
 )}
}

export default App;
