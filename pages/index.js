import Header from "../components/Header";
import BottomBar from "../components/BottomBar";
import Cetak from "../components/Cetak";
import Grid from "@material-ui/core/Grid";
import BarangCard from "../components/BarangCard";
import Typography from "@material-ui/core/Typography";

// baseUrl
import { useRouter } from "next/router";

// Snackbar
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

// Snackbar
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// Reducer
const initialState = {
  firstBayar: 0,
  firstCetak: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "tambah":
      return { ...state, firstBayar: state.firstBayar + action.hargaBrg };
    case "kurang":
      return { ...state, firstBayar: state.firstBayar - action.hargaBrg };
    case "cetak":
      return {
        ...state,
        firstCetak: state.firstCetak
          .filter((obj) => obj.namaBrg != action.cetakObj.namaBrg)
          .concat(action.cetakObj),
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export default function Index({ makanans, minumans }) {
  const [bayar, dispatch] = React.useReducer(reducer, initialState);

  // Reset jumlah
  const [resetJumlah, setResetJumlah] = React.useState(false);
  function resetAllJumlah() {
    setResetJumlah(!resetJumlah);
  }

  // Handle cetak
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Cetak all
  const [cetak, setCetak] = React.useState(false);
  function cetakAll() {
    setCetak(!cetak);
    console.log(bayar.firstCetak);
  }

  // Snackbar
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const handleClickSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <Grid container spacing={2} style={{ marginBottom: 50 }}>
      <Grid
        item
        xs={12}
        style={{ position: "fixed", width: "100vw", marginLeft: 10, zIndex: 2 }}
      >
        <Header />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h4" style={{ marginLeft: 20 }}>
          Makanan
        </Typography>
      </Grid>

      <Grid item container spacing={2}>
        {makanans.map((makanan) => (
          <Grid item xs={6} sm={3} key={makanan.id}>
            <BarangCard
              namaBrg={makanan.namaBrg}
              imgBrg={makanan.imgBrg}
              hargaBrg={makanan.hargaBrg}
              bayarDispatch={dispatch}
              resetJumlah={resetJumlah}
              cetak={cetak}
            />
          </Grid>
        ))}
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h4" style={{ marginLeft: 20 }}>
          Minuman
        </Typography>
      </Grid>

      <Grid item container spacing={2}>
        {minumans.map((minuman) => (
          <Grid item xs={6} sm={3} key={minuman.id}>
            <BarangCard
              namaBrg={minuman.namaBrg}
              imgBrg={minuman.imgBrg}
              hargaBrg={minuman.hargaBrg}
              bayarDispatch={dispatch}
              resetJumlah={resetJumlah}
              cetak={cetak}
            />
          </Grid>
        ))}
      </Grid>

      <Grid item xs={12}>
        <BottomBar
          totBayar={bayar.firstBayar}
          bayarDispatch={dispatch}
          resetAllJumlah={resetAllJumlah}
          handleClickOpen={handleClickOpen}
          cetakAll={cetakAll}
        />

        <Cetak
          openCetak={open}
          handleClose={handleClose}
          bayarState={bayar}
          handleClickSnackbar={handleClickSnackbar}
          openSnackbar={openSnackbar}
        />

        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert onClose={handleCloseSnackbar} severity="success">
            Transaksi berhasil disimpan!
          </Alert>
        </Snackbar>
      </Grid>
    </Grid>
  );
}

export async function getStaticProps() {
  const resMakanan = await fetch("/api/makanan");
  const makanans = await resMakanan.json();
  const resMinuman = await fetch("/api/minuman");
  const minumans = await resMinuman.json();
  return {
    props: {
      makanans,
      minumans,
    },
  };
}
