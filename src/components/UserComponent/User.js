import React, { Component } from 'react'
class User extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }

    render() {
        return (
            <div className={'user'}>
                <ul>
                    <li>
                        {`Email: ${this.props.user.email}`}
                    </li>
                    <li>
                        {`Name: ${this.props.user.first_name} ${this.props.user.last_name}`}
                    </li>
                    <li>
                        {`Status: ${this.props.user.status===""?"Empty":this.props.user.status}`}
                    </li> 
                </ul>
            
            </div>
        )
    }
}

export default User
