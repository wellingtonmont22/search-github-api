import Layout from "./components/layout";
import Profile from "./components/Profile";
import { ResetCSS } from "./global/resetCSS";
import Repositories from './components/Repositories';

const App = () => {
  return (
    <main className="App">
      <ResetCSS />
      <Layout>
        <Profile />
        <Repositories />
      </Layout>
    </main>
  );
};

export default App;
