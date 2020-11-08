import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'

class Header extends Component{
    constructor(props){
        super(props)
        this.state={
            is_logged_in:false
        }
    }
    
    componentDidMount(){
        Axios.get('http://127.0.0.1:5000/api/login_status').then(response=>{
            this.setState({
                is_logged_in:response.data.login_status
            })
            console.log(response.data)
        })
    }


    render(){
        let part1=undefined
        let part2=undefined
        if(this.props.change){
            part1=<Link to='#'>Account</Link>
            part2=<Link to='#'>Logout</Link>
        }else{
            part1= <Link to='/register'>Register</Link>  
            part2=<Link to='/login'>Login</Link>
        }

        return(
            <header>
                <Link to='/'>Home</Link> | <Link to='/about'>About</Link> | {part1} | {part2}
            </header>
        )
    }
}

export default Header