import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './Style.css'

export class Posts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user:{},
             posts:[]
        }
    }


    componentDidMount(){
        const id =this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(resp=>{
            const user=resp.data
            this.setState({user})
        })
        .catch(err=>{
            console.log(err)
        })

        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(resp=>{
            const posts=resp.data
            this.setState({posts})
        })
        .catch(err=>{
            console.log(err)
        })

        localStorage.setItem('status', true);

    }
    
    handlerLogout=()=>{
    localStorage.removeItem('status');
    }


    render() {
            console.log(this.props)
        return (
            <div>
                <div className='postheader'>
                <h4>SwitchDash</h4>
                <h3><Link to='/'><button onClick={this.handlerLogout}>logout</button></Link></h3>
                </div>
                <div className='usedetails'>
                <ul id='usedetails1'>
                    <li>Name:{this.state.user.name}</li>
                    <li>Email:{this.state.user.email}</li>
                    <li>Phone:{this.state.user.phone}</li>

                </ul>
                <ul id='usedetails2'>
                    <li>Name:{this.state.user.name}</li>
                    <li>Email:{this.state.user.email}</li>
                    <li>Phone:{this.state.user.phone}</li>

                </ul>
                </div>
                
                <div className='postinfo'>
                <div className='postbody1'>
                    <h1>Post Title</h1>
                    <ul>
                    {this.state.posts.map(post=>{
                            return <li key={post.id}>{post.title}</li>
                    })}
                    </ul>
                </div>
                <div className='postbody1'>
                    <h1>Longer Post Title</h1>
                    <ul>
                    {this.state.posts.map(post=>{
                        return <li key={post.id}>{post.body}</li>
                    })}
                    </ul>
                </div>
                </div>
                

            </div>
        )
    }
}

export default Posts
