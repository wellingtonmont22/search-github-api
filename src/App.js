import Layout from "./components/Layout";
import Profile from "./components/Profile";
import Repositories from "./components/Repositories";
import useGithub from "./hooks/github-hooks";
import Loader from "./components/Loader";

const App = () => {
  const { githubState } = useGithub();
  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <Loader />
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <h1>Não foi feita nenhuma pesquisa!</h1>
      )}
    </Layout>
  );
};

export default App;
