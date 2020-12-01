import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { isLoading: true, movies: [] };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    console.log(movies);
    //const movies
    //console.log(movies.data.data.movies);
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    // 영화 데이터 로딩
    this.getMovies();
  }
  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loding..."
          : movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              );
            })}
      </div>
    ); // "We are ready" : 영화데이터가 추후 들어갈 곳
  }
}

export default App;

//https://yts.mx/api/v2/list_movies.json
// 노마드 코더의 영화목록 API 주소 변경 x -> https://yts-proxy.now.sh/list_movies.json

// 노마드 코더의 영화상세 API 주소 변경 x -> https://yts-proxy.now.sh/movie_details.json?movie_id=24286
// movie_id		Integer (Unsigned)	null	The ID of the movie+
