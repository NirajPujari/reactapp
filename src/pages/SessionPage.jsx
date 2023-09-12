import SessionList from "./component/SessionList";
import "./component/styles/Form.css";

function Session() {
  return (
    <div className="Session">
      <div className="Session-container">
        <SessionList />
      </div>
    </div>
  );
}

export default Session;