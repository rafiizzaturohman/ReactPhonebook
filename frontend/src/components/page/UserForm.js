import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';

export default class UserForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addCond: false,
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

    handleSearch = (event) => {
        event.preventDefault()
        this.props.search(this.state.name, this.state.phone)
        this.setState({ name: '', phone: '' })
    }

    render() {
        if (this.state.addCond !== true) {
            return (
                <div>
                    {/* SEARCH START */}
                    <div className='container'>
                        <div className='bg-blue-500 rounded-lg px-4 py-1'>
                            <h1 className=' text-lg text-white font-bold'>Search Contact</h1>
                        </div>

                        <form onSubmit={this.handleSearch} className=''>
                            <div id='searchForm' className='space-y-8 mt-8'>
                                <div className='space-x-5 flex justify-evenly items-center'>
                                    <label className='text-lg font-semibold tracking-wide' htmlFor='name'>Name</label>
                                    <input type='text' id='name' name='name' onChange={this.handleInputChange} value={this.state.name} className='text-lg border-2 border-blue-200 rounded-lg px-4 py-2 w-full' />
                                </div>

                                <div className='space-x-4 flex justify-evenly items-center'>
                                    <label className='text-lg font-semibold tracking-wide' htmlFor='phone'>Phone</label>
                                    <input type='text' id='phone' name='phone' onChange={this.handleInputChange} value={this.state.phone} className='text-lg border-2 border-blue-200 rounded-lg px-4 py-2 w-full' />
                                </div>
                            </div>

                            <div>
                                <button className='hidden' type="submit" id="submit">Search</button>
                            </div>
                        </form>
                    </div>
                    {/* SEARCH END */}

                    {/* BUTTON ADD START */}
                    <div className='container mt-10'>
                        <button type='button' onClick={() => this.setState({ addCond: true })} className='transition flex text-white bg-blue-500 hover:bg-blue-600 hover:delay-150 rounded-lg font-semibold items-center space-x-3 pr-6'>
                            <div className='bg-blue-600 px-3 py-1 rounded-lg'>
                                <FontAwesomeIcon icon='plus' />
                            </div>
                            <p>Add Contact</p>
                        </button>
                    </div>
                    {/* BUTTON ADD END */}
                </div>
            )
        } else {
            return (
                <div>
                    {/* SEARCH START */}
                    <div className='container'>
                        <div className='bg-blue-500 rounded-lg px-4 py-1'>
                            <h1 className=' text-lg text-white font-bold'>Search Contact</h1>
                        </div>

                        <form onSubmit={this.handleSearch} className=''>
                            <div id='searchForm' className='space-y-8 mt-8'>
                                <div className='space-x-5 flex justify-evenly items-center'>
                                    <label className='text-lg font-semibold tracking-wide' htmlFor='name'>Name</label>
                                    <input type='text' id='name' name='name' ref={state => this.params = state} className='text-lg border-2 border-blue-200 rounded-lg px-4 py-2 w-full' />
                                </div>

                                <div className='space-x-4 flex justify-evenly items-center'>
                                    <label className='text-lg font-semibold tracking-wide' htmlFor='phone'>Phone</label>
                                    <input type='text' id='phone' name='phone' className='text-lg border-2 border-blue-200 rounded-lg px-4 py-2 w-full' />
                                </div>
                            </div>

                            <div>
                                <button className='hidden' type="submit" id="submit">Search</button>
                            </div>
                        </form>
                    </div>
                    {/* SEARCH END */}

                    {/* ADD FORM START */}
                    <div className='container mt-10'>
                        <div className='bg-blue-500 rounded-lg px-4 py-1'>
                            <h1 className=' text-lg text-white font-bold'>Add Contact</h1>
                        </div>

                        <div className=''>
                            <form onSubmit={this.handleSubmit} id='inputForm' className='space-y-8 mt-8'>
                                <div className='space-x-5 flex justify-evenly items-center'>
                                    <label className='text-lg font-semibold tracking-wide' htmlFor='name'>Name</label>
                                    <input type='text' id='name' name='name' onChange={this.handleInputChange} value={this.state.name} className='text-lg border-2 border-blue-200 rounded-lg px-4 py-2 w-full' onInvalid={e => e.target.setCustomValidity('Please enter name here')} onInput={e => e.target.setCustomValidity('')} required />
                                </div>

                                <div className='space-x-4 flex justify-evenly items-center'>
                                    <label className='text-lg font-semibold tracking-wide' htmlFor='phone'>Phone</label>
                                    <input type='tel' pattern='[08][0-9]{11}' id='phone' name='phone' onChange={this.handleInputChange} value={this.state.phone} className='text-lg border-2 border-blue-200 rounded-lg px-4 py-2 w-full' onInvalid={e => e.target.setCustomValidity('Please enter phone here')} onInput={e => e.target.setCustomValidity('')} required />
                                </div>

                                <p className='tracking-wide opacity-60'>Phone format: 0812345678912</p>

                                <div className='flex space-x-2'>
                                    <button type='submit' className='transition flex text-white bg-blue-500 hover:bg-blue-600 hover:delay-150 rounded-lg font-semibold items-center space-x-3 pr-6'>
                                        <div className='bg-blue-600 px-2 py-1 rounded-lg'>
                                            <FontAwesomeIcon icon='plus' />
                                        </div>
                                        <p>Add</p>
                                    </button>

                                    <button type='button' onClick={() => this.setState({ addCond: false, name: '', phone: '' })} className='transition flex text-white bg-amber-500 hover:bg-amber-600 hover:delay-150 rounded-lg font-semibold items-center space-x-2 pr-3'>
                                        <div className='bg-amber-600 px-2 py-1 rounded-lg'>
                                            <FontAwesomeIcon icon='ban' />
                                        </div>
                                        <p>Cancel</p>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* ADD FORM END */}
                </div>
            )
        }
    }
}