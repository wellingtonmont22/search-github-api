import { useContext } from "react";
import { GitHubContext } from "../providers/github-provider";

const useGithub = () => {
  const { githubState, getUser } = useContext(GitHubContext);

  return { githubState, getUser }
};

export default useGithub;
