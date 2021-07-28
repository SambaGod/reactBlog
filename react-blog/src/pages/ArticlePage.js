import React, { Fragment } from 'react';
import ArticleContent from './article-content';

function ArticlePage({ match }) {
  const name = match.params.name;
  const article = ArticleContent.find(article => article.name === name);
  if (!article) return <h1>Searched article doesn't exist</h1>;
  return (
    <Fragment>
      <h1>This is a page for articles</h1>
      <p>This article name was searched: {name}</p>
      <p>This articles was retrieved:</p>
      <h2>{article.name}</h2>
      <h3>{article.title}</h3>
      <ul>
        {article.content.map((list, key) => (
          <li key={key}>{list}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ArticlePage;
