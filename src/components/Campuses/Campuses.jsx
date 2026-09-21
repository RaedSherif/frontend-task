import "../Card/Card.css";
import "./Campuses.css";

/**
 * Campuses
 * Small box with a brown button for each campus. Used once in App.
 *
 * Props:
 * - campuses (array) - list of { id, label }
 */
function Campuses({ campuses }) {
  return (
    <div className="card campuses">
      <p className="campuses-title">Campuses</p>
      {campuses.map((campus) => (
        <button key={campus.id} className="campus-button">
          {campus.label} <span>›</span>
        </button>
      ))}
    </div>
  );
}

export default Campuses;
