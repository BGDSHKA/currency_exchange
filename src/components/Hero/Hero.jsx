import React, { useState, useEffect } from 'react'
import CardComponent from './Card/Card'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { coinsAPI } from '../../api/api';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));



const Hero = () => {
    const classes = useStyles();
    const [coins, setCoins] = useState('')

    useEffect(() => {
        coinsAPI.getCoins().then((data) => {
            setCoins(data);
        })
    });

    let marketElements = null;
    if (coins !== '') {
         marketElements = coins.map((m, index) => <Grid item xs={3}><CardComponent key={m.id} currentPrice={m.current_price}
          number={index} name={m.name} symbol={m.symbol} /></Grid>);
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
