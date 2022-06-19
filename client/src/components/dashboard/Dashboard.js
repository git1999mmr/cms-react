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
import { TaskBang, TaskListBang } from '../task_bang/TaskBang';

// import { MapApi } from './MapApi';

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
          <div className="mapouter">
            <div
              className="gmap_canvas"
              style={{
                width: '40%',
                height: '400px',
                position: 'relative',
                float: 'right'
              }}
            >
              <iframe
                width="400"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=16/40,%20Azeez%20Nagar%202nd%20St,%20Azeez%20Nagar,%20Kodambakkam,%20Chennai,%20Tamil%20Nadu%20600024&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                rel="noreferrer"
              />
            </div>
          </div>
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
            <p style={{ fontWeight: 'bold' }}>
              ({user && user.desc}) at <span>{profile && profile.company}</span>{' '}
            </p>
            <p className="lead">(location : {user && user.location})</p>
          </h2>
          <h3 style={{ fontWeight: 'bold' }}>
            Client - {user && user.client}{' '}
          </h3>
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
          <div className="mapouter">
            <div
              className="gmap_canvas"
              style={{
                width: '40%',
                height: '400px',
                position: 'relative',
                float: 'right'
              }}
            >
              <iframe
                width="400"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=13,%20Railway%20Layout,%20Bhogadi,%20Karnataka%20570026&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                rel="noreferrer"
              />
            </div>
          </div>

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
            <p style={{ fontWeight: 'bold' }}>
              ({user && user.desc}) at <span>{profile && profile.company}</span>{' '}
            </p>
            <p className="lead">(location : {user && user.location})</p>
          </h2>
          <h3 style={{ fontWeight: 'bold' }}>
            Client - {user && user.client}{' '}
          </h3>

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

          <div className="mapouter">
            <div
              className="gmap_canvas"
              style={{
                width: '40%',
                height: '400px',
                position: 'relative',
                float: 'right'
              }}
            >
              <iframe
                width="400"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=16/40,%20Azeez%20Nagar%202nd%20St,%20Azeez%20Nagar,%20Kodambakkam,%20Chennai,%20Tamil%20Nadu%20600024&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                rel="noreferrer"
              />
            </div>
          </div>

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
            <p style={{ fontWeight: 'bold' }}>
              ({user && user.desc}) at <span>{profile && profile.company}</span>{' '}
            </p>
            <p className="lead">(location : {user && user.location})</p>
          </h2>
          <h3 style={{ fontWeight: 'bold' }}>
            Client - {user && user.client}{' '}
          </h3>

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
          <div className="mapouter">
            <div
              className="gmap_canvas"
              style={{
                width: '40%',
                height: '400px',
                position: 'relative',
                float: 'right'
              }}
            >
              <iframe
                width="400"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=13,%20Railway%20Layout,%20Bhogadi,%20Karnataka%20570026&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                rel="noreferrer"
              />
            </div>
          </div>

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
            <p style={{ fontWeight: 'bold' }}>
              ({user && user.desc}) at <span>{profile && profile.company}</span>{' '}
            </p>
            <p className="lead">(location : {user && user.location})</p>
          </h2>
          <h3 style={{ fontWeight: 'bold' }}>
            Client - {user && user.client}{' '}
          </h3>

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

          <div className="mapouter">
            <div
              className="gmap_canvas"
              style={{
                width: '40%',
                height: '400px',
                position: 'relative',
                float: 'right'
              }}
            >
              <iframe
                width="400"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=16/40,%20Azeez%20Nagar%202nd%20St,%20Azeez%20Nagar,%20Kodambakkam,%20Chennai,%20Tamil%20Nadu%20600024&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                rel="noreferrer"
              />
            </div>
          </div>

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
            <p style={{ fontWeight: 'bold' }}>
              ({user && user.desc}) at <span>{profile && profile.company}</span>{' '}
            </p>
            <p className="lead">(location : {user && user.location})</p>
          </h2>
          <h3 style={{ fontWeight: 'bold' }}>
            Client - {user && user.client}{' '}
          </h3>

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

          <div className="mapouter">
            <div
              className="gmap_canvas"
              style={{
                width: '40%',
                height: '400px',
                position: 'relative',
                float: 'right'
              }}
            >
              <iframe
                width="400"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=13,%20Railway%20Layout,%20Bhogadi,%20Karnataka%20570026&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                rel="noreferrer"
              />
            </div>
          </div>

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
            <p style={{ fontWeight: 'bold' }}>
              ({user && user.desc}) at <span>{profile && profile.company}</span>{' '}
            </p>
            <p className="lead">(location : {user && user.location})</p>
          </h2>
          <h3 style={{ fontWeight: 'bold' }}>
            Client - {user && user.client}{' '}
          </h3>

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

  // User in Chennai
  if ((user && user.role) === 'user' && (user && user.location) === 'chennai') {
    return (
      <Fragment>
        <section className="container">
          <h1 className="large text-primary" style={{ fontWeight: 'bold' }}>
            Dashboard
          </h1>

          <div className="mapouter">
            <div
              className="gmap_canvas"
              style={{
                width: '40%',
                height: '400px',
                position: 'relative',
                float: 'right'
              }}
            >
              <iframe
                width="400"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=16/40,%20Azeez%20Nagar%202nd%20St,%20Azeez%20Nagar,%20Kodambakkam,%20Chennai,%20Tamil%20Nadu%20600024&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                rel="noreferrer"
              />
            </div>
          </div>

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
            <p style={{ fontWeight: 'bold' }}>
              ({user && user.desc}) at <span>{profile && profile.company}</span>{' '}
            </p>
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
              onClick={handleClick3}
              style={{ fontSize: '1.5rem' }}
            >
              Project Progress
            </button>
            {isShown3 && <TaskList />}
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

  // User in bangalore

  if (
    (user && user.role) === 'user' &&
    (user && user.location) === 'bangalore'
  ) {
    return (
      <Fragment>
        <section className="container">
          <h1 className="large text-primary" style={{ fontWeight: 'bold' }}>
            Dashboard
          </h1>

          <div className="mapouter">
            <div
              className="gmap_canvas"
              style={{
                width: '40%',
                height: '400px',
                position: 'relative',
                float: 'right'
              }}
            >
              <iframe
                width="400"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=13,%20Railway%20Layout,%20Bhogadi,%20Karnataka%20570026&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                rel="noreferrer"
              />
            </div>
          </div>

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
            <p style={{ fontWeight: 'bold' }}>
              ({user && user.desc}) at <span>{profile && profile.company}</span>{' '}
            </p>
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
              onClick={handleClick3}
              style={{ fontSize: '1.5rem' }}
            >
              Project Progress
            </button>
            {isShown3 && <TaskListBang />}
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

  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary" style={{ fontWeight: 'bold' }}>
          Dashboard
        </h1>

        <div className="mapouter">
          <div
            className="gmap_canvas"
            style={{
              width: '40%',
              height: '400px',
              position: 'relative',
              float: 'right'
            }}
          >
            <iframe
              width="400"
              height="500"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=16/40,%20Azeez%20Nagar%202nd%20St,%20Azeez%20Nagar,%20Kodambakkam,%20Chennai,%20Tamil%20Nadu%20600024&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              rel="noreferrer"
            />
          </div>
        </div>

        <h2 className="lead" style={{ fontSize: '2rem' }}>
          <p style={{ color: 'darkgreen', fontWeight: 'bold' }}>
            <i className="fas fa-user" /> Welcome {user && user.name}
          </p>
          <p style={{ fontWeight: 'bold' }}>({user && user.desc}) </p>
          <p>(location : {user && user.location})</p>
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
