import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    }
}));

const ButtonPage = props => {

    const {
        color,
        size,
        // type,
        icon,
        text,
        onClick
    } = props;

    const classes = useStyles();

    return (

        <Button 
            variant="contained" 
            size={size}
            color={color} 
            className={classes.margin}
            onClick={onClick}
        >
            {text}
        </Button>

    )
}

export default ButtonPage;