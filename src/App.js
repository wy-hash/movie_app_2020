import React from "react";
const log = console.log;

class App extends React.Component {
  constructor(props) {
    super(props);
    log(props);
  }

  state = {
    count: 0,
  };

  add = () => {
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };
  minus = () => {
    this.setState((current) => ({
      count: current.count - 1,
    }));
  };

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {
    // 보통 컴포넌트에 적용한 이벤트 리스너를 제거할 때 많이 사용
  }

  render() {
    return (
      <>
        <h1>This Number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </>
    );
  }
}

export default App;
