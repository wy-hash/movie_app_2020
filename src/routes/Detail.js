import React from "react";

class Detail extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    const { location, history } = this.props;

    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;
