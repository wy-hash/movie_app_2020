import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route exact={true} path="/" component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}
export default App;

//https://yts.mx/api/v2/list_movies.json
// 노마드 코더의 영화목록 API 주소 변경 x -> https://yts-proxy.now.sh/list_movies.json

// 노마드 코더의 영화상세 API 주소 변경 x -> https://yts-proxy.now.sh/movie_details.json?movie_id=24286
// movie_id		Integer (Unsigned)	null	The ID of the movie+
