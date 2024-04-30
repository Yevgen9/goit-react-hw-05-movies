import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './SearchForm.module.scss';

export default function SearchForm({ onSubmitForm }) {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    // console.log(e.currentTarget.value);
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      //   console.log('empty line');
      setQuery('');
      return toast.warn('Please, enter text!', {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }

    onSubmitForm(query);

    return setQuery('');
  };

  return (
    <>
      <ToastContainer />
      <form className={s.form} onSubmit={handleSubmit}>
        <button className={s.buttonForm} type="submit">
          <span className={s.buttonLabel}>Search</span>
        </button>

        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={query}
          onChange={handleChange}
        />
      </form>
    </>
  );
}

// SearchForm.propTypes = {};
