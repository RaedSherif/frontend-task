import ProgressBar from "../ProgressBar/ProgressBar";

/**
 * CourseRow
 * One row of the My Courses table: course name, progress, status and a button.
 * Used by CoursesTable, once per course.
 *
 * Props:
 * - course (object) - { title, campusLabel, lessonsCompleted, lessonsTotal, status }
 */

// text to show for each status in the data
const statusText = {
  in_progress: "In Progress",
  completed: "Completed",
  not_started: "Not Started",
};

function CourseRow({ course }) {
  // Figma shows "View" on finished courses and "Continue" on active ones.
  // Assumption: not_started courses also get "Continue" since there's
  // nothing to view yet. Worth confirming with the designer.
  const isCompleted = course.status === "completed";

  return (
    <tr>
      <td>
        <div className="course-name">
          <div className="thumb"></div>
          <div>
            <p>{course.title}</p>
            <p className="course-campus">{course.campusLabel}</p>
          </div>
        </div>
      </td>
      <td className="course-progress">
        <ProgressBar completed={course.lessonsCompleted} total={course.lessonsTotal} />
      </td>
      <td>
        {/* the status is also used as the class name, so each one gets its own colour */}
        <span className={"status " + course.status}>{statusText[course.status]}</span>
      </td>
      <td>
        <button className={isCompleted ? "course-button view" : "course-button"}>
          {isCompleted ? "View" : "Continue"}
        </button>
      </td>
    </tr>
  );
}

export default CourseRow;
