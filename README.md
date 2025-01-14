# **CLASSM8**

**Team Members:**
- Avendaño Calderon Juan Gerardo  
- Garcia Rodríguez María Azucena  
- Sanchez Valdivia Dhamar  
- J. Merari...

---

## **Project Description**

CLASSM8 is a collaborative classroom management platform designed for both teachers and students. The application streamlines class communication and enhances learning experiences through interactive features such as announcements, assignments, and a discussion board.

---

## **User Stories**

### **Teacher**
- Act as an administrator for the class, with the ability to remove members.
- Post announcements and assignments that students can view on their dashboards.
- Track and respond to students’ questions.

### **Student**
- Create an account to access class content.
- Ask questions on the classroom board.
- Reply to other students’ questions.

---

## **Features**

### **General**
- A responsive dashboard for teachers and students.
- User authentication to control access to class materials.
- Role-based access (Teacher or Student).

### **Teacher Features**
- Create, edit, and delete class announcements and assignments.
- View and respond to student questions.
- Manage classroom members.

### **Student Features**
- Access classroom announcements and assignments.
- Post and reply to questions on the classroom board.

---

## **Acceptance Criteria**

1. The header displays class information (e.g., professor name, year, etc.).
2. The application is accessible via a unique URL.
3. Class content and information are accessible only after logging in.
4. Users can post, edit, or delete questions on the classroom's main dashboard.
5. Professors can post class announcements.

---

## **Technologies Used**

- **Frontend**: React, JavaScript, HTML, CSS  
- **Backend**: Node.js, Express.js  
- **Database**: PostgreSQL with Sequelize ORM  
- **Authentication**: JSON Web Tokens (JWT)  
- **Hosting**: Render  
- **Other Tools**: Git, GitHub

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
3. Create a `.env` file and add the following environment variables:
   ```plaintext
   DB_NAME=your_database_name
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_HOST=localhost
   JWT_SECRET=your_jwt_secret
   ```
4. Start the backend server:
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
3. Create a `.env` file and add the following variable:
   ```plaintext
   REACT_APP_API_URL=http://localhost:5000/api
   ```
4. Start the frontend development server:
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

## **Future Improvements**
- Add real-time updates to the classroom board using WebSockets.
- Allow file uploads for assignments.
- Enable calendar integration for deadlines and events.

---

Video Demonstration

Placeholder for the project demonstration video. Add the video link here once it's ready.

---

## **License**

This project is licensed under the MIT License.

