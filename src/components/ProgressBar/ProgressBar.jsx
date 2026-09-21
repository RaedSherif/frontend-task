import "./ProgressBar.css";

/**
 * ProgressBar
 * Shows "22/44 lessons" and the percentage, with a green bar under it.
 * Used in ContinueCard and CourseRow.
 *
 * Props:
 * - completed (number) - lessons done
 * - total (number) - total lessons in the course
 */
function ProgressBar({ completed, total }) {
  // work out the percentage from the numbers instead of hard coding it
  const percent = Math.round((completed / total) * 100);

  return (
    <div className="progress">
      <div className="progress-text">
        <span>
          {completed}/{total} lessons
        </span>
        <span>{percent}%</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: percent + "%" }}></div>
      </div>
    </div>
  );
}

export default ProgressBar;
