import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

type ModalProps = {
  onClose?: () => void;
} & DialogProps;

const Modal = ({
  open,
  onClose,
  children,
  ...props
}: ModalProps) => (
  <Dialog open={open} onClose={onClose} {...props}>
    <DialogTitle>
      <Box>
        <IconButton color="secondary" disableRipple onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
    </DialogTitle>
    <DialogContent>{children}</DialogContent>
  </Dialog>
);

export default Modal;
