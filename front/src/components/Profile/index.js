import React, { useEffect } from 'react';
import ProgressBar from 'src/components/ProgressBar';
import PropTypes from 'prop-types';

import './styles.scss';

const Profile = ({ email, pseudo, picturePath, progressByTheme, fetchProgressByTheme }) => {
  useEffect(() => {
    fetchProgressByTheme();
  }, []);
  console.log(progressByTheme);
  return (
    <div className="profile">
      <h1 className="profile__title">Mon Profil</h1>
      <div className="profile__content">
        <img className="profile__content__img" src={`${process.env.IMAGE}${picturePath}`} alt="" />
        <div className="profile__cosntent__infos">
          <h2 className="profile__content__infos__pseudo">Pseudo : {pseudo}</h2>
          <h2 className="profile__content__infos__email">Email : {email}</h2>
        </div>
      </div>
      <div className="profile__progress">
        {
          progressByTheme.map((progress) => (
            <div className="profile__progress__theme">
              <h2>{progress.theme}</h2>
              <ProgressBar percentage={`${progress.progress}%`} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

Profile.propTypes = {
  email: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  picturePath: PropTypes.string.isRequired,
};

export default Profile;
