import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import TextField from "@material-ui/core/TextField";
import green from "@material-ui/core/colors/green";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  input: {
    marginLeft: "auto",
    width: "50px",
  },
  green: {
    color: green[500],
  },
}));

export default function BarangCard({ namaBrg, imgBrg, hargaBrg }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const formatHarga = (angka) => {
    var rupiah = "";
    var angkarev = angka.toString().split("").reverse().join("");
    for (var i = 0; i < angkarev.length; i++)
      if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + ".";
    return (
      "Rp " +
      rupiah
        .split("", rupiah.length - 1)
        .reverse()
        .join("")
    );
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <>
            <IconButton
              aria-label="Edit barang"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Edit Barang</MenuItem>
            </Menu>
          </>
        }
      />
      <CardMedia className={classes.media} image={`./${imgBrg}`} />
      <CardContent>
        <Typography variant="h6" className={classes.green}>
          {formatHarga(hargaBrg)},-
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {namaBrg}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Tambah jumlah barang">
          <AddIcon />
        </IconButton>
        <IconButton aria-label="Kurangi jumlah barang">
          <RemoveIcon />
        </IconButton>
        <TextField
          className={classes.input}
          id="outlined-basic"
          variant="outlined"
          defaultValue="0"
          aria-label="Jumlah barang"
        />
      </CardActions>
    </Card>
  );
}
