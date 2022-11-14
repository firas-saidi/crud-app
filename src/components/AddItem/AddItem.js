import React, { Component } from "react" 
import "./AddItem.css"

class AddItem extends Component{
    state ={
        name : "",
        age: '' 
    }

    handleChange =(e) => {
        this.setState(
            {[e.target.id] : e.target.value}
        )
    }
    handleSubmit =(e)=>{
        e.preventDefault()
       if(e.target.name.value === "" )
       {
        alert("please add name");
    }   
  else{ this.props.addItem(this.state)
       this.setState(
           {name : "",
            age: "",
            last:''
       }
       
              )
        alert("You  add name ;  "+ this.state.name +
         " and the age is ;  " +this.state.age);
    
    }
       
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}  className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2" >
              <div className="col-12">
                <div className="form-outline">
                 
         
                 
        
                    <input className="form-control"  type="text" placeholder="name" id="name" onChange={this.handleChange} value={this.state.name} />
                    <input className="form-control"  type="last" placeholder="last name" id="last" onChange={this.handleChange} value={this.state.last} required/>
                    <input className="form-control"  type="number" placeholder="age" id="age" onChange={this.handleChange} value={this.state.age} required/>
                    <input className="btn btn-primary"  type="submit" value="Add" id="submit" />
                    </div>
                   
                    </div>
                    
                </form>
               
           
        )
    }
}
export default AddItem