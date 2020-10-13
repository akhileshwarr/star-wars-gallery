import React,  { useContext, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMet from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Text } from '../atoms/Text';
import { ThemeContext } from '../../context/theme';
import { SWButton as Button } from '../atoms/SWButton'
import { useDispatch } from "react-redux";
import { fetchFilim } from '../../store/actions'
import PropTypes from 'prop-types';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export const  Card = ({person}) => {

  const theme = useContext(ThemeContext);
  const classes = useStyles();
  const dispatch = useDispatch()
  const handleFilmClick = useCallback(
      () => dispatch(fetchFilim(person.url)),
      [dispatch]
    )
  return (
    <CardMet className={classes.root} style = {{backgroundColor: theme.backgroundCard }}>
      <CardContent>
        <Typography  color="textSecondary"  variant="h5" component="h2">
            <Text>{person.name}</Text>
        </Typography>
        <Typography className={classes.title} >
          <Text>Height : {person.height}</Text> 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
            <Text> Gender : {person.gender}</Text>
        </Typography>
        <Typography variant="body2" component="p">
            <Text>Films:</Text> <br />
            {
              person.filimDetails ? 
                person.filimDetails.map((film,i) =>  
                  <React.Fragment key = {i}>
                    <Text>{`Film${i} : `}</Text>
                    <br/>
                    <Text>{"Title : "}{film.title}</Text>
                    <br/>
                    <Text>{"Director : "}{film.director}</Text>
                    <br/>
                    <Text>{"producer : "}{film.director}</Text>
                    <br/>
                  </React.Fragment>
                )
                :person.films.map((a,i) => <React.Fragment key = {i}>
                    <Text>{a}</Text>
                    <br/>
                    </React.Fragment>)
                }
        </Typography>
      </CardContent>
      <CardActions>
        <Button handleSWClick = {handleFilmClick} disabled = { person.filimDetails ? true : false } > 
          <Text>Learn More</Text>
        </Button>
      </CardActions>
    </CardMet>
  );
}

Card.propTypes = {
  person: PropTypes.object
};

Card.defaultProps = {
  person: {},
 
};
