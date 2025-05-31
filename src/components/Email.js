import { useState, useEffect } from "react";

export default function Header() {
  const [email, setEmail] = useState("");
  const [loggedInEmail, setLoggedInEmail] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const saved = localStorage.getItem("user_email");
    if (saved) setLoggedInEmail(saved);
  }, []);

  const handleLogin = async () => {
    if (!email.includes("@")) {
      alert("Email inválido");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch(`/api/check-email?email=${encodeURIComponent(email)}`);
      const data = await res.json();

      if (data.exists) {
        localStorage.setItem("user_email", email);
        setLoggedInEmail(email);
        setStatus("success");
      } else {
        alert("Email não encontrado");
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      alert("Erro na verificação");
      setStatus("error");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user_email");
    setLoggedInEmail(null);
    setEmail("");
  };

  return (
    <header className="header">
      <h1>SnapTech</h1>

      {loggedInEmail ? (
        <div className="logged-in">
          <span>Logado como <strong>{loggedInEmail}</strong></span>
          <button onClick={handleLogout}>Sair</button>
        </div>
      ) : (
        <>
        <div className="email">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email para ver suas notícias"
          />
          <button onClick={handleLogin}>Entrar</button>
          </div>
        </>
      )}

      <style jsx>{`
        .header {
          background: #161b22;
          color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
        }
        h1 {
          font-size: 1.5rem;
          color: #ffffff;
        }
        input {
          padding: 1rem;
          font-size: 1rem;
          border-radius: 8px; 
          border: 1px solid #333;
          margin-left: 1rem;
          outline: none;
          width: 100%; 
          max-width: 600px; 
          box-sizing: border-box; 
          color: #fff;
          background: #505B6C;
        }
        input::placeholder {
          color: #A5B2C5;
        }
        input:focus {
          border-color: #ffffff;
        }
        button {
          background: #238636;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 0.8rem 1.2rem;
          cursor: pointer;
        }
        .email {
          display: flex;
          align-items: center;
          width: 100%; 
          max-width: 600px; 
          gap: 1rem;
        }
        .logged-in {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
      `}</style>
    </header>
  );
}
