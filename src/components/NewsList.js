import { useState } from 'react';

export default function NewsList({ posts }) {
  return posts.length > 0 ? (
    <ul className="news-list">
      {posts.map((post, index) => (
        <NewsItem key={index} post={post} />
      ))}

      <style jsx>{`
        .news-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
      `}</style>
    </ul>
  ) : (
    <p>No news available.</p>
  );
}

function NewsItem({ post }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <li className="news-item">
      <h2 className="news-title">{post.title}</h2>
      {/*<small>{new Date(post.publishedAt).toLocaleDateString()}</small>*/}
      <p className="news-summary">{post.description}</p>
      <p  className="link-site">
        <a href={post.link}>Saiba mais</a>
      </p>
      <div className="news-actions">
        <button onClick={handleLike} className="like-button">
          Gostei {post.like_by_users}
        </button>
        <button onClick={handleLike} className="no-like-button">
          Não Gostei {post.dislike_by_users}
        </button>
      </div>

      <style jsx>{`
        .news-item {
          margin-bottom: 2rem;
          padding: 1.5rem;
          background-color: #161b22;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .news-title {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: #ffffff;
        }
        .news-summary {
          font-size: 1rem;
          margin-bottom: 0.5rem;
          color: #ddd;
        }
        .link-site {
          font-size: 1rem;
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .news-actions {
          display: flex;
          justify-content: flex-start;
        }
        .like-button {
          background-color: #2f81f7;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .like-button:hover {
          background-color: #0056b3;
        }
        .no-like-button {
          background-color: #342720;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 0.5rem 1rem;
          margin-left: 0.2rem;
          font-size: 0.9rem;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .no-like-button:hover {
          background-color: #190E07;
        }
      `}</style>
    </li>
  );
}
