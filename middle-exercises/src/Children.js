import React, { Component } from 'react'

class MyLibraryComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secretValue: 2,
    }
  }

  render() {
    const children = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { secretValue: this.state.secretValue })
    )

    return <div>{children}</div>
  }
}

const InnerComponent = props => <p>The secret value is {props.secretValue}</p>

export default class Children extends Component {
  render() {
    return (
      <div>
        <MyLibraryComponent>
          <InnerComponent />
        </MyLibraryComponent>
      </div>
    )
  }
}
