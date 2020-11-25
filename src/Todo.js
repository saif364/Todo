import React from "react";
import "./Todo.css";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";

function Todo(props) { 
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={props.text}
          secondary="dummy deadline 📘 "
        ></ListItemText>
      </ListItem>
    </List>
  );
}

export default Todo;

