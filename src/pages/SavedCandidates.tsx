import CandidateCard from "../components/candidate-card/CandidateCard";
import "../styles/savedCandidatesCard.css"

const dummyUser = {
  name: "Ken",
  username: "Ken1",
  location: "Raleigh",
  avatar:
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  email: "Ken@gmail.com",
  company: "Amazon",
  bio: "Ready to work",
};

const SavedCandidates = () => {
  return (
    <div className="savedCandidates">
      <h1>Potential Candidates</h1>
      <div>
        <CandidateCard user={dummyUser} />
      </div>
    </div>
  );
};

export default SavedCandidates;
