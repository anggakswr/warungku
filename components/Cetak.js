import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  listItemku: {
    margin: "0 -30",
  },
}));

export default function Cetak({ openCetak, handleClose }) {
  const classes = useStyles();

  return (
    <Dialog
      open={openCetak}
      onClose={handleClose}
      aria-labelledby="pencetakan-struk-warungku"
      aria-describedby="total-pembayaran-warungku"
    >
      <DialogTitle id="alert-dialog-title">Total Pembayaran</DialogTitle>
      <DialogContent style={{ minWidth: "78vmin" }}>
        <List>
          <ListItem className={classes.listItemku}>
            <ListItemAvatar>
              <Avatar>
                <Typography variant="h6">1</Typography>
              </Avatar>
            </ListItemAvatar>

            <ListItemText primary="Soto Ayam" />

            <ListItemSecondaryAction>
              <Typography variant="h6">Rp 10.000,-</Typography>
            </ListItemSecondaryAction>
          </ListItem>

          <ListItem className={classes.listItemku}>
            <ListItemAvatar>
              <Avatar>
                <Typography variant="h6">3</Typography>
              </Avatar>
            </ListItemAvatar>

            <ListItemText primary="Jus Jambu Muda" />

            <ListItemSecondaryAction>
              <Typography variant="h6">Rp 9.000,-</Typography>
            </ListItemSecondaryAction>
          </ListItem>

          <Divider />

          <ListItem className={classes.listItemku}>
            <ListItemText primary="Total" />

            <ListItemSecondaryAction>
              <Typography variant="h6" color="primary">
                Rp 19.000,-
              </Typography>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Batal
        </Button>
        <Button onClick={handleClose} color="primary" autoFocus>
          Input ke Database
        </Button>
      </DialogActions>
    </Dialog>
  );
}
