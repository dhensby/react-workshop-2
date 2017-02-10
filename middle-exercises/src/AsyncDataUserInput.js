import React, { Component, PropTypes } from 'react'

// make sure you've got the API running first!

export default class AsyncDataExercise extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // EXERCISE: you'll need to store the user's search term in state
      posts: undefined,
        searchTerm: '',
    }
  }

  componentDidMount() {
    this.fetchPosts()
      this.searchField.focus()
  }

  onSubmit(e) {
    e.preventDefault()
    this.setState({
      posts: undefined,
      searchTerm: this.searchField.value
    }, this.fetchPosts)
  }

  fetchPosts() {
    // EXERCISE: how can you change this search query based on what
    // the user has typed into the text field
    fetch(`http://localhost:3004/posts?q=${this.state.searchTerm}`)
      .then(data => data.json())
      .then(posts => {
        this.setState({
          posts: posts,
        })
      })
  }

  renderPosts() {
    return (
      <ul>
        { this.state.posts.map(post => (
          // EXERCISE: abstract this into its own component
          // and fill out the propTypes
          <PostItem post={post} />
        )) }
      </ul>
    )
  }
  render() {
    return (
      <div>
        { !this.state.posts && <p>Loading</p>}
        { this.state.posts && this.renderPosts() }
        { /* EXERCISE: bind to the onSubmit event on this form so we can search when the user submits */ }
        { /* EXERCISE: you'll need to bind to the onChange event of the input to know the latest value that the user has typed */}
        <form onSubmit={this.onSubmit.bind(this)}>
          { /* EXERCISE: csn you make this input auto focus when the user visits the page, like we did earlier on Codepen? */ }
          <input ref={input => this.searchField = input} type="text" />
          <input type="submit" value="Search" />
          { /* EXERCISE: add a button that clears the search term and just lists all posts */}
          <button class="clear">Clear</button>
        </form>
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