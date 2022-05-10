
import './App.css';

function App() {
  return (
    <>
      <div className="faucet-wrapper">
        <div className="faucet">
      
            <div className="is-flex is-align-items-center">
              <span>
                <strong className="mr-2">Account: </strong>
              </span>
                  <div></div> 
                  <button
                    className="button is-small">
                    Connect Wallet
                  </button>
            </div> 
          <div className="balance-view is-size-2 my-4">
            Current Balance: <strong>10</strong> ETH
          </div>
          <button
            className="button is-link mr-2">
              Donate 1 eth
            </button>
          <button
            className="button is-primary">Withdraw 0.1 eth</button>
        </div>
      </div>
    </>
  );
}

export default App


{/* <>
<div className="faucet-wrapper">
  <div className="faucet">
    <div className="balance-view is-size-2">
      Current Balance: <strong>10</strong>ETH
    </div>
    <button className="btn mr-2">Donate</button>
    <button className="btn">Withdraw</button>
  </div>
</div>
</> */}