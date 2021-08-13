import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import Nav from './Nav';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Portfolio from './Portfolio';
Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Nav />
      </header>
      <Portfolio />
    </div>
  );
}

export default withAuthenticator(App);
