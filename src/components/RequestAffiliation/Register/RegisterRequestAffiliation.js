import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '../../Common/TextField/Index';
import Select from '../../Common/Select/Index';
import Radio from '../../Common/Radio/Index';
import Checkbox from '../../Common/Checkbox/Index';
import Link from '../../Common/Link/Index';
import Button from '../../Common/Button/Index';


// const theme = createMuiTheme({
//     typography: {
//         subtitle1: {
//           fontSize: 12,
//           color: 'd50000'
//         },
//         body1: {
//           fontWeight: 500,
//         },
//         button: {
//           fontStyle: 'italic',
//         },
//     }
// });


// const useStyles = makeStyles((theme) => ({
//     container: {
//         display: 'grid',
//         gridTemplateColumns: 'repeat(12, 1fr)',
//         gridGap: theme.spacing(0),
//         margin: theme.spacing(2, 0)
//     },
//     paper: {
//         padding: theme.spacing(1),
//         textAlign: 'left',
//         color: theme.palette.text.secondary,
//         whiteSpace: 'nowrap',
//         marginBottom: theme.spacing(3)
//     },
//     divider: {
//         //marginTop: theme.spacing(0, 0),
//         marginBottom: theme.spacing(4)
//     }
// }));

const useStyles = makeStyles((theme) => ({

    // container: {
    //     display: 'grid',
    //     gridTemplateColumns: 'repeat(12, 1fr)',
    //     margin: theme.spacing(2, 0)
    // },
    form: {
        margin: theme.spacing(5)
    },
    titulo: {
        color: '#194F90'
    },
    subTitulo: {
        color: '#DD181B',
        marginTop: theme.spacing(5)
    },
    divider: {
        marginBottom: theme.spacing(4)
    }

}));

const Page = props => {

    const {
        
    } = props;

    const classes = useStyles();

    return (

        <form className={classes.form}>
            <Typography variant="h5" gutterBottom className={classes.titulo}>
                Registro de nuevo socio
            </Typography>
            <Divider className={classes.divider} />
            <Typography variant="h6" gutterBottom className={classes.subTitulo}>
                Datos personales
            </Typography>
            <Divider className={classes.divider} />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Box border={0}>
                        <Select
                            id="selTipoDocumento"
                            label="Tipo de documento"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <Box border={0}>
                        <TextField
                            id="txtNumeroDocumento"
                            label="Número de documento"
                            variant="filled"
                            size="small"
                            placeholder=""
                        />
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Box border={0}>
                        <TextField
                            id="txtApellidos"
                            label="Ingrese sus apellidos"
                            placeholder=""
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Box border={0}>
                        <TextField
                            id="txtNombre"
                            label="Ingrese su(s) nombre(s)"
                            placeholder=""
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={2} lg={2}>
                    <Box border={0}>
                        <TextField
                            id="txtEdad"
                            label="Edad"
                            placeholder=""
                        />
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Box border={0}>
                        <Radio
                            id="radSexo"
                            label="Sexo"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Box border={0}>
                        <Select
                            id="selNivelEducativo"
                            label="Seleccione su nivel educativo"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Box border={0}>
                    <Select
                            id="selOficio"
                            label="Seleccione su oficio"
                        />
                    </Box>
                </Grid>
            </Grid>
            <Typography variant="h6" gutterBottom className={classes.subTitulo}>
                Datos de procedencia
            </Typography>
            <Divider className={classes.divider} />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Box border={0}>
                        <Select
                            id="selDepartamento"
                            label="Seleccione su departamento"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Box border={0}>
                        <Select
                            id="selProvincia"
                            label="Seleccione su provincia"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Box border={0}>
                        <Select
                            id="selDistrito"
                            label="Seleccione su distrito"
                        />
                    </Box>
                </Grid>
            </Grid>
            <Typography variant="h6" gutterBottom className={classes.subTitulo}>
                Datos de comunicación
            </Typography>
            <Divider className={classes.divider} />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={8} lg={8}>
                    <Box border={0}>
                        <TextField
                            id="txtCorreoElectronico"
                            label="Ingrese su correo electrónico"
                            size="small"
                            placeholder=""
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <Box border={0}>
                        <TextField
                            id="txtNumeroCelular"
                            label="Ingrese su número de celular"
                            size="small"
                            placeholder=""
                        />
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={3} style={{marginTop:50}}>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                    <Box border={0}>
                        <Checkbox
                            legend=""
                            label={ <Link href="#" label="Quiero acumular CMR Puntos, y acepto los Términos y Condiciones y Políticas de privacidad del Programa CMR Puntos"></Link> }  
                            size="medium"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Box border={0}>
                        <div className={classes.buttons}>
                            <Button
                                color="default"
                                text="Cancelar"
                                size="large"
                            />
                            <Button
                                color="primary"
                                text="Enviar"
                                size="large"
                            />
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </form>

    )
}

export default Page;