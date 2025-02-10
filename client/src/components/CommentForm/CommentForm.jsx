import { useState } from "react";
import axios from "axios";
import "../../styles/comments.css";

const CommentForm = ({ postId, onCommentAdded }) => {
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      await axios.post("/api/comments", { text, postId });
      setText("");
      onCommentAdded();
    } catch (error) {
      console.error('Error submitting comment:', error);
      setErrorMessage("Failed to submit comment. Please try again later.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a comment..."
          required
        />
        <button type="submit">Add Comment</button>
      </form>

      {/* Show error message if comment submission fails */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default CommentForm;
