import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function Sort({ dispatch, api }) {
  const classes = useStyles();
  const [filter, setFilter] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setFilter(event.target.value);
    switch (event.target.value) {
      case "PRASC":
        api.sortPriceAsc().then((res) => {
          dispatch({ type: "sortPriceAsc", payload: res });
        }).catch((e)=>{
          console.error(e)
          dispatch({type:"error"})
        });
        break;
      case "PRDSC":
        api.sortPriceDesc().then((res) => {
          dispatch({ type: "sortPriceDesc", payload: res });
        }).catch((e)=>{
          console.error(e)
          dispatch({type:"error"})
        });
        break;
      case "":
        api.getAll().then((res) => {
          dispatch({ type: "getAll", payload: res });
        }).catch((e)=>{
          console.error(e)
          dispatch({type:"error"})
        });
        break;
      default:
        api.getAll().then((res) => {
          dispatch({ type: "getAll", payload: res });
        }).catch((e)=>{
          console.error(e)
          dispatch({type:"error"})
        });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">
          Sort Products
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={filter}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"PRASC"}>Price Ascendent</MenuItem>
          <MenuItem value={"PRDSC"}>Price Descendent</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
