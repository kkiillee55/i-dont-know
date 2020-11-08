import Axios from 'axios'
import React, {Component} from 'react'


class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
            errors:'',
            success:true
        }
        // this.handleSubmit=this.handleSubmit.bind(this)
        // this.handleChange=this.handleChange.bind(this)
    }


    // handleChange(event){
    //     const value=event.target.value
    //     const key=event.target.name
    //     this.setState({
    //         ...this.state,
    //         [key]:value
    //     })

    // }

    // handleSubmit(event){
    //     event.preventDefault()
    //     console.log('clicked submit button')
    //     Axios.post('http://127.0.0.1:5000/api/user/login',this.state).then(response=>{

    //         //console.log(response.data)
    //         this.setState({
    //             errors:response.data.message['other errors'],
    //             success:response.data.message.success

    //         })
    //         console.log(this.state)
    //     })
    // }


    render(){

        return(
            <div>
                <h1>LOgin page</h1>
                <h1> form is needed</h1>
                <br/>
                <form onSubmit={this.props.onSubmit}>
                    {
                        (!this.state.success) && 
                        <div className='alert'>
                            {this.state.errors}
                        </div>
                    }
                    <label>
                        Email:
                        <br/>
                        <input type='text' name='email' value={this.props.data.email} onChange={this.props.onChange}/>
                    </label>
                    <br/>
                    <label>
                        Password:
                        <br/>
                        <input type='password' name='password' value={this.props.data.password} onChange={this.props.onChange} />
                    </label>
                    <br/>
                    <br/>
                    <input type='submit' value='Submit'/>
                </form>
            </div>
        )
    }
}

export default Login