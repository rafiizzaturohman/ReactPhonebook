import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';

export default class UserForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phone: ''
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.add(this.state.name, this.state.phone)
        this.setState({ name: '', phone: '' })
    }

    render() {
        return (
            <div className='container'>
                <div className='bg-blue-500 rounded-lg px-4 py-1'>
                    <h1 className=' text-lg text-white font-bold'>Add Contact</h1>
                </div>

                <div className=''>
                    <form onSubmit={this.handleSubmit} id='inputForm' className='space-y-8 mt-8'>
                        <div className='space-x-5 flex justify-evenly items-center'>
                            <label className='text-lg font-semibold tracking-wide' htmlFor='name'>Name</label>
                            <input type='text' id='name' name='name' onChange={this.handleInputChange} value={this.state.name} className='text-lg border-2 border-blue-200 rounded-lg px-4 py-2 w-full' />
                        </div>

                        <div className='space-x-4 flex justify-evenly items-center'>
                            <label className='text-lg font-semibold tracking-wide' htmlFor='phone'>Phone</label>
                            <input type='text' id='phone' name='phone' onChange={this.handleInputChange} value={this.state.phone} className='text-lg border-2 border-blue-200 rounded-lg px-4 py-2 w-full' />
                        </div>

                        <div className='flex space-x-2'>
                            <button type='submit' className='transition flex text-white bg-blue-500 hover:bg-blue-600 hover:delay-150 rounded-lg font-semibold items-center space-x-3 pr-6'>
                                <div className='bg-blue-600 px-2 py-1 rounded-lg'>
                                    <FontAwesomeIcon icon='plus' />
                                </div>
                                <p>Add</p>
                            </button>

                            <button type='reset' className='transition flex text-white bg-amber-500 hover:bg-amber-600 hover:delay-150 rounded-lg font-semibold items-center space-x-2 pr-3'>
                                <div className='bg-amber-600 px-2 py-1 rounded-lg'>
                                    <FontAwesomeIcon icon='ban' />
                                </div>
                                <p>Cancel</p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}