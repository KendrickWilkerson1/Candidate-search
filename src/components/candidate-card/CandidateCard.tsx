import React from "react";
import "../../styles/candidateCard.css";
import Candidate from "../../interfaces/Candidate.interface";
interface CandidateCardProps {
  user: Candidate;
}

const CandidateCard = ({ user }: CandidateCardProps) => {
  const { name, username, location, avatar, email, company, bio } = user;
  return (
    <div className="candidateCard">
      <img src={avatar} alt="Avatar" />
      <h1>
        {name} ({username})
      </h1>
      <p>Location: {location}</p>
      <p>Email: {email}</p>
      <p>Company: {company}</p>
      <p>Bio: {bio}</p>
    </div>
  );
};

export default CandidateCard;
