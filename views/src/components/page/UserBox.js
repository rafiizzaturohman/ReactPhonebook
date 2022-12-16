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

    async componentDidMount() {
        await axios.get('http://localhost:3002/users')
            .then((response) => {
                const contacts = response.data.data
                this.setState({ users: contacts })
            }).catch((error) => {
                console.log(error)
            })
    }

    addContact = async (name, phone) => {
        try {
            const id = Date.now()
            this.setState((state, props) => {
                return {
                    users: [
                        ...state.users,
                        { id, name, phone }
                    ]
                }
            })

            const { data } = await axios.post('http://localhost:3002/users', { name, phone })

            if (data) {
                this.setState((state) => ({
                    users: state.users.map(item => {
                        if (item.id === id) {
                            return { ...data.data }
                        }
                        return item
                    })
                }))
            }
        } catch (error) {
            alert('Failed to add data')
            console.log(error)
        }
    }

    updateContact = async (id, name, phone) => {
        try {
            const { data } = await axios.put(`http://localhost:3002/users/${id}`, { name, phone })

            if (data) {
                this.setState((state) => ({
                    users: state.users.map(item => {
                        if (item.id === id) {
                            return { ...data.data }
                        }
                        return item
                    })
                }))
            }
        } catch (error) {
            alert('Failed to update data')
            console.log(error)
        }
    }

    deleteContact = async (id) => {
        try {
            this.setState((state) => ({
                users: state.users.filter((props) => props.id !== id)
            }));
            await axios.delete(`http://localhost:3002/users/${id}`)
        } catch (error) {
            alert('Failed to delete data')
            console.log(error)
        }
    }


    render() {
        return (
            <div>
                <div className='grid gap-8 my-28 mx-20 md:grid-cols-none xl:grid-cols-2'>
                    <div>
                        {/* CARD FORM START */}
                        <div className='shadow-2xl shadow-slate-300 bg-white/80 rounded-lg'>
                            <div className='container py-26 px-24 space-y-10'>
                                <UserForm add={this.addContact} />
                            </div>
                        </div>
                    </div>
                    {/* CARD FORM END */}

                    {/* CARD LIST START */}
                    <div className=''>
                        <div className='bg-gradient-to-tr from-blue-700 to-blue-500 px-8 py-1 rounded-md shadow-md'>
                            <h1 className='text-3xl text-white font-bold tracking-wide'>Phonebook App</h1>
                        </div>

                        <div className='container py-6 px-2 mt-8 overscroll-y-contain max-h-screen'>
                            <UserList data={this.state.users} updateContact={this.updateContact} removeContact={this.deleteContact} />
                        </div>
                    </div>
                    {/* CARD LIST END */}
                </div>
            </div >
        )
    }
}