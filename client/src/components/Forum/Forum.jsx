import axios from "axios";
import CommentForm from "../CommentForm/CommentForm"; 
import CommentList from "../CommentList/CommentList";
import "../../styles/styles.css";
import { useEffect, useState } from "react";

function Forum() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editPostId, setEditPostId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/forum/posts");
      setPosts(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setError("Failed to fetch posts.");
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      setError("Title and content are required.");
      return;
    }
    setLoading(true);
    try {
      if (editMode) {
        await axios.put(`/api/forum/posts/${editPostId}`, { title, content });
        setEditMode(false);
        setEditPostId(null);
      } else {
        await axios.post("/api/forum/posts", { title, content, userId: 1 });
      }
      setTitle("");
      setContent("");
      fetchPosts();
    } catch (error) {
      console.error("Error creating/updating post:", error);
      setError("Failed to create/update post.");
    } finally {
      setLoading(false);
    }
  };

  const deletePost = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`/api/forum/posts/${id}`);
      fetchPosts();
    } catch (error) {
      console.error("Error deleting post:", error);
      setError("Failed to delete post.");
    } finally {
      setLoading(false);
    }
  };

  const editPost = (post) => {
    setTitle(post.title);
    setContent(post.content);
    setEditMode(true);
    setEditPostId(post.id);
  };

  return (
    <div>
      <h2>Have a question? Let's get started by making a post.</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={createPost}>
        <label>Enter Post Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Enter Post Content</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} rows="7" cols="90"></textarea>
        <button type="submit" disabled={loading}>{editMode ? "Update" : "Submit"}</button>
        {loading && <p>Loading...</p>}
      </form>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={() => editPost(post)}>Edit</button>
            <button onClick={() => deletePost(post.id)}>Delete</button>
            <CommentForm postId={post.id} onCommentAdded={() => window.location.reload()} />
            <CommentList postId={post.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Forum;
