import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import NewsList from '../components/NewsList';
import RecommendedNews from '../components/RecommendedNews';

export default function Home() {
  const [news, setNews] = useState([]);
  const [recommendedNews, setRecommendedNews] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Fetch news from a public API without token requirement
    async function fetchNews() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // Example public API
        setNews(response.data);
        setRecommendedNews(response.data.slice(0, 3)); // Mock recommended news
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    }

    fetchNews();
  }, []);

  const filteredNews = news.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <Header search={search} setSearch={setSearch} />
      <main>
        <RecommendedNews posts={recommendedNews} />
        <h1 className="recent-news">Recent News</h1>
        <NewsList posts={filteredNews} />
      </main>

      <style jsx>{`
        .container {
          background-color: #000;
          color: #fff;
          min-height: 100vh;
          padding: 0;
          margin: 0;
          font-family: Arial, sans-serif;
        }
        main {
          padding: 2rem;
        }
        .recent-news {
          color: #ffffff;
          font-size: 1.5rem;
          margin-bottom: 1rem;
          border-bottom: 2px solid #ffffff;
          padding-bottom: 0.5rem;
        }
        h1 {
          color: #00aaff;
          font-size: 1.5rem;
          margin-bottom: 1rem;
          border-bottom: 2px solid #00aaff;
          padding-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
}
