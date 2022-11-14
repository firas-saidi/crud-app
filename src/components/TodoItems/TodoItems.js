import React  from "react";
import "./TodoItems.css";

const TodoItems =(props) =>  {
    const {items,deletItems} = props
    let length = items.length
    const ListItems = length ? (items.map(item => {
        return(
            <tbody key={item.id}>
            <tr>
              <th scope="row">{item.id}</th>
              <td>{item.name} </td>
              <td>{item.age}</td>
              <td>{item.last}</td>
              <td>
                <button  onClick={() => deletItems(item.id) }type="submit" className="btn btn-danger" >Delete</button>
                
              
              </td>
            </tr>
        
             </tbody>
        
        )
          
     })) : (
        <>
        <tbody >
            <tr className=" bg-danger  text-center text-white "><td colspan="4" > ther is no item </td>
        
            </tr>
           
        </tbody>
    </>
     )
    return(
              <table className="table mb-4 tm ">
                <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Action</th>
                  </tr>
                  </thead>
       
                  {ListItems}


                </table>
           )
}
export default TodoItems