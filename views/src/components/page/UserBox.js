import UserAdd from './UserAdd';
import UserEdit from './UserEdit';
import UserList from './UserList';

export default function UserBox() {
    return (
        <div>
            <div className='grid grid-cols-2 my-20 mx-28'>
                <div className='my-24 mx-6'>
                    <div>
                        <h1 className='text-3xl font-bold tracking-wide'>Contact App</h1>
                    </div>

                    <UserList />
                </div>

                <div>
                    <div className='shadow-2xl shadow-slate-300 bg-white/80 rounded-lg'>
                        <div className='py-24 px-32'>
                            <UserAdd />
                            <UserEdit />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}