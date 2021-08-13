import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CloseIcon from '@material-ui/icons/Close';
import Draft from './Draft';
import { FormatColorResetOutlined } from '@material-ui/icons';

function Portfolio() { 
    const useStyles = makeStyles((theme) => ({
        parentDiv: {
            marginLeft: 40,
            paddingLeft: 40,
            marginRight: 40,
            paddingRight: 40
        },
      }));
    const classes = useStyles();
    const [showDraft, setShowDraft] = React.useState(0);
    const handleClose = () => {
        setShowDraft(0);
      }
  
    return (
        
        <div className={classes.parentDiv}>
           <IconButton 
             aria-label="add"
             onClick={() => setShowDraft(1)}>
               <AddCircleIcon /> 
           </IconButton>
           Add New Artifact
           {showDraft 
           ?
               <div>
               <IconButton
                 onClick={handleClose}>
                <CloseIcon/>
               </IconButton>
               Close
               <Draft />
               </div>
           :
           <div>
               Placeholder for portfolio pieces
           </div>
}   
        </div>
    )
  }

  export default Portfolio;