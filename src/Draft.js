import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MUIEditor, { MUIEditorState } from "react-mui-draft-wysiwyg";
import { convertToRaw } from 'draft-js';
import { createArtifact } from './graphql/mutations';
import { graphqlOperation } from '@aws-amplify/api-graphql';
import { API } from '@aws-amplify/api'
import uuid from 'react-uuid';

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

    const [titleState, setTitleState] = React.useState('');
    
    const onTitleChange = (event) => {
      setTitleState(event.target.value)
    }

    const onChange = newState => {
      setEditorState(newState)
    }
    
    const save = () => {
      const rawContent = convertToRaw(editorState.getCurrentContent())
      const newArtifact = {
        content: rawContent,
        id: uuid(),
        portfolioID: 'gr4334t4tog345ht35',
        title: titleState
      }
      try {
        API.graphql(graphqlOperation(createArtifact, {input: newArtifact}));
      } catch (error) {
        console.log('error creating artifacts', error);
      }
      console.log(rawContent)
    }
  
    const classes = useStyles();

    return (
        
        <div className={classes.parentDiv}>

            <h2>Create New Portfolio Artifact</h2>
            <TextField
              required
              id="title"
              label="Required"
              defaultValue="Artifact Title"
              variant="outlined"
              onChange={onTitleChange}
            />
            <MUIEditor editorState={editorState} onChange={onChange} />
            
            <Button
             variant="contained"
             color="primary"
             onClick={save}
            >Add Artifact</Button>
            
        </div>
    )
  }

  export default Draft;