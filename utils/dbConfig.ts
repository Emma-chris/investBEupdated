import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const url: string = "mongodb://127.0.0.1:27017/investBE";

export const dbConfig = async () => {
  try {
    await connect(url).then(() => {
      console.clear();
      console.log("Connected to MongoDB ❤️❤️🚀🚀🎮🎮");
    });
  } catch (error) {
    console.log(error);
  }
};
