import React, { Component } from 'react'
import Axios from 'axios'
import User from './User'

class Users extends Component {
    constructor(props){
        super(props)
        this.state={
            next:'',
            page:null,
            previous:'',
            results:[],
            total_pages:null
        }
    }
    
    componentDidMount(){
        this.getData('') 
    }

    getData(link){
        const curr_link=link===''?'http://127.0.0.1:5000/api/user/page/1':link
        Axios.get(curr_link).then(response=>{
            this.setState({
                next:response.data.next,
                page:response.data.page,
                previous:response.data.previous,
                results:response.data.results,
                total_pages:response.data.total_pages
            })
        })
    }



    render() {
        //console.log(this.state.results[0])
        return (
            <div>
                {this.state.results.map((elem)=>(<User key={elem.id} user={elem}></User>))}
            </div>
        )
    }
}

export default Users
