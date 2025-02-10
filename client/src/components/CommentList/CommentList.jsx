import { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/comments.css";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]); 
  const [error, setError] = useState(null);

  const fetchComments = async () => {
    try {
      const res = await axios.get(`/api/comments/${postId}`);
      console.log("Fetched Comments:", res.data); 
      if (Array.isArray(res.data)) {
        setComments(res.data);
      } else {
        setComments([]); 
      }
    } catch (err) {
      console.error("Error fetching comments:", err);
      setError("Failed to load comments");
    }
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  if (error) return <p className="error">{error}</p>;

  return (
    <div>
      <h4>Comments</h4>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        comments.map((comment) =>
          comment && comment.text ? (
            <p key={comment.id}>{comment.text}</p>
          ) : null
        )
      )}
    </div>
  );
};

export default CommentList;

