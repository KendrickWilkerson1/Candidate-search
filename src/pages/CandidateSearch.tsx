import { useState, useEffect } from "react";
import { searchGithub, searchGithubUser } from "../api/API";
import CandidateCard from "../components/candidate-card/CandidateCard";
import "../styles/candidateSearch.css";

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
const CandidateSearch = () => {
  return (
    <div className="container">
      <h1>Candidate Search</h1>
      <div>
        <CandidateCard user={dummyUser} />
        <div className="buttons">
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default CandidateSearch;
