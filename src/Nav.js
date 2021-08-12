import { AmplifySignOut } from '@aws-amplify/ui-react';
import { HomeIcon } from '@material-ui/icons'


function Nav() {
    return (
      <div className="Nav">
        <header className="App-header">
            <HomeIcon color="secondary"/>
            <AmplifySignOut />
        </header>
      </div>
    );
  }
  
  export default Nav;
  