import Card from "../Card/Card";
import CourseRow from "./CourseRow";
import "./CoursesTable.css";

/**
 * CoursesTable
 * The "My Courses" table. Used once in App.
 * In the Figma file this table is made of 4 separate columns, here it's a normal
 * table where each course is one row (CourseRow), so it works with any number of courses.
 *
 * Props:
 * - courses (array) - the courses from the data
 */
function CoursesTable({ courses }) {
  return (
    <div>
      <h2 className="courses-heading">My Courses</h2>
      <Card>
        <table className="courses-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>Progress</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <CourseRow key={course.id} course={course} />
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

export default CoursesTable;
