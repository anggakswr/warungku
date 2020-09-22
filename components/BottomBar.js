import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import Container from "@material-ui/core/Container";
import PrintIcon from "@material-ui/icons/Print";
import formatHarga from "./formatHarga";
import Link from "next/link";

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
      <BottomNavigation
        color="primary"
        style={{ borderRadius: 5 }}
        component="a"
      >
        {bayarDispatch && resetAllJumlah ? (
          <BottomNavigationAction
            label="Reset"
            icon={<RestoreIcon />}
            onClick={() => {
              bayarDispatch({ type: "reset" });
              resetAllJumlah();
            }}
            showLabel
          />
        ) : (
          <Link href="/">
            <BottomNavigationAction
              label="Reset"
              icon={<RestoreIcon />}
              showLabel
            />
          </Link>
        )}

        {bayarState && (
          <BottomNavigationAction
            icon={`${formatHarga(bayarState.firstBayar)},-`}
            style={{ fontSize: 25, color: "green" }}
          />
        )}

        <Link href="/cetak">
          <BottomNavigationAction
            label="Cetak"
            icon={<PrintIcon />}
            showLabel
          />
        </Link>
      </BottomNavigation>
    </Container>
  );
}
