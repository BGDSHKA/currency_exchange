import React from 'react'
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const Currency = (props) => {

    const useStyles = makeStyles({
        depositContext: {
            flex: 1,
        },
        img: {
            height: 40,
        }
    });

    const classes = useStyles();
   
    return (
        <div>
            <img className={classes.img} src={props.coin.image} alt={props.coin.id} ></img><h3>{props.coin.name}</h3>
            <Typography component="p" variant="h4">
            ${props.coin.current_price}
      </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                Market Cap ${props.coin.market_cap}
      </Typography>
            <div>
                <Link color="primary" href="#" >
                    View balance
        </Link>
            </div>
        </div>
    )
}

export default Currency
