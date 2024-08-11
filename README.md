Features of app-
1.Create Note: Create a new note with a title and body.
2.Fetch Note by ID: Fetch a note using its primary key (ID).
3.Query Notes by Title Substring: Query notes based on a substring in the title.
4.Update Note: Update the title and body of an existing note by its ID.

----------------------------------
Technologies Used-
1.Node.js: JavaScript runtime for the backend.
2.Express: Web framework for building RESTful APIs.
3.MongoDB: NoSQL database to store notes.
4.Mongoose: ODM for MongoDB.

---------------------------------
Prerequisites-
1.Node.js (v16 or higher)
2.npm (v7 or higher)
3.MongoDB Atlas or a local MongoDB instance

-----------------------------------
Installation-
1. Clone Repo:
   git clone repo_url
2. Run below command in terminal for install dependencies:
   npm install
   npm install express mongoose dotenv

-----------------------------------
Environment Variables:
Create a .env file in the root directory of the project with the following environment variables:
MONGO_URI="mongo db url"

------------------------------------
To start the application, run:
Type in terminal: node server.js

--------------------------------------
API Endpoints:
1. POST: http://localhost:3000/api/notes
Create a new note.
Sample body:
{
  "title": "Sample Note",
  "body": "This is the body of the sample note."
}
2.GET: http://localhost:3000/api/notes/:id
Fetch a note by its ID.
3.GET: http://localhost:3000/api/notes?title=<substring>
Query notes by a title substring.
4.PUT: http://localhost:3000/api/notes/

Update an existing note by its ID.
req Body:
{
  "title": "Updated Note Title",
  "body": "This is the updated body of the note."
}


