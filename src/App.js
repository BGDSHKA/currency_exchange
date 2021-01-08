import { LinearProgress } from '@material-ui/core';
import React, {useState, useEffect} from 'react'
import { Route } from 'react-router-dom';
import { coinsAPI } from './api/api';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Token from './components/Hero/Token';

function App() {

  const [coins, setCoins] = useState('')

  useEffect(() => {
    coinsAPI.getCoins().then((data) => {
        setCoins(data);
    })
    return 
}, []);

if (!coins) {
  return <LinearProgress />
}

  return (
   <>
   <Header />
   <Route exact path="/" render={() => <Hero coins={coins} setCoins={setCoins}/>} />
   <Route path="/token/:Id?" render={() => <Token coins={coins} />} />
   </>
  );
}

export default App;
