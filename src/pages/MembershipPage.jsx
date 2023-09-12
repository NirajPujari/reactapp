import MembershipList from "./component/MembershipList";
import "./component/styles/Form.css";

function Membership() {
  return (
    <div className="Membership">
      <div className="Membership-container">
        <MembershipList />
      </div>
    </div>
  );
}

export default Membership;