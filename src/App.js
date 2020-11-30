import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { isLoading: true, movies: [] };

  componentDidMount() {
    // 영화 데이터 로딩
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6 * 1000);
  }
  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loding..." : "We are ready"}</div>; // "We are ready" : 영화데이터가 추후 들어갈 곳
  }
}

export default App;

//https://yts.mx/api/v2/list_movies.json
// 노마드 코더의 영화목록 API 주소 변경 x -> https://yts-proxy.now.sh/list_movies.json
// 노마드 코더의 영화상세 API 주소 변경 x -> https://yts-proxy.now.sh/movie-details.json
