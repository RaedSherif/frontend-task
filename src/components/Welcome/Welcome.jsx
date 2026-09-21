import Card from "../Card/Card";
import "./Welcome.css";

/**
 * Welcome
 * "Welcome back" message with the user's quote. Used once at the top of App.
 *
 * Props:
 * - name (string) - the user's name
 * - quote (string) - the quote shown under the heading
 */
function Welcome({ name, quote }) {
  return (
    <Card>
      <h2 className="welcome-title">Welcome back, {name}</h2>
      <p className="welcome-quote">"{quote}"</p>
    </Card>
  );
}

export default Welcome;
