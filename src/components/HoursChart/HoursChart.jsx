import Card from "../Card/Card";
import "./HoursChart.css";

/**
 * HoursChart
 * Bar chart of hours spent each day. Used once in App.
 * The bars are just divs, their height is the hours as a percentage of axisMax.
 *
 * Props:
 * - data (object) - hoursSpent from the data: { total, totalLabel, axisMax, days }
 */
function HoursChart({ data }) {
  const days = data.days;

  return (
    <Card>
      <p className="hours-total">{data.total}</p>
      <p className="hours-label">{data.totalLabel}</p>

      <div className="hours-chart">
        <div className="hours-axis">
          <span>{data.axisMax}</span>
          <span>{data.axisMax / 2}</span>
          <span>0</span>
        </div>
        {days.map((day) => (
          <div
            key={day.label}
            className="hours-bar"
            style={{ height: (day.hours / data.axisMax) * 100 + "%" }}
            title={day.label + ": " + day.hours + " hours"}
          ></div>
        ))}
      </div>

      {/* the design only shows the first and last day under the chart */}
      <div className="hours-days">
        <span>{days[0].label}</span>
        <span>{days[days.length - 1].label}</span>
      </div>
    </Card>
  );
}

export default HoursChart;
