import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import Container from "@material-ui/core/Container";
import PrintIcon from "@material-ui/icons/Print";
import formatHarga from "./formatHarga";

export default function BottomBar({
  totBayar,
  bayarDispatch,
  resetAllJumlah,
  handleClickOpen,
  cetakAll,
}) {
  return (
    <Container
      style={{
        position: "fixed",
        bottom: 0,
        zIndex: 2,
      }}
    >
      <BottomNavigation
        color="primary"
        style={{ borderRadius: 5 }}
        component="a"
      >
        <BottomNavigationAction
          label="Reset"
          icon={<RestoreIcon />}
          onClick={() => {
            bayarDispatch({ type: "reset" });
            resetAllJumlah();
          }}
          showLabel
        />

        {totBayar && (
          <BottomNavigationAction
            icon={`${formatHarga(totBayar)},-`}
            style={{ fontSize: 15, color: "green" }}
          />
        )}

        <BottomNavigationAction
          label="Cetak"
          icon={<PrintIcon />}
          showLabel
          onClick={() => {
            handleClickOpen();
            cetakAll();
          }}
        />
      </BottomNavigation>
    </Container>
  );
}
