import { Component } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';
import axios from 'axios';

export default class UserBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3002/users')
            .then((response) => {
                const contacts = response.data.data
                this.setState({ users: contacts })
            })
    }

    addContact = (name, phone) => {
        this.setState((state, props) => {
            return {
                users: [
                    ...state.users,
                    {
                        name,
                        phone
                    }
                ]
            }
        })

        axios.post('http://localhost:3002/users', { name, phone })
    }

    deleteContact = () => {
        axios.delete('http://localhost:3002/users')
    }

    render() {
        return (
            <div>
                <div className='grid grid-cols-2 gap-2 my-20 mx-24'>
                    <div className='m-4'>
                        <div>
                            <h1 className='text-3xl font-bold tracking-wide'>Contact App</h1>
                        </div>

                        <div>
                            <UserList data={this.state.users} />
                        </div>
                    </div>

                    <div>
                        <div className='shadow-2xl shadow-slate-300 bg-white/80 rounded-lg'>
                            <div className='py-26 px-32'>

                                {/* CREATE START */}
                                <UserForm add={this.addContact} />
                                {/* CREATE END */}

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}