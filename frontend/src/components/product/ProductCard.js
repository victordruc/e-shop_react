import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Carousel from "../ui/Carousel";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import {Link} from "react-router-dom"

const useStyles = makeStyles({
  root: {
    maxWidth: 260,
    height: 480,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  media: {
    height: 200,
  },
});
const ProductCard = ({id, actions, name, imageUrls, content, listAction }) => {
  const classes = useStyles();
  let [runSlider, setRunSlider] = useState(false);
  return (
    <Card
      className={classes.root}
      onMouseEnter={() => {
        setRunSlider(true);
      }}
      onMouseLeave={() => {
        setRunSlider(false);
      }}
    >
      <CardHeader
        avatar={<Avatar>{name[0]}</Avatar>}
        action={listAction}
        title={
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
        }
      />

      <CardActionArea component={Link} to={`/product/${id}`}>
        <CardMedia className={classes.media}>
          <Carousel imageUrls={imageUrls} runSlider={runSlider} />
        </CardMedia>

        <CardContent>{content}</CardContent>
      </CardActionArea>

      <CardActions style={{ justifyContent: "center", marginTop: "auto" }}>
        {actions}
      </CardActions>
    </Card>
  );
};

export default ProductCard;