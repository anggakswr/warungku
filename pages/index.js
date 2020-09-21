import Header from "../components/Header";
import BottomBar from "../components/BottomBar";
import Grid from "@material-ui/core/Grid";
import BarangCard from "../components/BarangCard";
import Typography from "@material-ui/core/Typography";

// Reducer
const initialState = {
  firstBayar: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "tambah":
      return { firstBayar: state.firstBayar + action.hargaBrg };
    case "kurang":
      return { firstBayar: state.firstBayar - action.hargaBrg };
    case "kurangReset":
      return { firstBayar: state.firstBayar - action.hargaBrg * action.jumlah };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export default function Index({ makanans, minumans }) {
  const [bayar, dispatch] = React.useReducer(reducer, initialState);

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
            />
          </Grid>
        ))}
      </Grid>

      <Grid item xs={12}>
        <BottomBar bayarState={bayar} bayarDispatch={dispatch} />
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
