import "./App.css";
import { MiniWalletContainer } from '@scallop-io/scallop-mini-wallet'
import { customCoinTypes } from './const/customtoken'

const App = () => {
  return (
    <div>
      <MiniWalletContainer initialCoinTypeState={customCoinTypes} />
      <div className="App">
        <h1 className="app-title">Your web app content</h1>
      </div>
    </div>
  );
};

export default App;
