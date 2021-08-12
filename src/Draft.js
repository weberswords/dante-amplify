import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MUIEditor, { MUIEditorState } from "react-mui-draft-wysiwyg";
import { CenterFocusStrong } from '@material-ui/icons';

function Draft() { 
    const useStyles = makeStyles((theme) => ({
        parentDiv: {
            marginLeft: 40,
            paddingLeft: 40,
            marginRight: 40,
            paddingRight: 40
        },
      }));
    const [editorState, setEditorState] = React.useState(
      MUIEditorState.createEmpty(),
    )
    const onChange = newState => {
      setEditorState(newState)
    }
    const classes = useStyles();
    return (
        
        <div className={classes.parentDiv}>
            <h2>Create New Portfolio Piece</h2>
            <MUIEditor editorState={editorState} onChange={onChange} />
        </div>
    )
  }

  export default Draft;