import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import PostForm from './PostForm';
import { getPosts } from '../../actions/post';
import { getCurrentProfile } from '../../actions/profile';

const Posts = ({
  getPosts,
  getCurrentProfile,
  post: { posts },
  auth: { user }
}) => {
  useEffect(() => {
    getPosts();
    getCurrentProfile();
  }, [getPosts, getCurrentProfile]);

  if ((user && user.role) === 'superadmin') {
    return (
      <section className="container">
        <h1 className="large text-primary" style={{ fontWeight: 'bold' }}>
          Posts & Comments
        </h1>
        <p className="lead">
          <i className="fas fa-user" /> Welcome to the community
        </p>
        <PostForm />
        <div className="posts">
          {posts.map((post) => (
            <PostItem key={post._id} post={post} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="container">
      <h1 className="large text-primary" style={{ fontWeight: 'bold' }}>
        Posts & Comments
      </h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome to the community
      </p>
      <div className="posts">
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  post: state.post
});

export default connect(mapStateToProps, { getPosts, getCurrentProfile })(Posts);
