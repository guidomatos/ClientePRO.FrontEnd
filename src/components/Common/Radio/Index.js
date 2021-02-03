import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const RadioControl = props => {

    const {
        id,
        label
    } = props;

    return (

        <FormControl component="fieldset">
            <FormLabel component="legend">{ label }</FormLabel>
            <RadioGroup row aria-label="position" name="position" defaultValue="top">
                <FormControlLabel value="M" control={<Radio color="primary" />} label="Masculino" />
                <FormControlLabel value="F" control={<Radio color="primary" />} label="Femenino" />
            </RadioGroup>
        </FormControl>

    )
}

export default RadioControl;