# MCQ Questionare

Welcome to my semester project developed for the software design competition module. This application facilitates a user login followed by multiple-choice questions (MCQs).
After completion of the MCQs, the application provides feedback based on the user's answers.

## Technologies Used

- Backend: [Spring boot]
- Frontend: [Vite.js]
- Database: [MySQL]

## API Endpoints

- `GET /questions/{q_number}`: Get the question.
- `GET /v2/appointmentOptions`: Retrieve available appointment options with advanced querying.
- `GET /appointmentSpecialty`: Retrieve available appointment specialties.
- `GET /bookings`: Retrieve bookings for a user.
- `GET /bookings/:id`: Retrieve a specific booking by ID.
- `POST /bookings`: Create a new booking.
- `GET /jwt`: Generate a JWT for a user.
- `GET /users`: Retrieve all users.
- `POST /users`: Create a new user.
- `GET /users/admin/:email`: Check if a user is an admin.
- `PUT /users/admin/:id`: Promote a user to admin.
- `POST /doctors`: Add a new doctor (admin only).
- `GET /doctors`: Retrieve all doctors (admin only).
- `DELETE /doctors/:id`: Delete a doctor (admin only).
- `POST /create-payment-intent`: Create a payment intent for booking.
- `POST /payments`: Process a payment for a booking.

