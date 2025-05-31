export default function RecommendedNews({ posts }) {
  console.log(posts);
  console.log(posts);
  return (
    <section className="recommended-news">
      {posts && posts.length > 0  ? (

      <h2>Para você </h2>

      ) : (
        <></>
      )}
      <div className="grid">
        {posts.map((post) => (
          <article key={post.id} className="card">
            <img src={post.image_url} alt={post.title} />
            <div className="content">
              <h3>{post.title}</h3>
              <p>{post.description.substring(0, 100)}...</p>
            </div>
          </article>
        ))}
      </div>

      <style jsx>{`
        .recommended-news {
          margin-bottom: 2rem;
        }
        h2 {
          color: #ffffff;
          font-size: 2rem;
          margin-bottom: 3rem;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1rem;
        }
        .card {
          border: 1px solid #4B535E;
          border-radius: 8px;
          padding: 1rem;
          color: #ddd;
          transition: transform 0.2s;
        }
        .card:hover {
          transform: scale(1.02);
          border-color: #fff;
        }
        img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }
        .content {
          padding: 1rem;
        }
        h3 {
          color: #ffffff;
          margin-bottom: 0.5rem;
        }
      `}</style>
    </section>
  );
}
