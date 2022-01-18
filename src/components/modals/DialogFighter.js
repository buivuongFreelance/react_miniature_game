import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';

export default function DialogFighter({ open, handleClose, fighter }) {

    let folder = '';
    let name = '';
    if (fighter) {
        const { id } = fighter;
        const arr = id.split('_');
        if (arr.length > 1) {
            folder = arr[0];
            name = arr[1];
        }
    }

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={'body'}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                {/* <DialogTitle id="scroll-dialog-title">{fighter.name}</DialogTitle> */}
                <DialogContent>
                    <DialogContentText
                        id="scroll-dialog-description"
                        // ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        <Box
                            component="img"
                            sx={{ height: `${fighter.height}px` }}
                            src={`/fighters/${folder}/${name}.png`}
                            alt={fighter.id}
                        />
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}
