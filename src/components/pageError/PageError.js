import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
  },
  errorColor: {
    color: theme.palette.secondary.main,
  },
  button: {
    marginRight: theme.spacing(1),
  },
}));

const PageError = () => {
  const classes = useStyles();
  let history = useHistory();
  return (
    <div className={classes.root}>
      <Grid container justifyContent="center">
        <Grid item sm={7} md={4}>
          <Typography
            variant="h3"
            component="h1"
            className={classes.errorColor}
          >
            ERROR 404
          </Typography>
        </Grid>
        <Grid item sm={5} md={8}>
          <Typography variant="h5" component="h2" gutterBottom>
            PAGE NOT FOUND
          </Typography>
          <Grid item>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
              startIcon={<ArrowBackIosIcon />}
              onClick={() => history.goBack()}
            >
              Go Back
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<HomeIcon />}
              onClick={() => history.push("/")}
            >
              Go Home
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default PageError;
