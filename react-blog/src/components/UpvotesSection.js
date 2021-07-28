import React from 'react';
import { Button } from 'reactstrap';

export default function UpvotesSection({
  articleName,
  upvotes,
  setAritcleInfo,
}) {
  const upvoteArticle = async () => {
    const result = await fetch(`/api/articles/${articleName}/upvote/`, {
      method: 'post',
    });
    const body = await result.json();
    setAritcleInfo(body);
  };
  return (
    <div>
      <Button color='dark' onClick={() => upvoteArticle()}>
        UpVote ({upvotes})
      </Button>
    </div>
  );
}
