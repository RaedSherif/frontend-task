import "./Card.css";

/**
 * Card
 * The white box that every section of the dashboard sits in.
 * Used by almost every component on the page.
 *
 * Props:
 * - title (string, optional) - heading at the top of the card
 * - link (string, optional) - text for the small link on the right, e.g. "View all"
 * - children - the content of the card
 */
function Card({ title, link, children }) {
  return (
    <div className="card">
      {/* only show the header if the card has a title */}
      {title && (
        <div className="card-header">
          <h2>{title}</h2>
          {link && <a href="#">{link}</a>}
        </div>
      )}
      {children}
    </div>
  );
}

export default Card;
