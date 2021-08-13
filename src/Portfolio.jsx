import React, {useState, useEffect} from 'react';
import { listArtifacts } from './graphql/queries';
import { graphqlOperation } from '@aws-amplify/api-graphql';
import { API } from '@aws-amplify/api'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CloseIcon from '@material-ui/icons/Close';
import Draft from './Draft';
import ArtifactCard from './ArtifactCard';

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

    const [artifacts, setArtifacts] = useState([]);
    const fetchArtifacts = async () => {
      try {
        const artifactData = await API.graphql(graphqlOperation(listArtifacts));
        const artifactList = artifactData.data.listArtifacts.items;
        console.log('artifact list', artifactList);
        setArtifacts(artifactList);
      } catch (error) {
        console.log('error fetching artifacts'. error);
      }
    };

    useEffect(() => {
      fetchArtifacts();
    }, []);

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
               <ArtifactCard
               title="The importance of being earnest in software development"
               date="12JAN2021"
               content="Lorem ipsum dolor sit amet, ne eos error definitiones. Eu cum nisl legendos. Vix id congue nominati platonem, an pericula consequuntur vim. Brute nemore mediocritatem eum no, mel labitur principes id. Eos tollit ceteros vulputate an.

               His probo primis semper id. Quem ponderum pro no, ei eleifend facilisis delicatissimi ius. Te libris aliquid sea, pro eu audiam copiosae sapientem, in est modus mollis. Facilis menandri volutpat sed ne, sed alia causae ei. No nec verterem salutatus tincidunt.
               
               Duo ei porro assueverit signiferumque, in mazim ridens urbanitas quo, elit luptatum neglegentur nec ad. An iriure offendit deterruisset est, quo id aeterno delicatissimi. Et omnis senserit qualisque vix, in esse prima elaboraret sed, vix ne tritani scribentur. Vel no altera veritus, cu laoreet fuisset alienum duo."
               />
           </div>
}   
        </div>
    )
  }

  export default Portfolio;