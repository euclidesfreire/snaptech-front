export default function RecommendedNews({ posts }) {
  return (
    <section className="recommended-news">
      <h2>Recommended News</h2>
      <div className="grid">
        {posts.map((post) => (
          <article key={post.id} className="card">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </article>
        ))}
      </div>

      <style jsx>{`
        .recommended-news {
          margin-bottom: 2rem;
        }
        h2 {
          color: #ffffff;
          font-size: 1.5rem;
          margin-bottom: 3rem;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1rem;
        }
        .card {
          background: #111;
          border: 1px solid #00aaff;
          border-radius: 8px;
          padding: 1rem;
          color: #ddd;
          transition: transform 0.2s;
        }
        .card:hover {
          transform: scale(1.02);
          border-color: #fff;
        }
        h3 {
          color: #00aaff;
          margin-bottom: 0.5rem;
        }
      `}</style>
    </section>
  );
}
