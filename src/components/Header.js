export default function Header({ search, setSearch }) {
  return (
    <header className="header">
      <h1>SnapTech</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Pesquise mais sobre tecnologia"
      />

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
      `}</style>
    </header>
  );
}
