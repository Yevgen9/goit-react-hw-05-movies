import React from 'react';

import { RotatingLines } from 'react-loader-spinner';
import s from './Loader.module.scss';

export default function Loader() {
  return (
    <div className={s.loader}>
      <RotatingLines
        visible={true}
        height="200"
        width="200"
        color="grey"
        strokeWidth="3"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
