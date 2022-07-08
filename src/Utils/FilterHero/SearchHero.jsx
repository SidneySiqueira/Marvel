import { useState, useEffect } from 'react'
import axios from 'axios'

function SearchHero(name) {
    console.log("name", name);
    const [abilities, setAbilities] = useState("")
    useEffect(() => {
        axios
            .get(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&ts=1&apikey=06ead66137452ef75685fcdc895a6c0b&hash=2774d42849c52a2ec23f9b2298e41e7a&limit=100`)
            .then((response) => {
                setAbilities(response.data)

            })
    }, []);
    return abilities
}


export default SearchHero