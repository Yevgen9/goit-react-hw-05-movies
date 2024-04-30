import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import PropTypes from 'prop-types'

import { getMovieCastByFromApi } from '../../components/service/Api';
import NoActorPhoto from '../../images/no-user-icon.png';
import s from './Cast.module.scss';

export default function Cast() {
  const { movieId } = useParams();

  const [cast, setCast] = useState(null);

  useEffect(() => {
    getMovieCastByFromApi(movieId).then(data => {
      // console.log(data);

      if (data.cast.length === 0) {
        return toast.error('Sorry, there is no cast!', {
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
      setCast(data.cast);
    });
  }, [movieId]);

  return (
    <div>
      <ToastContainer />
      {cast && (
        <ul className={s.castList}>
          {cast.map(actor => {
            let actorPhoto = NoActorPhoto;
            if (actor.profile_path) {
              actorPhoto = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
            }
            return (
              <li key={actor.id} className={s.actorItem}>
                <img
                  src={actorPhoto}
                  alt={actor.name}
                  className={s.actorImg}
                  width="200"
                />
                <p className={s.actorName}>{actor.name}</p>
              </li>
            );
          })}
        </ul>
      )}

      {/* {!cast && <p>There is no cast!</p>} */}
    </div>
  );
}

// Cast.propTypes = {

// }
