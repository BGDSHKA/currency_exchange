import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import SignIn from '../../Login/SignIn';
import './Modal.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  dialog: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #ffffff',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  formControl: {
    margin: theme.spacing(2),
  },
}));

export default function LoginModal(props) {
  const classes = useStyles();


  return (
    <>
      <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
          <SignIn />
      </Dialog>
    </>
  );
}