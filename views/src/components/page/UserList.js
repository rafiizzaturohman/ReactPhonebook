import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function UserList() {
    return (
        <div>
            <div className='grid grid-cols-2 gap-4 mt-10'>
                <div className='shadow-2xl shadow-slate-300 bg-white/80 rounded-lg'>
                    <div className='pt-4 space-y-4'>
                        <div className='flex justify-between items-center px-8'>
                            <div className=''>
                                <div className='flex space-x-2 items-center'>
                                    <FontAwesomeIcon icon='signature' />
                                    <h1>Rafi Izzaturohman</h1>
                                </div>

                                <div className='flex space-x-2 items-center opacity-60'>
                                    <FontAwesomeIcon icon='phone' />
                                    <h1>089646343783</h1>
                                </div>
                            </div>

                            <div className='text-4xl'>
                                <FontAwesomeIcon icon='user-circle' />
                            </div>
                        </div>

                        <div className='grid grid-cols-2 border rounded-b-xl py-2'>
                            <button className='transition border-r hover:text-slate-400 hover:delay-150'>Edit</button>
                            <button className='transition border-l hover:text-slate-400 hover:delay-150'>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}