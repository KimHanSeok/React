import jwt from 'jsonwebtoken';
import { config } from '../config.js';
import * as userRepository from '../repository/userRepository.js';

const AUTHENTICATION_ERROR = { message: 'Authentication Error' };

export const isAuth = async (request, response, next) => {
  const authHeader = request.get('Authorization');

  if(!(authHeader && authHeader.startsWith('Bearer'))) {
    return response.status(401).json(AUTHENTICATION_ERROR);
  }

  const token = authHeader.split(' ')[1];
  jwt.verify(token, config.jwt.secretKey, async (error, decoded) => {
    if(error) {
      return response.status(401).json(AUTHENTICATION_ERROR);
    }

    const user = await userRepository.findById(decoded.id);

    if(!user) {
      return response.status(401).json(AUTHENTICATION_ERROR);
    }

    request.userId = user.id;
    next();
  });
}