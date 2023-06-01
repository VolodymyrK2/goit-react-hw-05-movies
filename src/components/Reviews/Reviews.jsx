import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from 'api/Api';
import css from './Reviews.module.css';

function Reviews() {
  const [reviews, setReviews] = useState([])
  const { movieId } = useParams();
  useEffect(() => {
    Api.getReviews(movieId).then(res => {
      const review = res.results.map(({ author, content,id }) => {
      return  { author, content,id }
      } )
       setReviews(review);
    });
    }, []);

  return (
    <ul>
      {reviews.length===0 ? <p>We don't have any reviews for this movie</p>:
      reviews.map(({author, content,id}) => (
        <li key={id}>
          <h2>Author: {author}</h2>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  )
}

export default Reviews