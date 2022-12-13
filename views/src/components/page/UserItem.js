import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function UserItem(props) {
    return (
        <div className='shadow-2xl shadow-slate-300 bg-white/80 rounded-lg'>
            <div className='pt-4 space-y-4'>
                <div className='flex justify-between items-center px-8'>
                    <div className='space-y-3'>
                        <div className='flex space-x-2 items-center'>
                            <FontAwesomeIcon icon='signature' />
                            <h1>{props.name}</h1>
                        </div>

                        <div className='flex space-x-2 items-center opacity-60'>
                            <FontAwesomeIcon icon='phone' />
                            <h1>{props.phone}</h1>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-2 border rounded-b-md py-2'>
                    <button className='transition border-r hover:text-slate-400 hover:delay-150'>Edit</button>
                    <button className='transition border-l hover:text-slate-400 hover:delay-150'>Delete</button>
                </div>
            </div>
        </div>
    )
}