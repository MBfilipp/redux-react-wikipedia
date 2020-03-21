import React from 'react'

export default ({ result }) => {
    return (
        <div className="card mt-1 mb-1">
            <div className="card-body">
                    <h3 className="float-left">
                        {result}
                    </h3>
            </div>
        </div>
    )
}