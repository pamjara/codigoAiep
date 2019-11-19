import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
  Card: {
    position: "absolute",
    left: 50,
  },
  
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      
        <CardMedia
          className={classes.media}
          image={props.src}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ingresar
          </Typography>
        <FormControl fullWidth className={classes.margin}>
            <InputLabel htmlFor="input-with-icon-adornment">Usuario</InputLabel>
            <Input
            id="input-with-icon-adornment"
            startAdornment={
                <InputAdornment position="start">
                <AccountCircle />
                </InputAdornment>
            }
            />
      </FormControl>

      <FormControl fullWidth className={classes.margin}>
            <InputLabel htmlFor="input-with-icon-adornment">Clave</InputLabel>
            <Input
            id="input-with-icon-adornment"
            
            />
      </FormControl>
      
        </CardContent>
     
      <CardActions>
        <Button fullWidth size="small" color="primary">
          Ingresar
        </Button>
        
      </CardActions>
    </Card>
  );
}