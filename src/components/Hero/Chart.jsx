import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, Tooltip } from 'recharts';


const Chart = (props) => {

  const theme = useTheme();

  return (
      <ResponsiveContainer>
        <LineChart
          data={props.data}
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
             {props.name} ($)
            </Label>
          </YAxis>
          <Tooltip isAnimationActive={false} />
          <Line type="monotone" dataKey={props.name} stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
  );
}

export default Chart