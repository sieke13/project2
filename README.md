# **CLASSM8**

## **Team Members:**
- Avendaño Calderon Juan Gerardo  
- Garcia Rodríguez María Azucena  
- Sanchez Valdivia Dhamar  
- Garcia J. Merari  

---

## **Project Description**

CLASSM8 is a collaborative classroom management platform designed for both teachers and students. The application streamlines class communication and enhances learning experiences through interactive features such as announcements, assignments, and a discussion board.

---

## **User Stories**

### **Student**
- Create an account to access class content.
- Ask questions on the classroom board.
- Reply to other students’ questions.

---

## **Features**

### **General**
- A responsive dashboard for students.
- User authentication to control access to class materials.

### **Student Features**
- Access classroom announcements and assignments.
- Post and reply to questions on the classroom board.
- Retrieve additional information from Wikipedia for amplified context.

---

## **Acceptance Criteria**

1. The application is accessible via a unique URL.
2. Class content and information are accessible only after logging in.
3. Users can post, edit, or delete questions on the classroom's main dashboard.
4. Users can connect to Wikipedia to amplify information and references.

---

## **Technologies Used**

### **Backend (Server) Dependencies**
- bcrypt
- cors
- dotenv
- express
- jsonwebtoken
- pg
- pg-hstore
- sequelize

### **Frontend (Client) Dependencies**
- axios
- react
- react-dom
- react-router-dom

### **Dev Dependencies**
- vite

### **Root Dependencies**
- concurrently

### **Full Project Management**
- **Git & GitHub**: Version control system.
- **Wikipedia API**: Fetching external data for knowledge enhancement.
- **Hosting**: Render.

---

## **Setup Instructions**

### **Backend (Server) Setup**
1. Navigate to the `server` folder:
   ```bash
   cd server
   ```
2. Initialize a new Node.js project:
   ```bash
   npm init -y
   ```
3. Install dependencies:
   ```bash
   npm install express sequelize pg pg-hstore dotenv jsonwebtoken bcrypt cors
   ```
4. Install development dependencies:
   ```bash
   npm install --save-dev nodemon
   ```
5. Create a `.env` file and add the following environment variables:
   ```plaintext
   DB_NAME=classm8_db
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_HOST=localhost
   JWT_SECRET=your_jwt_secret
   ```
6. Start the backend server:
   ```bash
   npm start
   ```

### **Frontend (Client) Setup**
1. Navigate to the `client` folder:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install react react-dom react-router-dom
   ```
3. Install additional dependencies:
   ```bash
   npm install axios
   ```
4. Initialize TypeScript compilation:
   ```bash
   npx tsc
   ```
5. Set environment options:
   ```bash
   export NODE_OPTIONS=--openssl-legacy-provider
   ```
6. Install JWT decode package:
   ```bash
   npm install jwt-decode
   ```
7. Ensure all dependencies are installed:
   ```bash
   npm i
   ```
8. Create a `.env` file and add the following variable:
   ```plaintext
   REACT_APP_API_URL=http://localhost:5000/api
   ```
9. Start the frontend development server:
   ```bash
   npm start
   ```

---

## **How to Contribute**

1. Clone the repository:
   ```bash
   git clone https://github.com/sieke13/project2
   ```
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Push your branch and create a pull request:
   ```bash
   git push -u origin feature/your-feature-name
   ```

---

## **Future Development**
### Feature Enhancements
- Add user roles (admin, regular users).
- Implement a user profile page for updating personal details.
- Add real-time updates to the classroom board using WebSockets.
- Allow file uploads for assignments.
- Enable calendar integration for deadlines and events.

### Security Upgrades
- Use HTTP-only cookies for secure token storage.
- Add rate limiting to prevent brute force attacks.

### UI/UX Improvements
- Enhance dashboard responsiveness and user experience.

### Testing & Deployment
- Write unit and integration tests using Jest or Supertest.
- Deploy to a scalable production environment (AWS, Heroku, or Render).
- Optimize for scalability with **Docker and cloud databases**.

---

## **Links**
- **GitHub Repository:** [Project Link](https://github.com/sieke13/project2)
- **Deployed Application:** [Classm8 on Render](https://project2-at1r.onrender.com)
- **Demo Video:** _Coming Soon_

---

## **License**

This project is licensed under the MIT License.

---

## **Video Demonstration**

Placeholder for the project demonstration video. Add the video link here once it's ready.
