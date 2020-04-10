import React, {Component} from 'react'



class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = { 
              
            input : "",
            objet :[] ,
            
        
    }
    this.handleChange=this.handleChange.bind(this )
    this.clickhandle=this.clickhandle.bind(this)

    }

    handleChange(event)
    {
        this.setState({input:event.target.value})
        
    }
    clickhandle()
    {
        this.setState({objet:[...this.state.objet,{name:this.state.input,bool:true}],input:""})

    }
   completehandler(index)
    {
        this.setState({objet:this.state.objet.map((element,i) => (index===i) ? {...element,bool:!element.bool}:element)
        })
    }   
    deletehandler(index)
    {
       this.setState({objet:this.state.objet.filter((element,i) => (index!==i) && element)
    })
    }
  
  
    
 render() { 
   return (
        <div>
            <span className="main-header">
                <h1>To-Do App!</h1>
                <h4>Add New To Do</h4>
                <input type="text" value={this.state.input} placeholder="Enter a text "className="input-text" onChange={this.handleChange} />
                <button className="btn-add" onClick={this.clickhandle}>Add</button>
            </span>
            <span>
                 <p className="paragraphe">let's get some work done</p>
            </span>
            <span>
                 {this.state.objet.map((e,i)=>(
                     <div key={i}>
                     <button className='btn' onClick={()=>this.completehandler(i)}>{e.bool ?"complete":"undo"}</button>
                     <button className='btn' onClick={()=>this.deletehandler(i)}>delete</button>
                     <label style={{textDecoration:(!e.bool)&&"line-through"}}>{e.name}</label>
                     </div>
                 ))}
            </span>
        </div>
            )
                }
          }

export default Todo