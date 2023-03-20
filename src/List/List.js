import React from "react";
import Button from "../Components/Button/Button";
import Card from "../Components/Card/Card";
import classes from './List.module.css'

const List = (props) => {

    const deleteHandler = () => {
        props.ondelete(props.listItems[0].id);
    }

    return (
      <Card className={classes.outer}>
        <h1>{props.category}</h1>
        {props.listItems.map((item) => {
          return (
            <li
              onClick={deleteHandler}
              className={classes.list}
              key={Math.random()}
            >
                  {item.pn}-{item.sp}-{item.cat}
                  <Button>Delete</Button>
            </li>
          );
        })}
      </Card>
    );
}
export default List;