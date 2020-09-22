import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Header from "../components/Header";
import BottomBar from "../components/BottomBar";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

export default function Cetak() {
  const classes = useStyles();

  return (
    <Grid container spacing={2} style={{ marginBottom: 50 }}>
      <Grid item xs={12}>
        <Header />
      </Grid>

      <Grid item container xs={12}>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8} className={classes.demo}>
          <Typography variant="h6" className={classes.title}>
            Total Pembayaran
          </Typography>

          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <Typography variant="h5">1</Typography>
                </Avatar>
              </ListItemAvatar>

              <ListItemText primary="Soto Ayam Pak Budi" />

              <ListItemSecondaryAction>
                <Typography variant="h5">Rp 10.000,-</Typography>
              </ListItemSecondaryAction>
            </ListItem>

            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <Typography variant="h5">2</Typography>
                </Avatar>
              </ListItemAvatar>

              <ListItemText primary="Jus Jambu Muda" />

              <ListItemSecondaryAction>
                <Typography variant="h5">Rp 9.000,-</Typography>
              </ListItemSecondaryAction>
            </ListItem>

            <Divider />

            <ListItem>
              <ListItemText primary="Total" />

              <ListItemSecondaryAction>
                <Typography variant="h5">Rp 19.000,-</Typography>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>

      <Grid item xs={12}>
        <BottomBar />
      </Grid>
    </Grid>
  );
}
