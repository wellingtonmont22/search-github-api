import React, { createContext, useCallback, useState } from "react";
import api from "../services/api";

export const GitHubContext = createContext({
  user: {},
  repositories: [],
  starred: [],
});

const GithubProvider = ({ children }) => {
  const [githubState, setGithubState] = useState({
    loading: false,
    user: {
      avatar: undefined,
      login: undefined,
      name: undefined,
      html_url: undefined,
      blog: undefined,
      location: undefined,
      company: undefined,
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0,
    },
    repositories: [],
    starred: [],
  });

  const getUser = async (username) => {
    api
      .get(`/users/${username}`)
      .then(
        ({ data }) => {
          setGithubState((prevState) => ({
            ...prevState,
            user: {
              avatar: data.avatar_url,
              login: data.login,
              name: data.name,
              html_url: data.html_url,
              blog: data.blog,
              location: data.location,
              company: data.company,
              followers: data.followers,
              following: data.following,
              public_gists: data.public_gists,
              public_repos: data.public_repos,
            },
          }));
        }
      );
  };

  const contextValue = {
    githubState,
    getUser: useCallback((username) => getUser(username), []),
  };

  return (
    <GitHubContext.Provider value={contextValue}>
      {children}
    </GitHubContext.Provider>
  );
};

export default GithubProvider;
