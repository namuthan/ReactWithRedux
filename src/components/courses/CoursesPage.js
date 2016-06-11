import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      course: {title: ""}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave() {
    //fire up an action
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }
  render() {
    //debugger;
    return (
      <div className="jumbotron">
        <h1>Courses Page</h1>
        <p> This is the Courses Page </p>
        {this.props.courses.map(this.courseRow)}
        <input
          type="text"
          onChange={this.onTitleChange}
          value = {this.state.course.title} />

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  courses: React.PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  //debugger;
  return {
    courses: state.courses
  };
}


export default connect(mapStateToProps)(CoursesPage);
