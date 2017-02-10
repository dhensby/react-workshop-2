import React, { Component, PropTypes } from 'react'

// make sure you've got the API running first!

export default class AsyncDataExercise extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: undefined
    }
  }

  componentDidMount() {
    fetch('http://localhost:3004/posts')
      .then(data => data.json())
      .then(posts => {
        // EXERCISE: how do I store the new posts as state on the component?
          this.setState({
            posts,
          })
      })
  }

  renderPosts() {
    return (
      <ul>
        { this.state.posts.map(post => (
          // EXERCISE: render each post here
          // EXERCISE: abstract a <Post> component
          // and define propTypes for it
            <PostItem key={post.id} post={post} />
        )) }
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
}

const PostItem = props => {
  return (
      <li>{props.post.id}: {props.post.title}</li>
  )
}

PostItem.propTypes = {
  post: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
  }).isRequired,
}