import axios from 'axios';

const testRegistration = async () => {
  try {
    console.log("🔍 Sending test registration request...");

    const response = await axios.post('http://localhost:5000/api/auth/register', {
      email: "testuser@example.com",
      password: "testpassword123"
    });

    console.log("✅ Registration successful!", response.data);
  } catch (error) {
    console.error("❌ Registration failed:", error.response?.data || error.message);
  }
};

testRegistration();
