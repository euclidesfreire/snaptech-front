import jwt from 'jsonwebtoken';

const SECRET_KEY = 'ae36c9a5d8e9cfc9026a34378e4a76ef1a892bc7d5ffb76e3c407ddc5db47a3a';

export default async function handler(req, res) {
  const { authToken } = req.cookies;

  if (!authToken) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  try {
    // Verifica token localmente
    const decoded = jwt.verify(authToken, SECRET_KEY);

    // Ou verifica token no backend
    // const response = await fetch('https://api-backend.example.com/verify', {
    //   method: 'POST',
    //   headers: { 'Authorization': `Bearer ${authToken}` },
    // });
    // if (!response.ok) throw new Error('Invalid token');

    res.status(200).json({ username: decoded.username });
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
}
