import Header from "../components/Header";
import BottomBar from "../components/BottomBar";
import Cetak from "../components/Cetak";
import Grid from "@material-ui/core/Grid";
import BarangCard from "../components/BarangCard";
import Typography from "@material-ui/core/Typography";

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
    case "kurangReset":
      return {
        ...state,
        firstBayar: state.firstBayar - action.hargaBrg * action.jumlah,
      };
    case "cetak":
      return {
        ...state,
        firstCetak: state.firstCetak.concat(action.cetakObj),
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export default function Index({ makanans, minumans }) {
  const [bayar, dispatch] = React.useReducer(reducer, initialState);
  const [resetJumlah, setResetJumlah] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  // Handle cetak
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Reset jumlah
  function resetAllJumlah() {
    setResetJumlah(!resetJumlah);
  }

  return (
    <Grid container spacing={2} style={{ marginBottom: 50 }}>
      <Grid item xs={12}>
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
            />
          </Grid>
        ))}
      </Grid>

      <Grid item xs={12}>
        <BottomBar
          bayarState={bayar}
          bayarDispatch={dispatch}
          resetAllJumlah={resetAllJumlah}
          handleClickOpen={handleClickOpen}
        />
        <Cetak openCetak={open} handleClose={handleClose} />
      </Grid>
    </Grid>
  );
}

export async function getStaticProps() {
  const resMakanan = await fetch("http://localhost:3000/api/makanan");
  const makanans = await resMakanan.json();
  const resMinuman = await fetch("http://localhost:3000/api/minuman");
  const minumans = await resMinuman.json();
  return {
    props: {
      makanans,
      minumans,
    },
  };
}
