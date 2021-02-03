import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core';

/*
const useStyles = makeStyles((theme) => ({
    
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    }

}));
*/

const TextFieldPage = props => {

    // const classes = useStyles();

    const {
        id,
        label,
        variant,
        size,
        placeholder
    } = props;

    return (

        <TextField
            id={ id }
            label={ label }
            variant={ variant }
            style={{ margin: 8 }}
            placeholder={ placeholder }
            size={ size }
            fullWidth
            margin="normal"
            inputProps={{
                autoComplete: 'off'
            }}
        />

        
        // <FormControl>
        //     <InputLabel htmlFor="my-input">Email address</InputLabel>
        //     <Input id="my-input" aria-describedby="my-helper-text" autoComplete="off" />
        //     <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        // </FormControl>

    )
}

export default TextFieldPage;