import * as jwt from 'jsonwebtoken';

export function authenticateUser(token: string) {
  try {
    const isTokenValid = jwt.verify(token, 'jwtSecret');
    console.log(isTokenValid);
    return isTokenValid;
  } catch (error) {
    throw new Error('Authentication Invalid');
  }
}
