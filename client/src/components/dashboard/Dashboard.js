import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import { FilesUploadComponent } from '../upload/FilesUploadComponent';
import Task from '../task/Task';
import { Fragment } from 'react';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  const [isShown1, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const handleClick1 = (event) => {
    setIsShown((current) => !current);
  };
  const handleClick2 = (event) => {
    setIsShown2((current) => !current);
  };
  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary" style={{ fontWeight: 'bold' }}>
          Dashboard
        </h1>
        <p className="lead">
          <i className="fas fa-user" /> Welcome {user && user.name}
        </p>
        <div
          style={{
            padding: '2%',
            paddingLeft: '0%',
            paddingTop: '0%'
          }}
        >
          <button
            className="btn btn-primary"
            onClick={handleClick1}
            style={{ fontSize: '1.5rem' }}
          >
            Project Task
          </button>
          {isShown1 && <FilesUploadComponent />}
        </div>
        <div
          style={{
            padding: '2%',
            paddingLeft: '0%',
            paddingTop: '0%'
          }}
          id="progress"
        >
          <button
            className="btn btn-primary"
            onClick={handleClick2}
            style={{ fontSize: '1.5rem' }}
          >
            Project Progress
          </button>
          {isShown2 && <Task />}
        </div>
        {profile !== null ? (
          <>
            <DashboardActions />
            <Experience experience={profile.experience} />
            <Education education={profile.education} />

            <div className="my-2">
              <button
                className="btn btn-danger"
                onClick={() => deleteAccount()}
              >
                <i className="fas fa-user-minus" /> Delete My Account
              </button>
            </div>
          </>
        ) : (
          <>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to="/create-profile" className="btn btn-primary my-1">
              Create Profile
            </Link>
          </>
        )}
      </section>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
