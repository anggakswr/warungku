import makeStyles from "@material-ui/core/styles/makeStyles";
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
import RestoreIcon from "@material-ui/icons/Restore";
import TextField from "@material-ui/core/TextField";

// ---------------------------------------------------- CSS
const useStyles = makeStyles(() => ({
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
  green: {
    color: green[500],
  },
  fift: {
    width: 50,
  },
}));

export default function BarangCard({
  namaBrg,
  imgBrg,
  hargaBrg,
  bayarDispatch,
  resetJumlah,
  cetak,
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

  // ---------------------------------------------------- Reset jumlah
  React.useEffect(() => {
    setJumlah(0);
  }, [resetJumlah]);

  // ---------------------------------------------------- Push cetak object
  React.useEffect(() => {
    if (jumlah > 0) {
      bayarDispatch({
        type: "cetak",
        cetakObj: {
          namaBrg,
          jumlah,
          totHarga: jumlah * hargaBrg,
        },
      });
    }
  }, [cetak]);

  // ---------------------------------------------------- Render
  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={jumlah}
            label="Jumlah"
            className={classes.fift}
            onChange={(e) => {
              bayarDispatch({
                type: "tambah",
                hargaBrg: e.target.value * hargaBrg - jumlah * hargaBrg,
              });
              setJumlah(e.target.value);
            }}
          >
            {jumlah}
          </TextField>
        }
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

      <CardActions style={{ display: "flex", justifyContent: "space-around" }}>
        <IconButton
          aria-label="Reset jumlah barang"
          onClick={() => {
            bayarDispatch({
              type: "kurang",
              hargaBrg: hargaBrg * jumlah,
            });
            setJumlah(0);
          }}
        >
          <RestoreIcon />
        </IconButton>

        <IconButton
          aria-label="Kurangi jumlah barang"
          onClick={() => {
            if (jumlah > 0) {
              setJumlah((prevCount) => parseInt(prevCount, 10) - 1);
              bayarDispatch({
                type: "kurang",
                hargaBrg,
              });
            }
          }}
        >
          <RemoveIcon />
        </IconButton>

        <IconButton
          aria-label="Tambah jumlah barang"
          onClick={() => {
            setJumlah((prevCount) => parseInt(prevCount, 10) + 1);
            bayarDispatch({
              type: "tambah",
              hargaBrg,
            });
          }}
        >
          <AddIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
