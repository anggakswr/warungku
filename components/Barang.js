import Grid from "@material-ui/core/Grid";
import BarangCard from "./BarangCard";

export default function Barang() {
  return (
    <>
      <Grid item xs={6} sm={3}>
        <BarangCard
          namaBrg="Nasi Goreng Original"
          imgBrg="nasi-goreng.jpg"
          hargaBrg="15000"
        />
      </Grid>
      <Grid item xs={6} sm={3}>
        <BarangCard
          namaBrg="Bubur Ayam Spesial"
          imgBrg="bubur-ayam.jpeg"
          hargaBrg="10000"
        />
      </Grid>
      <Grid item xs={6} sm={3}>
        <BarangCard
          namaBrg="Soto Ayam Pak Kardi"
          imgBrg="soto-ayam.jpg"
          hargaBrg="20000"
        />
      </Grid>
      <Grid item xs={6} sm={3}>
        <BarangCard
          namaBrg="Kopi Susu"
          imgBrg="kopi-susu.jpg"
          hargaBrg="25000"
        />
      </Grid>
    </>
  );
}
