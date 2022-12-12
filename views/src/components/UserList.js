import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function UserList() {
    return (
        <div>
            <div className='grid grid-cols-3 gap-4 mt-10'>
                <div className='shadow-2xl shadow-slate-300 bg-white/80 rounded-lg'>
                    <div className='pt-4 space-y-4'>
                        <div className='px-8'>
                            <div className='flex space-x-2 items-center'>
                                <FontAwesomeIcon icon='signature' />
                                <h1>Rafi Izzaturohman</h1>
                            </div>

                            <div className='flex space-x-2 items-center opacity-60'>
                                <FontAwesomeIcon icon='phone' />
                                <h1>089646343783</h1>
                            </div>
                        </div>

                        <div className='grid grid-cols-2 px-8 py-2 border'>
                            <button className='border-r'>Edit</button>
                            <button className='border-l'>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}