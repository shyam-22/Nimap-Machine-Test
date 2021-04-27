import React, { Component } from "react";

class Task extends Component{
   state={
          storageData:[],
          items:[],
          index:5
         };

    async componentDidMount(){
        const url = "http://jsonplaceholder.typicode.com/todos"
        let response=await fetch(url)
        let item=await response.json()

        this.setState( { items : item } )
        let data = this.state.items.slice(0,this.state.index);

        this.setState( { storageData:data});
        localStorage.setItem("TODO",JSON.stringify(data)); 
    };


    onRemoveItem = i => {
        const list = this.state.storageData.filter((item, j) => i !== j)
        localStorage.setItem("TODO",JSON.stringify(list))
        alert("You Really want to Delete this User...?")

        this.setState( {storageData:list , index:this.state.index-1})
      }

    onAddItem=i=>{
        let addItem=this.state.items.slice(0,this.state.index+1)
        localStorage.setItem("TODO",JSON.stringify(addItem))

        this.setState( {storageData:JSON.parse(localStorage.getItem("TODO")) , index:this.state.index+1})
      }
      
    render(){
            return(
                <div className="mt-5">
                    {this.state.storageData.map((data,index)=>(
                      <div className="container" key={data.id}>
                      <div className="row">
                          <div className="col-md-3">
                          {data.id}
                          </div>
                          <div className="col-md-3">
                          {data.title}
                          </div>
                          <div className="col-md-3">
                           {data.completed}
                          </div>
                          <div className="col-md-3">
                           <button type="submit" className="btn btn-danger" onClick={(e)=>this.onRemoveItem(index)}
                           >DELETE</button>
                          </div>
                      </div>
                      <hr/>
                  </div>
                    ))}
                    <center>
                    <button type="submit" className="btn btn-primary" onClick={(e)=>this.onAddItem(this.state.index)}
                    >Add Task</button>  
                    </center>           
                </div>
                );
           }
      }
export default Task;