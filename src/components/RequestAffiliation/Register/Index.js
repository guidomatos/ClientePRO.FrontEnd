import React, { Component } from "react";
import TextField from '../../Common/TextField/Index';
import Button from '../../Common/Button/Index';
import RegisterRequestAffiliation from './RegisterRequestAffiliation';

class RegistrarSolicitudAfiliacion extends Component {

    render() {

        return (
            <>
                <RegisterRequestAffiliation />
            </>
        );

    };

    register = () => {
    
        alert('registrar');
        
    };
    

};

export default RegistrarSolicitudAfiliacion;