# 📘 Tech Quiz App (Cypress Testing Focus)

A full-stack **MERN** quiz application designed to showcase **Cypress end-to-end and component testing** in a React project. Users can take a 10-question multiple-choice quiz with randomized questions focused on front-end technologies. The app is fully tested using Cypress, with mock fixtures and detailed coverage of user flows.

---

## 🎯 Project Purpose

This project was built to **demonstrate Cypress testing practices** in a MERN application. The core focus is:

- ✅ Writing Cypress **component tests** for individual React components  
- ✅ Creating Cypress **end-to-end tests** to simulate full user flows  
- ✅ Practicing test structure, mocking API calls, and using fixtures  
- ✅ Testing asynchronous state updates and user interaction

---

## 🖼️ Screenshots

| Start Quiz Screen | In-Progress Question | Quiz Completed |
|-------------------|----------------------|----------------|
| ![Start Screen](screenshots/start-quiz.png) | ![Question](screenshots/quiz-question.png) | ![Result](screenshots/quiz-complete.png) |

> Add these screenshots in a `/screenshots` folder and update the file paths above if needed.

---

## 📽️ Walkthrough Video

Watch a complete walkthrough of the Cypress Testing:

📺 **Watch here**: [Tech Quiz App Testing Demo Walkthrough](https://www.youtube.com/watch?v=your-video-id)

---

## 🧪 Cypress Test Coverage

This app includes:

- ✅ **Component tests** for the `Quiz` component using `cy.mount()`
- ✅ **E2E tests** simulating the full quiz-taking experience
- ✅ Tests with **mocked API responses** from `mockQuestions.json`
- ✅ Test selectors using `data-cy` for robust targeting

### 📁 Test Structure

```
cypress/
├── component/
│   └── QuizComponent.cy.tsx      # Component-level tests
├── e2e/
│   └── quiz.cy.ts                # End-to-end tests
├── fixtures/
│   └── mockQuestions.json        # Mock data used in tests
```

---

## 🧰 Tech Stack

- **Frontend**: React, TypeScript  
- **Backend**: Node.js, Express  
- **Database**: MongoDB + Mongoose  
- **Testing**: Cypress (component + E2E)  
- **Fixtures**: `mockQuestions.json` for consistent test data  

---

## 🚀 Running the App

### 📦 Install Dependencies

```bash
# root
npm install
cd client && npm install
cd ../server && npm install
```

### 🏁 Start Servers

```bash
# from project root
npm run dev
```

- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5000`

---

## 🧪 Running Cypress Tests

### ▶️ Open Cypress Test Runner

```bash
npx cypress open
```

Choose either **E2E Testing** or **Component Testing** from the UI.

### 📜 Run Headlessly

```bash
npx cypress run
```

---

## 🔧 Environment Variables

Create a `.env` file in `/server`:

```
PORT=5000
MONGO_URI=mongodb+srv://your-db-connection
```

---

## 📂 Example Fixture

Located at `cypress/fixtures/mockQuestions.json`

```json
[
  {
    "_id": "1",
    "question": "What is JSX?",
    "answers": [
      { "text": "JavaScript XML", "isCorrect": true },
      { "text": "Java Syntax Exchange", "isCorrect": false },
      ...
    ]
  }
]
```

---

## 📈 Future Improvements

- Admin panel to manage questions
- Quiz difficulty levels
- User authentication & saved results
- Visual animations between quiz steps

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).