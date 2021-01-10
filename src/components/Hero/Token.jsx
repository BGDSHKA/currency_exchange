import { Container, Grid, LinearProgress, Paper } from '@material-ui/core'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import React, {useEffect, useState} from 'react';
import Currency from './Currency'
import Chart from './Chart';
import Exchange from './Exchange';
import { withRouter } from 'react-router-dom';
import { coinsAPI } from '../../api/api';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

const Token = (props) => {

    const classes = useStyles();
    const [prices, setPrices] = useState([])
    const [marketCaps, setMarketCaps] = useState([])

    let coin = props.coins.find( coin => coin.id === props.match.params.Id)
  
    useEffect(() => {
      coinsAPI.getHistory(props.match.params.Id).then((data) => {
        for (var i = 0; i < data.prices.length; i++) {
          var temp = new Date(data.prices[i][0])
          data.prices[i][0] = temp.toLocaleDateString('en-US')
          data.market_caps[i][0] = temp.toLocaleDateString('en-US')
        }

          setPrices(data.prices.map(([time, Price]) => ({time, Price})));
          setMarketCaps(data.market_caps.map(([time, Cap]) => ({time, Cap})));
      })
  }, []);

  if (!prices && !marketCaps) {
    return <LinearProgress />
  }

    return (
        <div>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4} lg={3}>
                        <Paper className={clsx(classes.paper, classes.fixedHeight)}>
                            <Currency coin={coin} />
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8} lg={9}>
                        <Paper className={clsx(classes.paper, classes.fixedHeight)}>
                            <Chart data={prices} name="Price"/>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8} lg={9}>
                        <Paper className={clsx(classes.paper, classes.fixedHeight)}>
                            <Chart data={marketCaps} name="Cap"/>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={4} lg={3}>
                        <Paper className={clsx(classes.paper, classes.fixedHeight)} >
                            <Exchange coin={coin} />
                        </Paper>
                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}

export default withRouter(Token)