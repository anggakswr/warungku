import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import Container from "@material-ui/core/Container";
import PrintIcon from "@material-ui/icons/Print";
import formatHarga from "./formatHarga";

export default function BottomBar({
  bayarState,
  bayarDispatch,
  resetAllJumlah,
}) {
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
          onClick={() => {
            bayarDispatch({ type: "reset" });
            resetAllJumlah();
          }}
        />

        <BottomNavigationAction
          icon={`${formatHarga(bayarState.firstBayar)},-`}
          style={{ fontSize: 25, color: "green" }}
        />

        <BottomNavigationAction label="Cetak" icon={<PrintIcon />} />
      </BottomNavigation>
    </Container>
  );
}
