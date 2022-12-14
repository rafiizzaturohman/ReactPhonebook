import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';


export default class UserItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            edit: false,
            name: props.name,
            phone: props.phone
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

    handleUpdate = () => {
        this.props.update(this.state.name, this.state.phone)
        this.setState({ edit: false })
    }

    render() {
        if (this.state.edit === true) {
            <div className='container shadow-2xl shadow-slate-300 bg-white/80 rounded-lg w-auto h-auto' >
                <div className='md:py-0 xl:py-0 space-y-2'>
                    <div className='space-y-3 px-8 py-2'>
                        <div className='flex space-x-2 items-center'>
                            <input type='text' name='name' id='name' value={this.state.name} className='px-2 py-0.5 border border-blue-200' />
                        </div>

                        <div className='flex space-x-2 items-center opacity-60'>
                            <input type='text' name='phone' id='phone' value={this.state.phone} className='px-2 py-0.5 border border-blue-200' />
                        </div>
                    </div>

                    <div className='grid grid-cols-2 border rounded-b-md py-2'>
                        <button className='transition border-r hover:text-slate-400 hover:delay-150'>Edit</button>
                        <button className='transition border-l hover:text-slate-400 hover:delay-150'>Delete</button>
                    </div>
                </div>
            </div>
        } else {
            return (
                <div className='container shadow-2xl shadow-slate-300 bg-white/80 rounded-lg w-auto h-auto' >
                    <div className='md:py-0 xl:py-0 space-y-2'>
                        <div className='space-y-3 px-8 py-2'>
                            <div className='flex space-x-2 items-center'>
                                <FontAwesomeIcon icon='signature' />
                                <h1>{this.props.name}</h1>
                            </div>

                            <div className='flex space-x-2 items-center opacity-60'>
                                <FontAwesomeIcon icon='phone' />
                                <h1>{this.props.phone}</h1>
                            </div>
                        </div>

                        <div className='grid grid-cols-2 border rounded-b-md py-2'>
                            <button onClick={() => this.setState({ edit: true })} className='transition border-r hover:text-slate-400 hover:delay-150'>Edit</button>
                            <button onClick={this.props.remove} className='transition border-l hover:text-slate-400 hover:delay-150'>Delete</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}