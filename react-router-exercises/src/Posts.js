import React, { Component } from 'react'
import PostItem from './PostItem'

// EXERCISE: can you update this component so it makes an API request to fetch the posts from our dummy API, and renders them?
/*
1. fetch() the posts on componentDidMount
2. Add them to state
3. Render them in the page
*/
class Posts extends Component {
constructor(props) {
  super(props)
    this.state = {
    posts: undefined
    }
}
  renderPosts() {
return (
    <ul>
        { this.state.posts.map(post => <PostItem key={post.id} post={post} />)}
    </ul>
)
  }
  render() {
    return (
        <div>
            { !this.state.posts && <p>Loading</p>}
            { this.state.posts && this.renderPosts() }
        </div>
    )
  }
  componentDidMount() {
    fetch('http://localhost:3004/posts').then(posts => posts.json()).then(posts => this.setState({
      posts,
    }))
  }
}

export default Posts
