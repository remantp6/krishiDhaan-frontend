# KrishiDhaan

This web application serves as a final year project, leveraging advanced technologies to diagnose rice leaf diseases. It integrates modern frontend frameworks, backend services, and machine learning models to provide accurate and user-friendly diagnostics.

## Features

- **User Authentication**: Implemented secure user authentication using REST API to manage user sessions.
- **Protected Routes**: Restricted access to specific parts of the application to authenticated users only.
- **Persistent User Data**: Used cookies to retain user profile information across sessions.
- **User History**: Tracked and displayed the history of rice leaf diagnosis for each user.
- **Image Classification**: Utilized a pre-trained and fine-tuned VGG16 model to classify rice leaf images.
- **Diagnosis Confidence**: Provided users with the confidence percentage of each diagnosis.
- **Recommendations**: Suggested solutions based on the model’s predictions.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: REST API, Django
- **Authentication**: JWT (JSON Web Tokens)
- **Database**: MySQL
- **Machine Learning Model**: VGG16 (Fine-tuned)

## Folder structure
  ```
  |-src
  |-assets/
  |-auth/
  |-components/
  |-pages/
  |-utils
  |-validation-schemas/
  ```
