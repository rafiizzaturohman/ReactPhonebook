import React from "react";
import UserItem from "./UserItem";

export default function UserList(props) {
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {
                props.data.map((user) => (
                    <UserItem key={user.id} users={user} update={(name, phone) => props.updateContact(user.id, name, phone)} remove={() => props.removeContact(user.id)} resend={() => props.resendContact(user.id, user.name, user.phone)} />
                ))
            }
        </div>
    )
}