import Card from "../Card/Card";
import "./Announcements.css";

/**
 * Announcements
 * List of the latest announcements. Used once in App.
 * The design only shows 2, so only the first 2 are shown and the rest
 * would be on the "View all" page.
 *
 * Props:
 * - announcements (array) - list of { id, title, body }
 */
function Announcements({ announcements }) {
  return (
    <Card title="Announcements" link="View all">
      {announcements.slice(0, 2).map((item) => (
        <div key={item.id} className="announcement">
          <div className="thumb"></div>
          <div>
            <h3 className="announcement-title">{item.title}</h3>
            <p className="announcement-body">"{item.body}"</p>
          </div>
        </div>
      ))}
    </Card>
  );
}

export default Announcements;
