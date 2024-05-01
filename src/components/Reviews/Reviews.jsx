import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';

import { getMovieReviewsByFromApi } from '../service/Api';
import s from './Reviews.module.scss';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true);

    getMovieReviewsByFromApi(movieId)
      .then(data => {
        // console.log(data);

        if (data.results.length === 0) {
          return toast.error('Sorry, there is no reviews!', {
            position: 'top-center',
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
        }
        setReviews(data.results);
      })
      .finally(() => setShowLoader(false));
  }, [movieId]);

  return (
    <div>
      {showLoader && <Loader />}
      <ToastContainer />

      {reviews && (
        <ul className={s.reviwsList}>
          {reviews.map(review => {
            return (
              <li key={review.id} className={s.reviewsItem}>
                <h5 className={reviews.title}>{review.author}</h5>
                <p className={reviews.text}>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}

      {/* {!reviews && <p>there is no reviews</p>} */}
    </div>
  );
}

// Reviews.propTypes = {

// }
