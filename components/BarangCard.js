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
import green from "@material-ui/core/colors/green";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import formatHarga from "./formatHarga";

// ---------------------------------------------------- CSS
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
  cardButton: {
    width: 100,
    borderRadius: 20,
  },
}));

export default function BarangCard({
  namaBrg,
  imgBrg,
  hargaBrg,
  bayarDispatch,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [jumlah, setJumlah] = React.useState(0);
  const classes = useStyles();

  // ---------------------------------------------------- Menu 3 dots
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // ---------------------------------------------------- Menu 3 dots
  const handleClose = () => {
    setAnchorEl(null);
  };

  // ---------------------------------------------------- Set Tot Bayar
  function tambahBayar() {
    bayarDispatch({
      type: "tambah",
      hargaBrg,
    });
  }

  function kurangBayar() {
    bayarDispatch({
      type: "kurang",
      hargaBrg,
    });
  }

  // ---------------------------------------------------- Render
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
              size="small"
            >
              <MoreVertIcon />
            </IconButton>

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              size="small"
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

      <CardActions style={{ display: "flex", justifyContent: "space-evenly" }}>
        <IconButton
          aria-label="Kurangi jumlah barang"
          onClick={() => {
            setJumlah((prevCount) => prevCount - 1);
            kurangBayar();
          }}
          className={classes.cardButton}
        >
          <RemoveIcon />
        </IconButton>

        <Typography variant="h5">{jumlah}</Typography>

        <IconButton
          aria-label="Tambah jumlah barang"
          onClick={() => {
            setJumlah((prevCount) => prevCount + 1);
            tambahBayar();
          }}
          className={classes.cardButton}
        >
          <AddIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
