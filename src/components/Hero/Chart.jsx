import React, {useEffect, useState} from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, Tooltip } from 'recharts';
import { coinsAPI } from '../../api/api';
import { withRouter } from 'react-router-dom';


const Chart = (props) => {
  const theme = useTheme();
  const [data, setData] = useState('')

  useEffect(() => {
    coinsAPI.getHistory(props.match.params.Id).then((data) => {
      for (var i = 0; i < data.prices.length; i++) {
        var temp = new Date(data.prices[i][0])
        data.prices[i][0] = temp.toLocaleDateString('en-US')
      }
        setData(data.prices.map(([time, amount]) => ({time, amount})));
    })
}, []);

  return (
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 50,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Price ($)
            </Label>
          </YAxis>
          <Tooltip isAnimationActive={false} />
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
  );
}

export default withRouter(Chart)