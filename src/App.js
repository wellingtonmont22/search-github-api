import Layout from "./components/layout";
import Profile from "./components/Profile";
import { ResetCSS } from "./global/resetCSS";
import Repositories from "./components/Repositories";
import GithubProvider from "./providers/github-provider";

const App = () => {
  return (
    <main className="App">
      <GithubProvider>
        <ResetCSS />
        <Layout>
          <Profile />
          <Repositories />
        </Layout>
      </GithubProvider>
    </main>
  );
};

export default App;
