import Axios from 'axios'
import React,{Component} from'react'

class Register extends Component{
    constructor(props){
        super(props)
        this.state={
            first_name:'',
            last_name:'',
            email:'',
            password:'',
            status:'',
            response:{}
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }

    handleSubmit(event){
        event.preventDefault()
        console.log('Form submitted')
        console.log(this.state)
        Axios.post('http://127.0.0.1:5000/api/user/add',this.state).then(response=>{
            //console.log(response.data.message)
            this.setState({
                response:response.data.message  
            })
            console.log(this.state)
        })
    }

    handleChange(event){
        const value=event.target.value
        const key=event.target.name
        //rememebr to specify name in input
        //remember to add [] to key
        this.setState({
            ...this.state,
            [key]:value
        })
        
    }

    render(){
        const first_name_error='first_name' in this.state.response
        const last_name_error='last_name' in this.state.response
        const email_error='email' in this.state.response
        const password_error='password' in this.state.response
        const status_error ='status' in this.state.response
        return(
            <div>
                <h3>This is register page</h3>
                <h3>will add a form in this page</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Firstname:
                        <br/>
                        <input type='text' name='first_name' value={this.state.first_name} onChange={this.handleChange}/>
                        {
                            first_name_error &&
                            <div className='alert'>
                                {this.state.response.first_name}
                            </div>
                        }
                    </label>
                    <br/>
                    <label>
                        Lastname:
                        <br/>
                        <input type='text' name='last_name' value={this.state.last_name} onChange={this.handleChange}/>
                        {
                            last_name_error && 
                            <div className='alert'>
                                {this.state.response.last_name}
                            </div>
                        }
                    </label>
                    <br/>
                    <label>
                        Email:
                        <br/>
                        <input type='text' name='email' value={this.state.email} onChange={this.handleChange}/>
                        {
                            email_error &&
                            <div className='alert'>
                                {this.state.response.email}
                            </div>
                        }
                    </label>
                    <br/>
                    <label>
                        Password:
                        <br/>
                        <input type='password' name='password' value={this.state.password} onChange={this.handleChange}/>
                        {
                            password_error &&
                            <div className='alert'>
                                {this.state.response.password}
                            </div>
                        }
                    </label>
                    <br/>
                    <label>
                        Status:
                        <br/>
                        <input type='text' name='status' value={this.state.status} onChange={this.handleChange}/>
                        {
                            status_error &&
                            <div className='warning'>
                                {this.state.response.status}
                            </div>
                        }
                    </label>
                    <br/>
                    <br/>
                    <input type='submit' value='Submit'/>
                </form>
            </div>
        )
    }
}

export default Register