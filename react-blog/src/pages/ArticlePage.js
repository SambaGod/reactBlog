import React, { Fragment, useState, useEffect } from 'react';
import UpvotesSection from '../components/UpvotesSection';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';
import CommentsList from '../components/CommentsList';
import AddCommentForm from '../components/AddCommentForm';

function ArticlePage({ match }) {
  const name = match.params.name;
  const article = articleContent.find(article => article.name === name);
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);
  if (!article) return <h1>Searched article doesn't exist</h1>;
  const otherArticles = articleContent.filter(article => article.name !== name);
  return (
    <Fragment>
      <h1>This is a page for articles</h1>
      <h2>{articleInfo.name}</h2>
      <UpvotesSection
        articleName={name}
        upvotes={articleInfo.upvotes}
        setAritcleInfo={setArticleInfo}
      />
      <ul>
        {article.content.map((list, key) => (
          <li key={key}>{list}</li>
        ))}
      </ul>

      <CommentsList comments={articleInfo.comments} />

      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />

      <h3>Other Articles:</h3>
      <div className='mb-5'>
        <ArticlesList articles={otherArticles} />
      </div>
    </Fragment>
  );
}

export default ArticlePage;
