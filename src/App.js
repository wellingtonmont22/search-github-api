import Layout from "./components/layout";
import Profile from "./components/Profile";

const App = () => {
  return (
    <main className="App">
      <Layout>
        <Profile />
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
}

export default App;
