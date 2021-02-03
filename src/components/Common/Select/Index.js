import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1)
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));


const SelectPage = props => {

    const classes = useStyles();

    const [values, setValues] = React.useState({
        age: ""
    });

    const {
        id,
        label
    } = props;

    
    function handleChange(event) {
        setValues(oldValues => ({
          ...oldValues,
          [event.target.name]: event.target.value
        }));
    }

    return (

        <FormControl className={classes.formControl} fullWidth>
            <InputLabel htmlFor="age-simple">{ label }</InputLabel>
            <Select
                value={values.age}  
                onChange={handleChange}
                inputProps={{
                    name: "age",
                    id: "age-simple"
                }}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>

    )
}

export default SelectPage;