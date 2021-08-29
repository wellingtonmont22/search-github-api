import React, { createContext, useState } from "react";

export const GitHubContext = createContext({
  user: {},
  repositories: [],
  starred: [],
});

const GithubProvider = ({ children }) => {
    const [ githubState, setGithubState ] = useState({
        user: {
            login: undefined,
            name: "undefined",
            publicUrl: undefined,
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

    const contextValue = {
        githubState,
    }

    return (<GitHubContext.Provider value={contextValue}>{children}</GitHubContext.Provider>);
};

export default GithubProvider;
