import React from 'react'
import * as S from './Styled'

export default function List({ name, image }) {
    return (
        <S.Board>
            <S.Hero>{name}</S.Hero>
            <S.Image src={image}></S.Image>
        </S.Board>
    )
}
