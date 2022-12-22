import React from "react";
import UserItem from "./UserItem";

export default function UserList(props) {

    const scrolling = (event) => {
        var element = event.target;
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            props.loadMore()
        }
    }

    return (
        <div onScroll={scrolling} className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 py-4 px-2 max-h-screen overflow-y-auto h-107">
            {
                props.data.map((user) => (
                    <UserItem key={user.id} users={user} update={(name, phone) => props.updateContact(user.id, name, phone)} remove={() => props.removeContact(user.id)} resend={() => props.resendContact(user.id, user.name, user.phone)} />
                ))
            }
        </div>
    )
}