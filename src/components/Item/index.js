import React from 'react'
import {Wrapper} from "./styled"

function Item({name}) {
    return (
        <Wrapper>
            <p>{name}</p>
        </Wrapper>
    )
}

export default Item
