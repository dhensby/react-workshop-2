import React, { Component } from 'react'
import { connect } from 'react-redux'

class Todo extends Component {
    toggle() {
        this.props.dispatch({
            type: 'TOGGLE_TODO',
            id: this.props.todo.id,
        })
    }
    render() {
        return (
            <li>
                <input onChange={this.toggle.bind(this)} type="checkbox" checked={this.props.todo.done ? 'checked' : ''}/>
                <p>{this.props.todo.text}</p>
                { this.props.todo.done ? 'DONE' : 'Not done!' }
            </li>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
    }
}

const Connected = connect(mapStateToProps)(Todo)
export default Connected