import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { isLoading: true };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6 * 1000);
  }
  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loding..." : "We are ready"}</div>;
  }
}

export default App;
