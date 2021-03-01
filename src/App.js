import { observer } from "mobx-react-lite";
import Dashboard from "src/components/Dashboard";

function App() {
  return (
    <main>
      <Dashboard />
    </main>
  );
}

export default observer(App);
