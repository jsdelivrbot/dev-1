import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost, fetchPosts, deletePost } from "../actions";
import _ from "lodash";
import { Link } from "react-router-dom";

class PostsShow extends Component {
  componentDidMount() {
    const { _id } = this.props.match.params;
    this.props.fetchPost(_id);
  }

  onDeleteClick() {
    const { _id } = this.props.match.params;

    this.props.deletePost(_id, () => {
      this.props.history.push("/");
    });
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <ul>
          <h1>Stats</h1>
          <li className="list-group-item" key={post._id}>
            Exercise: {post.exercise}
          </li>
          <li className="list-group-item"> Weight: {post.weight}</li>
          <li className="list-group-item"> Reps: {post.reps}</li>
          <Link to="/" className="btn btn-danger">
            Go Back
          </Link>
        </ul>
      );
    });
  }

  render() {
    const { posts } = this.props;
    if (!posts) {
      return <div>loading...</div>;
    }
    return (
      <div>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          {" "}
          Delete Post{" "}
        </button>
        <div>{this.renderPosts()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPost, fetchPosts, deletePost })(
  PostsShow
);
