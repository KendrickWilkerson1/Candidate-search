import { useState, useEffect } from "react";
import { searchGithub } from "../api/API";
import CandidateCard from "../components/candidate-card/CandidateCard";
import Button from "../components/buttons/Button";
import Candidate from "../interfaces/Candidate.interface";
import "../styles/candidateSearch.css";

const CandidateSearch = () => {
  const [githubUsers, setGithubUser] = useState<Candidate[]>([])
  const [githubUserIndex, setGithubUserIndex] = useState(0)
  useEffect(() => {
    console.log('localStorage', localStorage.getItem('potentialCandidates'))
    searchGithub().then((users) => {
      for(const user of users) {
      const {login, username, location, avatar_url, email, company, bio} = user
      const newUser: Candidate = {name: login, username: username || 'unknown', location: location || 'unknown', avatar: avatar_url, email: email || 'unknown', company: company || 'unknown', bio: bio || 'bio'}
      setGithubUser(prev => [...prev,newUser])
      }
      
    })
  }, [])

  const viewNextCandidate = () => {
    setGithubUserIndex(prev => prev+1)
  }

  const addToPotentialCandidates = () => {
    const potentialCandidates = JSON.parse(localStorage.getItem('potentialCandidates') || '[]')
    
    potentialCandidates.push(githubUsers[githubUserIndex])
    localStorage.setItem('potentialCandidates', JSON.stringify(potentialCandidates))  
    viewNextCandidate()
  }

  return (
    <div className="container">
      <h1>Candidate Search</h1>
      <div>
      { githubUsers.length > 0 && <CandidateCard user={githubUsers[githubUserIndex]} />}
        <div className="buttons">
          <Button minus onClick={viewNextCandidate}/>
          <Button onClick={addToPotentialCandidates}/>
        </div>
      </div>
    </div>
  );
};

export default CandidateSearch;
