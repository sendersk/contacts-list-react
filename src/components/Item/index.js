import React from 'react'
import {Wrapper} from "./styled"

function Item({avatar, name}) {
    return (
        <Wrapper>
            <img src={avatar} alt="" />
            <p>{name}</p>
        </Wrapper>
    )
}

export default Item
