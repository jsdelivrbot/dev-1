import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPosts } from "../actions";

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">
          {field.meta.touched ? field.meta.error : ""}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPosts(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label="Exercise" name="exercise" component={this.renderField} />
        <Field label="Weight" name="weight" component={this.renderField} />
        <Field label="Reps" name="reps" component={this.renderField} />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  // validte the inputs from 'values'
  if (!values.exercise) {
    errors.exercise = "Enter a title!";
  }
  if (!values.weight) {
    errors.weight = "Enter some Weight";
  }
  if (!values.reps) {
    errors.reps = "Enter some Reps";
  }

  // If errors is empty, the form is fine to submit
  // If error has any properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(connect(null, { createPosts })(PostsNew));
