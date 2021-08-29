import { useContext } from "react";
import { GitHubContext } from "../providers/github-provider";

const useGithub = () => {
  const { githubState } = useContext(GitHubContext);

  return { githubState }
};

export default useGithub;
