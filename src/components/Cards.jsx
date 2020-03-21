import React from 'react'
import Card from './Card'

export default ({ result }) => {
    if(!result.length) {
        return <h5 className="text-center">Совпадений нет</h5>
    }
    return result.map((result) => <Card key={result} result={result}/>)
}