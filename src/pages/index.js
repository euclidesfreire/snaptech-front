import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import NewsList from '../components/NewsList';
import RecommendedNews from '../components/RecommendedNews';

export default function Home() {
  const [news, setNews] = useState([]);
  const [recommendedNews, setRecommendedNews] = useState([]);
  const [search, setSearch] = useState('');
  const [email, setEmail] = useState(null);

  useEffect(() => {
    // Fetch news from a public API without token requirement
    async function fetchNews() {
      try {
        //const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // Example public API
        const response = await axios.get('/api/news/articles'); // Example public API
        setNews(response.data);

         const saved = localStorage.getItem("user_email");
         if (saved) {
            setEmail(saved);
         } 
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    }
    fetchNews();
  }, []);

  //Recommended
    useEffect(() => {
      if (!email) return;

      const sendRecommended= async () => {
        try {
          const recommended = await axios.post("/api/news/recommendations", { email });
          console.log('recommended')
          console.log(recommended)
          setRecommendedNews(recommended.data.slice(0, 5));
        } catch (err) {
          console.error("Erro ao enviar email:", err);
        }
      };

      sendRecommended();
    }, [email]); 

  const filteredNews = news.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <Header search={search} setSearch={setSearch} />
      <main>
      {email ? (

        <RecommendedNews posts={recommendedNews} />

         ) : (
        <></>
      )}
        <h1 className="recent-news">Suas notícias</h1>
        <NewsList posts={filteredNews} />
      </main>

      <style jsx>{`
        .container {
          background-color: #0D1117;
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
          font-size: 2rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
}
