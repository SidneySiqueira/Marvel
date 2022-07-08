import React, { useState } from 'react'
import * as S from './Styled'
import List from '../List/List'
import axios from 'axios'
import Datasheet from '../Datasheet/Datasheet'

export default function Search() {
    const [typing, setTyping] = useState("")
    const [abilities, setAbilities] = useState("")
    const [openList, setOpenList] = useState(false)
    const [references, setReferences] = useState("")
    const [openDataSheet, setOpenDataSheet] = useState(false)

    const searchHero = (name) => {
        axios
            .get(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&ts=1&apikey=06ead66137452ef75685fcdc895a6c0b&hash=2774d42849c52a2ec23f9b2298e41e7a&limit=100`)
            .then((response) => {
                setAbilities(response.data)
                setOpenList(true)
            })
        return abilities
    }

    const searchId = (id) => {
        console.log("id", id);
        axios
            .get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=06ead66137452ef75685fcdc895a6c0b&hash=2774d42849c52a2ec23f9b2298e41e7a`)
            .then((response) => {
                setReferences(response.data)
                setOpenDataSheet(true)
                setOpenList(false)
            })
        return references
    }

    return (
        <>
            <S.List>
                {abilities.data?.results?.map((item, index) => (

                    < div key={index}>
                        <div onClick={() => searchId(item.id)}>
                            {openList &&
                                <List
                                    name={item?.name}
                                    image={item?.thumbnail?.path + "." + abilities?.data?.results[0]?.thumbnail?.extension}

                                />
                            }
                        </div>
                    </div>
                ))}
            </S.List>
            {references.data?.results?.map((hero, index) => {
                console.log("hero", hero);
                return (
                    < div key={index} >
                        {openDataSheet &&
                            <Datasheet
                                name={hero?.name}
                                image={hero?.thumbnail?.path + "." + references?.data?.results[0]?.thumbnail?.extension}
                                description={hero?.description}
                                comics={hero?.comics.items}
                                series={hero?.data?.results[0]?.series?.items}
                                setOpenDataSheet={setOpenDataSheet}
                                setOpenList={setOpenList}

                            />
                        }
                    </div>
                )
            })
            }



            <S.SearchHero>
                <S.Title>Super-hero</S.Title>
                <S.Input onChange={(e) => setTyping(e.target.value)}></S.Input>
                <S.Button onClick={() => searchHero(typing)}> Entre</S.Button>
            </S.SearchHero>
        </>
    )
}
