import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FaWindowClose } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { DialogButton } from './styled';

export default function AlertDialog(props) {
  // varíavel que seta o estado da caixa de diálogo
  const [open, setOpen] = React.useState(false);
  // criando varíaveis para setar caixa de diálogo
  const { btnText, title, children, onConfirm } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <DialogButton onClick={handleClickOpen}>
        <p>{btnText}</p>
        <FaWindowClose size={24} />
      </DialogButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {children}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button
            onClick={(e) => {
              setOpen(false);
              onConfirm(e);
            }}
            color="primary"
            autoFocus
          >
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
// indicando que o valor padrão para btnText a rota é ""
AlertDialog.defaultProps = {
  btnText: '',
};

AlertDialog.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  btnText: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
};
