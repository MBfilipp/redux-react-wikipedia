import React from 'react'
import { DebounceInput } from 'react-debounce-input'
import { fetchReguest } from '../redux/actions'
import { connect } from 'react-redux'

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

        const {text} = this.state

        if(!text.trim()) return

        this.props.fetchReguest(this.state.text)
    }

    render() {
        return (
            <form className="form-group w-75 mx-auto">
                <DebounceInput 
                    onChange={this.onChangeHandler} 
                    debounceTimeout={500} 
                    className="form-control" 
                    id="title" 
                    name="text" 
                    value={this.state.text} 
                    placeholder="Введите запрос"
                />
            </form>   
        )
    }
}

const mapDispatchToProps = {
    fetchReguest
}
export default connect(null, mapDispatchToProps)(WikiSearch) 