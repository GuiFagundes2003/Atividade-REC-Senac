import bcrypt from "bcrypt"
import { createUser } from "../models/User.js";

export const create = async (req, res) => {
    try {
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        req.body.password = hashPassword;
        const client = await createUser(req.body);
        res.status(200).send(client);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const check = async (req, res) => {
    try {
      res.status(200).json({ message: "deu bom"});
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to get states", message: error.message });
    }
  };