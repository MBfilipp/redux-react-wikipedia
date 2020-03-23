import React from 'react'
import moment from 'moment'
import '../style/app.css' 

export default ({ result }) => {
    const createMarkup = () => {
        return { __html: result.snippet }
    }
    return (
        <div className="card mt-1 mb-1">
            <div className="card-body">
                <h5>{result.title}</h5>
                <p className="ellipsis-p" dangerouslySetInnerHTML={createMarkup()}></p>
                <h6 className="float-right">{moment(result.timestamp).format('DD MMM YYYY')}</h6>
            </div>
        </div>
    )
}