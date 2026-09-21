import { useState } from "react";

/**
 * ChatGroup
 * One chat group (e.g. "Poetry") that opens and closes to show its channels.
 * Used by Chats, once for each group in the selected tab.
 *
 * Props:
 * - group (object) - { name, hasUnread, defaultExpanded, channels }
 */
function ChatGroup({ group }) {
  // the data says which groups start open
  const [isOpen, setIsOpen] = useState(group.defaultExpanded);

  return (
    <div className="chat-group">
      <button className="chat-group-header" onClick={() => setIsOpen(!isOpen)}>
        <span className="thumb chat-group-thumb"></span>
        <span className="chat-group-name">{group.name}</span>
        {group.hasUnread && <span className="chat-dot"></span>}
        <span>{isOpen ? "▴" : "▾"}</span>
      </button>

      {isOpen && (
        <ul className="chat-channels">
          {group.channels.map((channel) => (
            <li key={channel.id}>
              # {channel.name}
              {/* only show the red number if there are unread messages */}
              {channel.unreadCount > 0 && (
                <span className="chat-count">{channel.unreadCount}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ChatGroup;
