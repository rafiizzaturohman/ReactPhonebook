import UserItem from "./UserItem";

export default function UserList(props) {
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10' >
            {
                props.data.map((user) => (
                    <UserItem key={user.id} name={user.name} phone={user.phone} update={(name, phone) => props.updateContact(user.id, name, phone)} remove={() => props.removeContact(user.id)} />
                ))
            }
        </div>
    )
}