import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 150,
    background: "white",
    '&:hover': {
      background: "#eeeeee",
    }
  },
  link: {
    textDecoration: "none"
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

const CardComponent = (props) => {
  const classes = useStyles();
 
  return (
    <NavLink className={classes.link} to={'/token/' + props.id}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            #{props.number + 1}
          </Typography>
          <Typography variant="body1" component="h2">
            {props.name} <br></br>
         ({props.symbol.toUpperCase()})
        </Typography>
          <Typography variant="h6" component="p">
          ${props.currentPrice}
        </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Сalculate</Button>
        </CardActions>
      </Card>
    </NavLink>
  );
}

export default CardComponent