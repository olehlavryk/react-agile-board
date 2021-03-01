import { observer } from "mobx-react-lite";
import Dashboard from "src/components/Dashboard";
import Header from "src/components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Dashboard />
      </main>
    </>
  );
}

export default observer(App);
