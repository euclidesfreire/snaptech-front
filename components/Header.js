export default function Header({ search, setSearch }) {
  return (
    <header className="header">
      <h1>SnapTech</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search news..."
      />

      <style jsx>{`
        .header {
          background: #000;
          color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          border-bottom: 2px solid #00aaff;
        }
        h1 {
          font-size: 1.5rem;
          color: #ffffff;
        }
        input {
          padding: 0.5rem;
          border-radius: 4px;
          border: 1px solid #333;
          outline: none;
          color: #fff;
          background: #222;
        }
        input::placeholder {
          color: #888;
        }
        input:focus {
          border-color: #00aaff;
        }
      `}</style>
    </header>
  );
}
