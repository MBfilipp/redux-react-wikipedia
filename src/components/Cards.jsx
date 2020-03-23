import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'

export default () => {
    const result = useSelector(state => Object.values(state.searchResult).map(e => Object.values(e)))

    if(!result.length) {
        return <h5 className="text-center">Совпадений нет</h5>
    }
    return result[0].map((result) => <Card key={result.pageid} result={result}/>)
}