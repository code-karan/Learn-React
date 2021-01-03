import React, { Component } from 'react'

class TodoItem extends Component {
    render() {
        return (
            <div>
                {this.props.todo.id}<br />
                {this.props.todo.title}<br />
                {this.props.todo.completed}<br />
                <br />

            </div>
        )
    }
}

export default TodoItem
