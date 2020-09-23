import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Divider from "@material-ui/core/Divider";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import formatHarga from "./formatHarga";

export default function Cetak({
  openCetak,
  handleClose,
  bayarState,
  handleClickSnackbar,
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={openCetak}
      onClose={handleClose}
      aria-labelledby="pencetakan-struk-warungku"
      aria-describedby="total-pembayaran-warungku"
    >
      <DialogTitle id="alert-dialog-title">Total Pembayaran</DialogTitle>
      <DialogContent style={{ minWidth: "78vmin" }}>
        <List>
          {bayarState.firstCetak.map((barang, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar>
                  <Typography variant="h6">{barang.jumlah}</Typography>
                </Avatar>
              </ListItemAvatar>

              <ListItemText primary={barang.namaBrg} />

              <ListItemSecondaryAction>
                <Typography variant="h6">
                  {formatHarga(barang.totHarga)},-
                </Typography>
              </ListItemSecondaryAction>
            </ListItem>
          ))}

          <Divider />

          <ListItem>
            <ListItemText primary="Total" />

            <ListItemSecondaryAction>
              <Typography variant="h6" color="primary">
                {formatHarga(bayarState.firstBayar)},-
              </Typography>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Batal
        </Button>

        <Button
          onClick={() => {
            handleClose();
            handleClickSnackbar();
          }}
          color="primary"
          autoFocus
        >
          Input ke Database
        </Button>
      </DialogActions>
    </Dialog>
  );
}
