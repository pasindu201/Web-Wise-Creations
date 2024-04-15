# MCQ Questionare

Welcome to my semester project developed for the software design competition module. This application facilitates a user login followed by multiple-choice questions (MCQs).
After completion of the MCQs, the application provides feedback based on the user's answers.

## Technologies Used

- Backend: [Spring boot]
- Frontend: [Vite.js]
- Database: [MySQL]

## API Endpoints

- `GET /questions/{q_number}`: Get the question.
- `POST /upload_questions`: Upload list of questions to the database.
- `POST /updateAnswer`: upload user answer.
- `GET /result/{userIndex}`: get result of a user.
- `GET /numberOfQuestions`: get Total number of questions.


