import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function ArtifactCard(props) { 
    const useStyles = makeStyles((theme) => ({
        parentDiv: {
            marginLeft: 40,
            paddingLeft: 40,
            marginRight: 40,
            paddingRight: 40,
            border: 5
        },
      }));

    const classes = useStyles();

    return (
        
        <div className={classes.parentDiv}>
            <h2>{props.title}</h2>
            <h3>{props.date}</h3>
            {props.content}
        </div>
    )
  }

  export default ArtifactCard;