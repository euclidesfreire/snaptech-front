import jwt from 'jsonwebtoken';

const SECRET_KEY = 'ae36c9a5d8e9cfc9026a34378e4a76ef1a892bc7d5ffb76e3c407ddc5db47a3a';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;
    const url = `http://127.0.0.1:8085/login/?email=${encodeURIComponent(email)}`;

    console.error('email:', email);
    console.error('URL:', url);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        return res.status(response.status).json({ message: data.message });
      }

      // Processar os dados retornados da API (id e email do usuário)
      const { id, email } = data;

      // Gerar o token JWT
      const token = jwt.sign({ id, email }, SECRET_KEY, { expiresIn: '24h' });

      // Salve o token no cookie
      res.setHeader(
        'Set-Cookie',
        `authToken=${token}; Path=/; HttpOnly; Max-Age=3600;`
      );

      res.status(200).json({ message: 'Logged in successfully' });
    } catch (error) {
      console.error('Erro de rede:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
