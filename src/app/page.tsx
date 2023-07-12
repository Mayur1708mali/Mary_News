'use client';

import { useEffect, useState } from 'react';
import Navbar from './components/Nav';
import NewsCard from './components/NewsCard';

async function getData() {
  const res = await fetch('/api/india');
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function getNews() {
      const res = await getData();

      const { data } = res;
      setNews(data.articles);
      // console.log(data.articles[0].author);
    }
    getNews();
  }, []);

  return (
    <main className='text-[#183b56]'>
      <Navbar setNews={setNews} />
      <div className='pt-20 max-w-6xl ms-auto me-auto flex justify-between items-start flex-wrap'>
        {news.map((article: any, index) => {
          if (!article.urlToImage) return;
          return <NewsCard key={index} article={article} />;
        })}
      </div>
    </main>
  );
}
