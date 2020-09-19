import React from 'react'
import useUser from "../_hooks/useUser";
import TextField from '@material-ui/core/TextField';

const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
}));

function ClassForm() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
    setAge(event.target.value);
  };

return( 
    // userState, 
    <form>
        <input type="text" id="period">ID (can be period, block number, etc.)</input>
        <input type="text" id="instructor">Instructor</input>
        <input type="text" id="location">Location</input>
        <input type="text" id="name">Class Name</input>
        <TextField
            id="start"
            label="Start Time"
            type="datetime-local"
            defaultValue="2020-09-19T08:00"
            InputLabelProps={{
            shrink: true,
            }}
        />
        <TextField
            id="end"
            label="End Time"
            type="datetime-local"
            defaultValue="2020-09-19T09:00"
            InputLabelProps={{
            shrink: true,
            }}
        />
    </form>
    );
}



export default ClassForm;