import React from 'react'
import CardComponent from './Card/Card'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

const Hero = (props) => {
    const classes = useStyles();

    let marketElements = null;
    if (props.coins !== '') {
         marketElements = props.coins.map((m, index) => <Grid key={m.id} 
         item xs={6} sm={3} ><CardComponent  currentPrice={m.current_price}
          number={index} name={m.name} symbol={m.symbol} id={m.id} /></Grid>);
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                    {marketElements} 
            </Grid>

        </div>
    )
}

export default Hero
