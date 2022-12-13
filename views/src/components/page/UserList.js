import UserItem from "./UserItem";

export default function UserList(props) {
    return (
        <div className='grid grid-cols-3 gap-4 mt-10'>
            {props.data.map(user => (
                <UserItem name={user.name} phone={user.phone} />
            ))}
        </div>
    )
}