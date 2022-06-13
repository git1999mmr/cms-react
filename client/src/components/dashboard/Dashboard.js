import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import {
  FilesUploadComponent,
  UploadList
} from '../upload/FilesUploadComponent';
import {
  FilesUploadComponentBang,
  UploadListBang
} from '../upload_bang/FilesUploadComponentBang';
import Task from '../task/Task';
import { Fragment } from 'react';
import { TaskList } from '../task/Task';
import TaskBang from '../task_bang/TaskBang';

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
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  const handleClick1 = (event) => {
    setIsShown((current) => !current);
  };
  const handleClick2 = (event) => {
    setIsShown2((current) => !current);
  };
  const handleClick3 = (event) => {
    setIsShown3((current) => !current);
  };

  const handleClick4 = (event) => {
    setIsShown4((current) => !current);
  };

  // Super Admin in chennai
  if (
    (user && user.role) === 'superadmin' &&
    (user && user.location) === 'chennai'
  ) {
    return (
      <Fragment>
        <section className="container">
          <h1 className="large text-primary" style={{ fontWeight: 'bold' }}>
            Dashboard
          </h1>
          <h2 className="lead" style={{ fontSize: '2rem' }}>
            <p
              style={{
                color: 'darkgreen',
                fontWeight: 'bold',
                fontSize: '2.4rem'
              }}
            >
              <i className="fas fa-user" /> Welcome {user && user.name}
            </p>
            <p style={{ fontWeight: 'bold' }}>({user && user.desc}) </p>
            <p className="lead">(location : {user && user.location})</p>
          </h2>

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
              onClick={handleClick4}
              style={{ fontSize: '1.5rem' }}
            >
              View Project Tasks
            </button>
            {isShown4 && <UploadList />}
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
  }

  // Super Admin in Bangalore
  if (
    (user && user.role) === 'superadmin' &&
    (user && user.location) === 'bangalore'
  ) {
    return (
      <Fragment>
        <section className="container">
          <h1 className="large text-primary" style={{ fontWeight: 'bold' }}>
            Dashboard
          </h1>
          <h2 className="lead" style={{ fontSize: '2rem' }}>
            <p
              style={{
                color: 'darkgreen',
                fontWeight: 'bold',
                fontSize: '2.4rem'
              }}
            >
              <i className="fas fa-user" /> Welcome {user && user.name}
            </p>
            <p style={{ fontWeight: 'bold' }}>({user && user.desc}) </p>
            <p className="lead">(location : {user && user.location})</p>
          </h2>

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
              onClick={handleClick4}
              style={{ fontSize: '1.5rem' }}
            >
              View Project Tasks
            </button>
            {isShown4 && <UploadList />}
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
  }

  // Admin in Chennai
  if (
    (user && user.role) === 'admin' &&
    (user && user.location) === 'chennai'
  ) {
    return (
      <Fragment>
        <section className="container">
          <h1 className="large text-primary" style={{ fontWeight: 'bold' }}>
            Dashboard
          </h1>
          <h2 className="lead" style={{ fontSize: '2rem' }}>
            <p
              style={{
                color: 'darkgreen',
                fontWeight: 'bold',
                fontSize: '2.4rem'
              }}
            >
              <i className="fas fa-user" /> Welcome {user && user.name}
            </p>
            <p style={{ fontWeight: 'bold' }}>({user && user.desc}) </p>
            <p className="lead">(location : {user && user.location})</p>
          </h2>

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
              onClick={handleClick4}
              style={{ fontSize: '1.5rem' }}
            >
              View Project Tasks
            </button>
            {isShown4 && <UploadList />}
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
  }

  // Admin in bangalore

  if (
    (user && user.role) === 'admin' &&
    (user && user.location) === 'bangalore'
  ) {
    return (
      <Fragment>
        <section className="container">
          <h1 className="large text-primary" style={{ fontWeight: 'bold' }}>
            Dashboard
          </h1>
          <h2 className="lead" style={{ fontSize: '2rem' }}>
            <p
              style={{
                color: 'darkgreen',
                fontWeight: 'bold',
                fontSize: '2.4rem'
              }}
            >
              <i className="fas fa-user" /> Welcome {user && user.name}
            </p>
            <p style={{ fontWeight: 'bold' }}>({user && user.desc}) </p>
            <p className="lead">(location : {user && user.location})</p>
          </h2>

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
            {isShown1 && <FilesUploadComponentBang />}
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
            {isShown2 && <TaskBang />}
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
              onClick={handleClick4}
              style={{ fontSize: '1.5rem' }}
            >
              View Project Tasks
            </button>
            {isShown4 && <UploadListBang />}
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
  }

  // Mason in Chennai
  if (
    (user && user.role) === 'mason' &&
    (user && user.location) === 'chennai'
  ) {
    return (
      <Fragment>
        <section className="container">
          <h1 className="large text-primary" style={{ fontWeight: 'bold' }}>
            Dashboard
          </h1>
          <h2 className="lead" style={{ fontSize: '2rem' }}>
            <p
              style={{
                color: 'darkgreen',
                fontWeight: 'bold',
                fontSize: '2.4rem'
              }}
            >
              <i className="fas fa-user" /> Welcome {user && user.name}
            </p>
            <p style={{ fontWeight: 'bold' }}>({user && user.desc}) </p>
            <p className="lead">(location : {user && user.location})</p>
          </h2>

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
              onClick={handleClick4}
              style={{ fontSize: '1.5rem' }}
            >
              View Project Tasks
            </button>
            {isShown4 && <UploadList />}
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
  }

  // Mason in bangalore

  if (
    (user && user.role) === 'mason' &&
    (user && user.location) === 'bangalore'
  ) {
    return (
      <Fragment>
        <section className="container">
          <h1 className="large text-primary" style={{ fontWeight: 'bold' }}>
            Dashboard
          </h1>
          <h2 className="lead" style={{ fontSize: '2rem' }}>
            <p
              style={{
                color: 'darkgreen',
                fontWeight: 'bold',
                fontSize: '2.4rem'
              }}
            >
              <i className="fas fa-user" /> Welcome {user && user.name}
            </p>
            <p style={{ fontWeight: 'bold' }}>({user && user.desc}) </p>
            <p className="lead">(location : {user && user.location})</p>
          </h2>

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
              onClick={handleClick4}
              style={{ fontSize: '1.5rem' }}
            >
              View Project Tasks
            </button>
            {isShown4 && <UploadListBang />}
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
  }

  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary" style={{ fontWeight: 'bold' }}>
          Dashboard
        </h1>
        <p className="lead" style={{ fontSize: '2rem' }}>
          <h2 style={{ color: 'darkgreen', fontWeight: 'bold' }}>
            <i className="fas fa-user" /> Welcome {user && user.name}
          </h2>
          <h3 style={{ fontWeight: 'bold' }}>({user && user.desc}) </h3>
          <h4>(location : {user && user.location})</h4>
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
            onClick={handleClick3}
            style={{ fontSize: '1.5rem' }}
          >
            Project Progress
          </button>
          {isShown3 && <TaskList />}
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
