
import { useEffect, useState } from 'react';
import './App.css';
import News from './Components/News/News';

function App() {
const [articles, setArticles] = useState([]);
useEffect(() => {

  const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=fd4d720dd7794e26a268d8bb298dca39'
  fetch(url)
  .then(response => response.json())
  .then(data => setArticles(data.articles))
  
},[])

  return (
    <div>
      <h1>HeadLines : {articles.length}</h1>
      {
        articles.map(article => <News key={article.id} article={article}></News>)
      }
    </div>
  );
}

export default App;
