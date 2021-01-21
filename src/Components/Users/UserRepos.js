import React, { Component } from "react";
import axios from "axios";
import Giphy from './Giphy';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


class UserRepos extends Component {
    
  state = {
    user: [],
    repos:[],
    loading: true
  }
  //geting user repos
  getUserRepos = async (username) => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client-secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ repos: res.data, loading: true });
  };
  componentDidMount() {
    this.getUserRepos(this.props.match.params.login)
  }
  static propTypes = {
    getUser:PropTypes.func.isRequired,
    getUserRepos:PropTypes.func.isRequired
  }

    render() {
        console.log(this.state,'azim')
        const {repos} = this.state.user.repos_url;
        return (
            <div>
                {repos}
            </div>
        )
    }
}

export default UserRepos;
