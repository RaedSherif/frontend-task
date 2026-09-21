import ProgressBar from "../ProgressBar/ProgressBar";
import "../Card/Card.css";
import "./ContinueCard.css";

/**
 * ContinueCard
 * A course the user can pick up again: image, title, progress and a Continue button.
 * Used in App, once for each item in continueLearning.
 *
 * Props:
 * - title (string)
 * - lessonsCompleted (number)
 * - lessonsTotal (number)
 */
function ContinueCard({ title, lessonsCompleted, lessonsTotal }) {
  return (
    <div className="card continue-card">
      <div className="thumb continue-thumb"></div>
      <div className="continue-info">
        <h3 className="continue-title">{title}</h3>
        <ProgressBar completed={lessonsCompleted} total={lessonsTotal} />
        <button className="continue-button">Continue</button>
      </div>
    </div>
  );
}

export default ContinueCard;
