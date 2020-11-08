import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom'
import './index.css'

import Header from './components/Header'
import Users from './components/UserComponent/Users'
import Register from'./components/Register'
import Login from './components/Login'
import About from './components/About'
import Axios from 'axios'

class Index extends Component{
    constructor(props){
        super(props)
        this.state={
            messsage:'hello world',
            loginInfo:{
                email:'',
                password:'',
                errors:'',
                success:false,
                token:''
            }
        }
        this.handleLoginChange=this.handleLoginChange.bind(this)
        this.handleLoginSubmit=this.handleLoginSubmit.bind(this)
    }

    handleLoginChange(event){
        const value=event.target.value
        const key=event.target.name
        this.setState({
            loginInfo:{
                ...this.state.loginInfo,
                [key]:value
            }
        })
    }

    handleLoginSubmit(event){
        event.preventDefault()
        console.log('click login button')
        Axios.post('http://127.0.0.1:5000/api/user/login',this.state.loginInfo).then(response=>{
            //console.log(response.data.token)
            this.setState({
                loginInfo:{
                    ...this.state.loginInfo,
                    errors:response.data.message['other errors'],
                    success:response.data.message.success,
                    token:response.data.token

                }
            })
        })
    }




    render(){
        //console.log(this.state)
        return(
            <Router>
                <div>
                    <Header change={this.state.loginInfo.success}/>
                    <Switch>
                        {
                            this.state.loginInfo.success && 
                            <Redirect from='/login' to='/'/>
                        }
                        <Route path='/register' component={Register}></Route>
                        <Route 
                            path='/login' 
                            render={(props)=>(
                                <Login data={this.state.loginInfo} onChange={this.handleLoginChange} onSubmit={this.handleLoginSubmit}/>
                            )}
                        />
                        <Route path='/about' component={About}></Route>
                        <Route path='/:pagenum' component={Users}></Route>
                        <Route path='/' component={Users}></Route>
                    </Switch>
                </div>
            </Router>

        )
    }

}


ReactDOM.render(
    <Index />,
    document.getElementById('root')
)