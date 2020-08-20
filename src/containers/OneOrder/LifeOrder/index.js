import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import HotelIcon from "@material-ui/icons/Hotel";
import RepeatIcon from "@material-ui/icons/Repeat";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import moment from 'moment';

// import { Container } from './styles';
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: "#a7d163",
  },
  primaryTail: {
    backgroundColor: "#333",
  },
}));

function LifeOrder({ props, date }) {
  const classes = useStyles();
  const [connector, setConnector] = React.useState({
    pedido: false,
    confirmed: false,
    send: false,
    loaded: false,
  });
  useEffect(() => {
    switch (props) {
      case "Realizado":
        setConnector({
          pedido: true,
          confirmed: false,
          send: false,
          loaded: false,
        });
        break;
      case "Confirmado":
        setConnector({
          pedido: true,
          confirmed: true,
          send: false,
          loaded: false,
        });
        break;
      case "Colhido":
        setConnector({
          pedido: true,
          confirmed: true,
          send: true,
          loaded: false,
        });
        break;
      case "Entregue":
        setConnector({
          pedido: true,
          confirmed: true,
          send: true,
          loaded: true,
        });
        break;
      default:
        break;
    }
  }, [props]);

  console.log(date);
  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Horario do pedido : 9:30 am
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            style={
              connector.pedido
                ? { "background-color": "#a7d163" }
                : { "background-color": "#333" }
            }
          >
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector
            className={
              connector.pedido ? classes.secondaryTail : classes.primaryTail
            }
          />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Pedido realizado
            </Typography>
            <Typography>
              Seu pedido foi realizado e aguarda confirmação
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            style={
              connector.confirmed
                ? { "background-color": "#a7d163" }
                : { "background-color": "#bdbdbd" }
            }
          >
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector
            className={
              connector.confirmed ? classes.secondaryTail : classes.primaryTail
            }
          />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={2} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Pedido confirmado
            </Typography>
            <Typography>
              Seu pedido foi confirmado vamos colher{" "}
              {date ? <span>, previsão de entrega {moment(date).format('DD/MM/YYYY')}</span> : <span>Confirmaremos</span>}
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            style={
              connector.send
                ? { "background-color": "#a7d163" }
                : { "background-color": "#bdbdbd" }
            }
          >
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector
            className={
              connector.send ? classes.secondaryTail : classes.primaryTail
            }
          />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Pedido colhido !
            </Typography>
            <Typography>Previsão de entrega toda sexta</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            style={
              connector.loaded
                ? { "background-color": "#a7d163" }
                : { "background-color": "#bdbdbd" }
            }
          >
            <RepeatIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Entregue
            </Typography>
            <Typography>Pedido entregue</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default LifeOrder;
