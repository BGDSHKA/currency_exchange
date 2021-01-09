import { Container, Grid, Paper } from '@material-ui/core'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import Currency from './Currency'
import Chart from './Chart';
import Exchange from './Exchange';
import { withRouter } from 'react-router-dom';

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
    let coin = props.coins.find( coin => coin.id === props.match.params.Id)
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
                            <Chart coin={coin}/>
                        </Paper>
                    </Grid>

                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <Exchange coin={coin} />
                        </Paper>
                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}

export default withRouter(Token)
