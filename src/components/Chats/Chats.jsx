import { useState } from "react";
import Card from "../Card/Card";
import ChatGroup from "./ChatGroup";
import "./Chats.css";

/**
 * Chats
 * Chat list with tabs at the top (English, Science). Used once in App.
 * Clicking a tab shows only the groups that belong to that tab.
 *
 * Props:
 * - tabs (array) - list of { id, label }
 * - groups (array) - chat groups, each one has a tabId saying which tab it's in
 */
function Chats({ tabs, groups }) {
  // start on the first tab
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const groupsInTab = groups.filter((group) => group.tabId === activeTab);

  return (
    <Card title="Chats" link="View all Chats">
      <div className="chat-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={tab.id === activeTab ? "chat-tab active" : "chat-tab"}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {groupsInTab.map((group) => (
        <ChatGroup key={group.id} group={group} />
      ))}
    </Card>
  );
}

export default Chats;
