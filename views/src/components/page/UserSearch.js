export default function UserSearch() {
    return (
        <div className='container'>
            <div className='bg-blue-500 rounded-lg px-4 py-1'>
                <h1 className=' text-lg text-white font-bold'>Search Contact</h1>
            </div>

            <div className=''>
                <div id='searchForm' className='space-y-8 mt-8'>
                    <div className='space-x-5 flex justify-evenly items-center'>
                        <label className='text-lg font-semibold tracking-wide' htmlFor='name'>Name</label>
                        <input type='text' id='name' name='name' className='text-lg border-2 border-blue-200 rounded-lg px-4 py-2 w-full' required />
                    </div>

                    <div className='space-x-4 flex justify-evenly items-center'>
                        <label className='text-lg font-semibold tracking-wide' htmlFor='phone'>Phone</label>
                        <input type='text' id='phone' name='phone' className='text-lg border-2 border-blue-200 rounded-lg px-4 py-2 w-full' required />
                    </div>
                </div>
            </div>
        </div>
    )
}