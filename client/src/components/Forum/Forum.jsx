import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/styles.css';

function Forum() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editPostId, setEditPostId] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state

  const fetchPosts = async () => {
    console.log("fetchPosts function is running..."); // Debugging log
    try {
      const response = await axios.get('/api/forum/posts');
      if (Array.isArray(response.data)) {
        setPosts(response.data);
      } else {
        setPosts([]);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
      setError('Failed to fetch posts.'); // Set error message
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
      setError('Title and content are required.'); // Validate inputs
      return;
    }
    setLoading(true);
    try {
      if (editMode) {
        await axios.put('/api/forum/posts', {
          id: editPostId,
          title,
          content,
        });
        setEditMode(false);
        setEditPostId(null);
      } else {
        await axios.post('/api/forum/posts', {
          title,
          content,
          userId: 1, // Replace with actual userId
        });
      }
      setTitle('');
      setContent('');
      fetchPosts();
    } catch (error) {
      console.error('Error creating/updating post:', error);
      setError('Failed to create/update post.'); // Set error message
    } finally {
      setLoading(false);
    }
  };

  const deletePost = async (id) => {
    setLoading(true);
    try {
      await axios.delete('/api/forum/posts', { data: { id } });
      fetchPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
      setError('Failed to delete post.'); // Set error message
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
      {error && <p className="error">{error}</p>} {/* Display error message */}
      <form onSubmit={createPost}>
        <label>Enter Post Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
        />
        <label>Enter Post Content</label>
        <textarea
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="7"
          cols="90"
        ></textarea>
        <button type="submit" disabled={loading}>{editMode ? 'Update' : 'Submit'}</button>
        {loading && <p>Loading...</p>} {/* Show loading state */}
      </form>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={() => editPost(post)}>Edit</button>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Forum;