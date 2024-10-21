import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/chat">Chat</Link></li>
        <li><Link to="/activities">Activities</Link></li>
        <li><Link to="/reminders">Reminders</Link></li>
        <li><Link to="/graphs-reports">Graphs & Reports</Link></li>
        <li><Link to="/community-connection">Community Connection</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/notifications">Notifications</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/help">Help</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;

