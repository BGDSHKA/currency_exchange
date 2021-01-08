import { TextField } from '@material-ui/core'
import React from 'react'

const Exchange = (props) => {

    return (
        <div>
            <form noValidate autoComplete="off">
                <TextField id="outlined-basic" label={props.coin.name} variant="outlined" />
                <TextField id="outlined-basic2" label="USD" variant="outlined" />
            </form>
        </div>
    )
}

export default Exchange
