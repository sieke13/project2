# **CLASSM8**

**Team Members:**

- Avendaño Calderon Juan Gerardo
- Garcia Rodríguez María Azucena
- Sanchez Valdivia Dhamar
- J. Merari.

---

## **Project Description**

CLASSM8 is a collaborative classroom management platform designed to foster interaction and streamline classroom management. The application empowers students with tools for communication, organization, and engagement through features such as announcements, assignments, and discussion boards.

---

## **User Stories**

### **Student**

- Create an account in order to access the class contents.
- Add and modify activities pertaining to the class’ calendar.
- Post questions on the classroom board.
- Reply to other students’ questions.

---

## **Features**

### **General Features**

- Secure login and user authentication.
- A responsive dashboard tailored for students.

### **Student Features**

- View classroom announcements and assignments.
- Post questions and reply to other students’ posts.
- Add and modify class calendar activities.

---

## **Acceptance Criteria**

1. The header displays class details such as the professor’s name, year, and course information.
2. Users can access the application through a unique URL.
3. Class content is restricted to authenticated users.
4. Users can post, edit, and delete their questions on the classroom dashboard.
5. Users can reply to classmates’ posts (questions).
6. Class schedules, deadlines, or events are displayed in the main page.

---

## **Technologies Used**

- **Frontend**: React, JavaScript, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL with Sequelize ORM
- **Authentication**: JSON Web Tokens (JWT)
- **Hosting**: Render
- **Version Control**: Git, GitHub

---

## **Setup Instructions**

### **Backend**

1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and configure the following variables:
   ```plaintext
   DB_NAME=your_database_name
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_HOST=localhost
   JWT_SECRET=your_jwt_secret
   ```
4. Run database migrations:
   ```bash
   npx sequelize-cli db:migrate
   ```
5. Start the backend server:
   ```bash
   npm start
   ```

### **Frontend**

1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and set the API URL:
   ```plaintext
   REACT_APP_API_URL=http://localhost:5000/api
   ```
4. Start the frontend development server:
   ```bash
   npm start
   ```

---

## **How to Contribute**

1. Fork the repository and clone your fork:
   ```bash
   git clone https://github.com/sieke13/project2
   ```
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your feature description"
   ```
4. Push your branch to the repository:
   ```bash
   git push -u origin feature/your-feature-name
   ```
5. Open a pull request for review.

---

## **Future Improvements**

- Implement real-time updates for the discussion board using WebSockets.
- Add a file upload feature for assignments and resources.
- Integrate calendar functionality for better scheduling of events and deadlines.

---

## **Demonstration**

Add a video link here showcasing the project features and usage.

---

## **License**

This project is licensed under the MIT License.

