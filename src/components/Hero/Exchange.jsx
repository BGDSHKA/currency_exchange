import { TextField } from '@material-ui/core'
import React, { useState } from 'react'

const Exchange = (props) => {
    const [fiat, setFiat] = useState('')
    const [coin, setCoin] = useState('')
    const [target, setTarget] = useState(null)

    let fiatElement = React.createRef();
    let coinElement = React.createRef();

    const handleChangeFiat = (e) => {
        setTarget(true)
        setFiat(e.target.value)
    }

    const handleChangeCoin = (e) => {
        setTarget(false)
        setCoin(e.target.value)
    }

    return (
        <div>
            <form noValidate autoComplete="off">
                <TextField ref={fiatElement} margin="normal" onChange={handleChangeFiat} label="USD" variant="outlined" value={target ? fiat : coin*props.coin.current_price} />
                <span> </span>
                <TextField ref={coinElement} margin="normal" onChange={handleChangeCoin} label={props.coin.name} variant="outlined" value={ target ? fiat*1/props.coin.current_price : coin} />
            </form>
        </div>
    )
}

export default Exchange
