import React, { useState, useEffect } from "react";
import "./styles/Faq.css";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const Faq = () => {
  const [faqs, setFaqs] = useState([]);
  const [question, setQuestion] = useState("");
  const [votes, setVotes] = useState({});
  useEffect(() => {
    // Fetch data from the API
    fetch("https://sheetdb.io/api/v1/ti3l4g7ba9dfp")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFaqs(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const readFaq = () => {
    fetch("https://sheetdb.io/api/v1/ti3l4g7ba9dfp")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFaqs(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };
  const handleVote = (id, voteType) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [id]: prevVotes[id] === voteType ? null : voteType,
    }));
  };

  const getVoteCount = (id) => {
    const voteCount = faqs.reduce((count, faq) => {
      if (faq.id === id && votes[faq.id] === "upvote") {
        return count + 1;
      } else if (faq.id === id && votes[faq.id] === "downvote") {
        return count - 1;
      }
      return count;
    }, 0);

    return voteCount;
  };

  const handleAddFaq = (e) => {
    e.preventDefault();
    if (question) {
      let num = faqs.length + 1;
      let newfaq = [
        {
          id: num.toString(),
          question: question,
          answer: "Not Answered Yet",
          votes: "0",
        },
      ];
      fetch("https://sheetdb.io/api/v1/ti3l4g7ba9dfp", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: newfaq,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          readFaq();
        })
        .catch((error) => console.error("Error storing data:", error));

      setQuestion("");
    }
  };

  return (
    <div className="faq-page">
      <h1 className="header">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq) => (
          <div key={faq.id} className="faq-item">
            <h3 className="question">{faq.question}</h3>
            <p className="answer">{faq.answer}</p>
            <span className="votes">
              {parseInt(faq.votes) + getVoteCount(faq.id)}
            </span>

            <div className="vote-buttons">
              <button
                className={`upvote-button ${
                  votes[faq.id] === "upvote" ? "active" : ""
                }`}
                onClick={() => handleVote(faq.id, "upvote")}
              >
                <FaThumbsUp />
              </button>
              <button
                className={`downvote-button ${
                  votes[faq.id] === "downvote" ? "active" : ""
                }`}
                onClick={() => handleVote(faq.id, "downvote")}
              >
                <FaThumbsDown />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add your own FAQ form */}
      <div className="add-faq-form">
        <h3>Add Your Own FAQ</h3>
        <form onSubmit={handleAddFaq}>
          <label htmlFor="question">Question:</label>
          <textarea
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Faq;