import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Money from "../ui/Money";

const ProductContent = ({description, attributes, price}) => {
  return (
    <>
      <Typography align="left">Description: {description}</Typography>
      <Divider />
      <List disablePadding>
        {attributes.map(({ name, value }) => (
          <ListItem key={name} disableGutters>
            <ListItemText primary={name + ": " + value} />
          </ListItem>
        ))}
      </List>
      <Divider />
      {price.discount ? (
        <Typography variant="button" display="block" gutterBottom>
          <div>
            <Money
              price={{
                amount: price.standard.amount,
                value: price.standard.currency,
              }}
              type="old"
            >
              Old price:{" "}
            </Money>
          </div>
          <div>
            <Money
              price={{
                amount: price.discount.amount,
                value: price.discount.currency,
              }}
              type="act"
            >
              Actual price:{" "}
            </Money>
          </div>
        </Typography>
      ) : (
        <Typography variant="button" display="block" gutterBottom>
          <Money
            price={{
              amount: price.standard.amount,
              value: price.standard.currency,
            }}
            type="std"
          >
            Price:{" "}
          </Money>
        </Typography>
      )}
    </>
  );
};

export default ProductContent