import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { config } from '../config.js';
import {} from 'express-async-errors';
import * as userRepository from '../repository/userRepository.js';

function createJwtToken(id) {
  return jwt.sign({ id }, config.jwt.secretKey, {
    expiresIn: config.jwt.expiresInSEC,
  });
}

export async function login(request, response) { // login
  const { username, password } = request.body;  
  const foundUser = await userRepository.findByUsername(username);

  if(!foundUser) {
    return response.status(401).json({ message: 'Invalid user or password...' });
  }

  const isPassword = await bcrypt.compare(password, foundUser.password);
  
  if(!isPassword) {
    return response.status(401).json({ message: 'Invalid user or password...' });
  }

  const token = createJwtToken(foundUser.id);
  
  response.status(200).json({ token, username });
}

export async function signup(request, response) { // SignUp
  const { username, name, password, email } = request.body;
  const foundUser = await userRepository.findByUsername(username);

  if(foundUser) {
    return response.status(409).json({ message: `${username} is already exist...` });
  }

  const hashedPassword = await bcrypt.hash(password, config.bcrypt.saltRounds);
  const userId = await userRepository.createUser(
    {
      username,
      name,
      password: hashedPassword,
      email,
    }
  );
  const token = createJwtToken(userId);
  
  response.status(200).json({ token, username });
}

export async function isMe(request, response) { // isMe?
  const foundUser = userRepository.findById(request.userId);

  if(!foundUser) {
    return response.status(404).json({ message: 'Cannot find user...' });
  }

  response.status(200).json({ token: request.token, username: foundUser.username });
}