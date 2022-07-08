import React from 'react'
import * as S from './Styled'

export default function Datasheet({ name, image, description, comics, series, setOpenDataSheet = { setOpenDataSheet }, setOpenList = { setOpenList } }) {
    console.log("comics", comics);
    return (
        <S.Datasheet>
            <S.Information>
                <S.Image src={image} />
                <S.Presentation>

                    <S.Name>{name}</S.Name>
                    <S.Description>{description}</S.Description>
                </S.Presentation>
                <S.X onClick={() => { setOpenDataSheet(false), setOpenList(true) }}>X</S.X>
            </S.Information>
            <S.Shares>
                {comics.map((item) => {
                    return <S.Comics>{item.name}</S.Comics>
                })}
                <p>{series}</p>
            </S.Shares>
        </S.Datasheet>
    )
}
