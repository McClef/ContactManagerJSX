import React from 'react'

function PeopleList(props) {
    const contacts = props.data;
    const listItems = contacts.map((val, index) =>
    <li key={index}>{val}</li>
    )
    return <ul>{listItems}</ul>
}

export default PeopleList