import axios from "axios";

export default async function handler(req, res) {
  const { email } = req.query;

  try {
    // Substitua pela URL real da sua API (ex: backend Spring Boot)
    const response = await axios.get(`http://127.0.0.1:8000/users/check-email`, {
      params: { email },
    });

    console.log('response');
    console.log(response.data);

    // Suponha que a API responda com: { exists: true/false }
    const exists = response.data.exists;

    res.status(200).json({ exists });
  } catch (error) {
    console.error("Erro ao verificar email:", error.message);
    res.status(500).json({ error: "Erro ao verificar e-mail" });
  }
}