import './App.css';
import './styles/home.css';

import HistoryTable from './components/history-table';
import LiveTable from './components/live-table';

function App() {
  return (
    <div className="App"> 
      <div className="dashboard">
        <h1>Customer Traffic Dashboard</h1>
        <div className="table-container">
          <div className="table-section">
            <h2>Live Customer Table</h2>
            <LiveTable />
          </div>
          <div className="table-section">
            <h2>Customer Traffic (Last 24 hours)</h2>
            <HistoryTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
