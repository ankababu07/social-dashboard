import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link} from 'react-router-dom'
export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users:{},
             text:"",
             isLogged:false,
             isLoggedOff:false

        }
    }
    handleOnBlur=(e)=>{
      let val=e.target.value
      this.setState({[e.target.name]:val})

    }
    
    handlerSubmit=(e)=>{
e.preventDefault()
axios.get("https://jsonplaceholder.typicode.com/users")
.then(resp=>{
   
    const users=resp.data.filter(usr=>{
        return usr.email==this.state.text
    })[0]
    
    if(users){
        this.setState({users:users,
            isLogged:!this.state.isLogged
            })
    }
    else{
        this.setState({
            isLoggedoff:!this.state.isLoggedoff})
    }
    
})
.catch(err=>{
    console.log(err)
})



    }
    
    render() {

        if(this.state.isLogged){
           this.props.history.push(`/${this.state.users.id}`)
        //return   <Redirect to={`/${this.state.users.id}`} ></Redirect> we can use any of above approach
         }
        
        return (
            <div>
                <form onSubmit={this.handlerSubmit}>
                    <div className='login'>
                    <h1>LOGIN</h1>
                    <input type="text" name="text"  onBlur={this.handleOnBlur}/>
                    <h4>{this.state.isLoggedOff && 'Failed Login'}</h4>                    
                    <input type="submit"/>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default Login
