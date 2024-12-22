export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { email } = req.body;
  
      try {
        const response = await fetch('http://127.0.0.1:8085/users/?email=${encodeURIComponent(email)}', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
  
        const data = await response.json();
  
        if (!response.ok) {
          return res.status(response.status).json({ message: data.message });
        }
  
        res.status(201).json({ message: 'User created successfully' });
      } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  