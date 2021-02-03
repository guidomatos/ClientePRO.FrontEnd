import { Link } from '@material-ui/core';
import React from 'react';

const LinkControl = props => {

    const {
        href,
        label
    } = props;

    return (

        <Link href={ href }>
            { label }
        </Link>

    )
}

export default LinkControl;