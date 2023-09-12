import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavBar from "./pages/component/NavBar";
import FooterSection from "./pages/component/FooterSection";
import Home from "./pages/HomePage";
import MembershipForm from "./pages/MembershipPage";
import SessionForm from "./pages/SessionPage";
import FaqPage from "./pages/FaqPage";
import PolicyPage from "./pages/PolicyPage";
import TermsPage from "./pages/TermsPage";
import TermsWebPage from "./pages/TermsWebPage";
import TermsMemberPage from "./pages/TermsMemberPage";
import TermsLaborPage from "./pages/TermsLaborPage";
import ContactPage from "./pages/ContactPage";
import JoinPage from "./pages/JoinPage";
import JoinPage1 from "./pages/JoinPage1";
import JoinPage2 from "./pages/JoinPage2";
import MemberContactPage from "./pages/MemberContactPage";

export const Routing = () => {
  return (
    <Router basename="/reactapp">
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/membershipform" element={<MembershipForm />} />
        <Route path="/home/sessionform" element={<SessionForm />} />
        <Route path="/home/faq" element={<FaqPage />} />
        <Route path="/home/policy" element={<PolicyPage />} />
        <Route path="/home/terms" element={<TermsPage />} />
        <Route path="/home/terms/website" element={<TermsWebPage />} />
        <Route path="/home/terms/member" element={<TermsMemberPage />} />
        <Route path="/home/terms/labor" element={<TermsLaborPage />} />
        <Route path="/home/contact" element={<ContactPage />} />
        <Route path="/home/join" element={<JoinPage />} />
        <Route path="/home/join/member" element={<JoinPage1 />} />
        <Route path="/home/join/session" element={<JoinPage2 />} />
        <Route path="/home/membercontact" element={<MemberContactPage />} />
      </Routes>
      <FooterSection />
    </Router>
  );
};