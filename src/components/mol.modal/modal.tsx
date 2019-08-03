import * as React from 'react';
import {
  Dialog,
  DialogContent,
  Typography,
  DialogActions,
  Button,
  withStyles,
  IconButton,
  createStyles,
  Theme,
  WithStyles
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import MuiDialogTitle from '@material-ui/core/DialogTitle';

interface IExtractModalProps {
  handleClose: () => void;
  isOpen: boolean;
}
const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2)
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    }
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const ExtractModal: React.FunctionComponent<IExtractModalProps> = props => {
  return (
    <>
      <Dialog
        onClose={props.handleClose}
        aria-labelledby='customized-dialog-title'
        open={props.isOpen}
      >
        <DialogTitle id='customized-dialog-title' onClose={props.handleClose}>
          Atualização Extrato
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Verificamos que você depositou dinheiro recentemente, já fizemos a
            alocação dos seus recursos!
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ExtractModal;
