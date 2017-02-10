import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PostItem extends Component {
    render() {
        return (
            <li><Link to={`/posts/${this.props.post.id}`}>{this.props.post.title}</Link></li>
            //<li>{this.props.post.title}</li>
        )
    }
}

export default PostItem