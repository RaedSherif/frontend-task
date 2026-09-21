import { useState } from "react";
import "./App.css";
import data from "../dashboard-data.json";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import Campuses from "./components/Campuses/Campuses";
import ContinueCard from "./components/ContinueCard/ContinueCard";
import CoursesTable from "./components/CoursesTable/CoursesTable";
import HoursChart from "./components/HoursChart/HoursChart";
import Announcements from "./components/Announcements/Announcements";
import Chats from "./components/Chats/Chats";

/**
 * App
 * The dashboard page. Loads the data from dashboard-data.json and
 * passes each part of it to the component that shows it.
 */
function App() {
  // whether the menu is open on mobile
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Sidebar links={data.navigation} isOpen={menuOpen} />

      <div className="page">
        <Header userName={data.user.name} onMenuClick={() => setMenuOpen(!menuOpen)} />

        <div className="columns">
          {/* left column */}
          <div className="column-left">
            <Welcome name={data.user.name} quote={data.user.greetingQuote} />

            <div className="learning-row">
              <Campuses campuses={data.campuses} />
              {/* this row scrolls sideways if there are more cards than fit */}
              <div className="continue-list">
                {data.continueLearning.map((course) => (
                  <ContinueCard
                    key={course.id}
                    title={course.title}
                    lessonsCompleted={course.lessonsCompleted}
                    lessonsTotal={course.lessonsTotal}
                  />
                ))}
              </div>
            </div>

            <CoursesTable courses={data.courses} />
          </div>

          {/* right column */}
          <div className="column-right">
            <HoursChart data={data.hoursSpent} />
            <Announcements announcements={data.announcements} />
            <Chats tabs={data.chats.tabs} groups={data.chats.groups} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
