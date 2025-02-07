Humble Superhero API
Description
This project is a simple API built with NestJS to manage superhero data, celebrating the idea that every team member is a superhero in their own way. 

The API allows users to:
Add new superheroes with their name, superpower, and humility score.
Fetch a list of superheroes ordered by their humility score.

Features
POST /superheroes: Add a new superhero.
GET /superheroes: Retrieve the list of superheroes, sorted by their humility score (highest first).

Installation
To run this project locally, follow the steps below:

Clone this repository:
git clone <repo_url>

Install dependencies:
npm install

Start the application:
npm run start

The API will be running on http://localhost:3000.

Endpoints
POST /superheroes
Request Body:
json
Copy
Edit
{
  "name": "Spider-Man",
  "superpower": "Web-slinging",
  "humilityScore": 8
}
Response:
json
Copy
Edit
{
  "name": "Spider-Man",
  "superpower": "Web-slinging",
  "humilityScore": 8
}
GET /superheroes
Response:
json
Copy
Edit
[
  {
    "name": "Spider-Man",
    "superpower": "Web-slinging",
    "humilityScore": 8
  },
  {
    "name": "Iron Man",
    "superpower": "Powered Armor",
    "humilityScore": 7
  }
]


The project is built using NestJS and is structured in a simple, maintainable manner. The focus is on clean, well-documented, and efficient code.

If I were collaborating with a teammate, I would ensure to break the task into smaller features, focusing on effective communication about the direction and approach. 
I would recommend the following improvements:

Unit Testing: Ensuring tests are written for every endpoint.
API Documentation: Using tools like Swagger for easy API documentation generation.
Authentication: Adding user authentication for adding and managing superheroes.
We would frequently sync up to share progress and share feedback on the code to ensure consistency across the project.

If I had more time, I would explore the following improvements:

Database Integration: Replace the in-memory database with a persistent solution like MongoDB or PostgreSQL.
Frontend Integration: Build a simple React interface to interact with the API and display the superheroes list.
API Rate Limiting: Implement rate limiting to prevent abuse of the API.
Validation and Error Handling: Add more comprehensive input validation and error handling.

I aimed to approach this project with clarity, humility, and communication in mind. 
I’ve ensured that all code is properly commented and documented to make it easier for others to understand and contribute to the project. 
I also made sure that my commit messages were clear and detailed, explaining the purpose behind each change.
