import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import Container from "@material-ui/core/Container";
import PrintIcon from "@material-ui/icons/Print";
import AddIcon from "@material-ui/icons/Add";

export default function BottomBar() {
  const [value, setValue] = React.useState(0);

  return (
    <Container maxWidth="xs">
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        color="primary"
      >
        <BottomNavigationAction label="Reset" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Tambah Barang" icon={<AddIcon />} />
        <BottomNavigationAction label="Cetak" icon={<PrintIcon />} />
      </BottomNavigation>
    </Container>
  );
}
