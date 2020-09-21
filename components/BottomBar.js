import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import Container from "@material-ui/core/Container";
import PrintIcon from "@material-ui/icons/Print";
import Typography from "@material-ui/core/Typography";
import formatHarga from "./formatHarga";

export default function BottomBar({ bayarState, bayarDispatch }) {
  return (
    <Container
      style={{
        position: "fixed",
        bottom: 0,
      }}
    >
      <BottomNavigation color="primary" style={{ borderRadius: 5 }} showLabels>
        <BottomNavigationAction
          label="Reset"
          icon={<RestoreIcon />}
          onClick={() => bayarDispatch({ type: "reset" })}
        />
        <Typography variant="h4" color="primary" style={{ marginTop: 5 }}>
          {formatHarga(bayarState.firstBayar)},-
        </Typography>
        <BottomNavigationAction label="Cetak" icon={<PrintIcon />} />
      </BottomNavigation>
    </Container>
  );
}
