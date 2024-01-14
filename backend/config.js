import dotenv from "dotenv";
export const PORT = 5555;

dotenv.config();

const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

export const mongoDB_URL =
  `mongodb+srv://${username}:${password}@book-store-mern.zwgqqcb.mongodb.net/?retryWrites=true&w=majority`;

// Please create a free database for yourself.

// This
