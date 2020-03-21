import React from 'react'

class WikiSearch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            text: ''
        }
    }

    onChangeHandler = event => {
        event.persist()
        this.setState(prev => ({...prev, ...{
            [event.target.name]: event.target.value
        }}))
        console.log(this.state.text)
    }

    render() {
        return (
            <form className="form-group w-75 mx-auto">
                <input onChange={this.onChangeHandler} type="text" className="form-control" id="title" name="text" value={this.state.text} placeholder="Введите запрос"/>
            </form>   
        )
    }
}

export default WikiSearch