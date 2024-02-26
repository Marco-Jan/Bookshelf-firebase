import {
    Button, Dialog, DialogActions, DialogContent,
    DialogContentText, DialogTitle, FormControlLabel, Checkbox, TextField,
} from '@mui/material';

import { useState } from 'react';
import useBooks, {TBook } from './useBooks';

interface Props {
    open: boolean;
    handleClose: () => void;
}

export default function Form({ open, handleClose }: Props) {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        pages: 0,
        read: false,
    });
    const [, addBook] = useBooks();

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add Book</DialogTitle>
            <DialogContent>
                <DialogContentText>Add a Book to the Bookshelf</DialogContentText>
                <TextField
                    required
                    autoFocus
                    margin='dense'
                    id='title'
                    label='Book Title'
                    type='text'
                    fullWidth
                    variant="standard"
                />
                <TextField
                    required
                    margin='dense'
                    id='author'
                    label='Author'
                    type='text'
                    fullWidth
                    variant='standard'
                />
                <TextField
                    required
                    margin='dense'
                    id='Pages'
                    label='Pages'
                    type='number'
                    fullWidth
                    variant='standard'
                />
                <FormControlLabel control={<Checkbox />} label="Read?" />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button>Add Book</Button>
            </DialogActions>
        </Dialog>
    )
}