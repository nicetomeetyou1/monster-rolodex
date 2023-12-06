import "./App.css";
import { MiniWalletContainer } from '@scallop-io/scallop-mini-wallet'

const App = () => {
  return (
    <div>
      <MiniWalletContainer />
      <div className="App">
        <h1 className="app-title">Your web app content</h1>
      </div>
    </div>
  );
};

export default App;
