// pages/api/news.js
import axios from 'axios';

export default async function handler(req, res) {
  try {
    const { email } = req.body;

    const response = await axios.get(`http://127.0.0.1:8000/recommendations`, {
      params: { email },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Erro ao buscar dados do backend:', error);
    res.status(500).json({ error: 'Erro ao buscar dados' });
  }
}
