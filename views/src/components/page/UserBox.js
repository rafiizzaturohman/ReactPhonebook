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
            }).catch((error) => {
                console.log(error)
            })
    }

    addContact = async (name, phone) => {
        try {
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

            await axios.post('http://localhost:3002/users', { name, phone })
        } catch (error) {
            console.log(error)
        }
    }

    // deleteContact = () => {
    //     axios.delete('http://localhost:3002/users')
    // }

    render() {
        return (
            <div>
                <div className='grid gap-10 my-28 mx-24 md:grid-cols-none xl:grid-cols-2'>
                    <div>
                        <div className='shadow-2xl shadow-slate-300 bg-white/80 rounded-lg'>
                            <div className='py-26 px-32'>

                                <UserForm add={this.addContact} />

                            </div>
                        </div>
                    </div>

                    <div className='m-4'>
                        <div>
                            <h1 className='text-3xl font-bold tracking-wide'>Contact App</h1>
                        </div>

                        <div>
                            <UserList data={this.state.users} />
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}