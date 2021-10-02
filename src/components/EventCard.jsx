import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import reggaeSundays from "../images/reggaeSundays.jpeg";
import { Link } from "react-router-dom";
import { compareAsc, format } from "date-fns";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    // padding: "20px 20px",
    margin: "20px 20px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "#ea6d7c",
  },
}));

export default function EventCard({ eventData }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar
              aria-label="recipe"
              alt="Highrise Logo"
              src="./images/highriseLogo(cropped).png"
              className={classes.avatar}
            ></Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={eventData.name}
          subheader={format(new Date(eventData.eventDate), "dd-MM-yyyy")}
        />
        <Link to={`/events/${eventData._id}`}>
          <CardMedia
            className={classes.media}
            image={eventData.image}
            title="Event Artwork"
          />
        </Link>
        <CardContent>
          <Typography color="textPrimary" component="h2">
            Line Up
          </Typography>
          {eventData.lineUp.map((artist) => (
            <Typography variant="body2" color="textSecondary" component="p">
              {artist}
            </Typography>
          ))}
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{eventData.description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}

// import React, { Component, useState, useEffect } from "react";

// import ListGroup from "react-bootstrap/ListGroup";

// export default function EventHeader({ eventData, links, history }) {
//   //   const [isOpen, setOpen] = useState(false);
//   //

//   return (
//     <div>
//       {/* <section id="hero-wrapper">
//         <div id="hero-container">
//           <div className="bg-filter"></div>
//           <img id="hero-image" src={reggaeSundays} />
//           <div className="hero-text">
//             <h1>HIGHRISE FESTIVAL: {props.event.name}</h1>
//             <date>Friday 13th - Sunday the 15th August</date>
//             <p>Location, TBA</p>
//           </div>
//         </div>
//       </section> */}

//       <ListGroup>
//         {eventData.map((event) => {
//           {
//             console.log(event);
//           }
//           return (
//             <ListGroup.Item>
//               <div className="event-detail-card">
//                 <h1>HIGHRISE FESTIVAL: {event.name}</h1>
//                 <date>Friday 13th - Sunday the 15th August</date>
//                 <p>Location, TBA</p>
//               </div>
//             </ListGroup.Item>
//           );
//         })}
//       </ListGroup>
//     </div>
//   );
// }
