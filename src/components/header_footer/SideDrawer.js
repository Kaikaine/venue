import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const SideDrawer = (props) => {
  return (
    <div>
      <Drawer
      anchor='right'
      open={props.open}
      onClose={() => props.onClose(false)}
      >
        <List component='nav'>
            <ListItem button onClick={() => console.log()}>Event Starts In</ListItem>
            <ListItem button onClick={() => console.log()}>Venue Info</ListItem>
            <ListItem button onClick={() => console.log()}>Highlights</ListItem>
            <ListItem button onClick={() => console.log()}>Pricing</ListItem>
            <ListItem button onClick={() => console.log()}>Location</ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default SideDrawer;
