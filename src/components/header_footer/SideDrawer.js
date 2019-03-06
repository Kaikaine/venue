import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {scroller} from 'react-scroll';

const SideDrawer = (props) => {

  const scrollTo = (el) => {
    scroller.scrollTo(el, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150
    })
    props.onClose(false)
  }

  return (
    <div>
      <Drawer
      anchor='right'
      open={props.open}
      onClose={() => props.onClose(false)}
      >
        <List component='nav'>
            <ListItem button onClick={() => scrollTo('event')}>Event Starts In</ListItem>
            <ListItem button onClick={() => scrollTo('venue')}>Venue Info</ListItem>
            <ListItem button onClick={() => scrollTo('highlight')}>Highlights</ListItem>
            <ListItem button onClick={() => scrollTo('pricing')}>Pricing</ListItem>
            <ListItem button onClick={() => scrollTo('location')}>Location</ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default SideDrawer;
