import * as dotenv from 'dotenv';
dotenv.config();

export const DatabaseConfig = () => ({
  url: process.env.DATABASE_URL || 'mongodb://localhost:27017/mydb',
});