import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SettingsIcon from "@material-ui/icons/Settings";
import AddIcon from "@material-ui/icons/Add";
import AssessmentIcon from "@material-ui/icons/Assessment";

export default function Sidebar() {
  return (
    <>
      <List>
        <ListItem button>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary={"Tambah Barang"} />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary={"Tambah Banyak Barang Sekaligus"} />
        </ListItem>

        <Divider />

        <ListItem button>
          <ListItemIcon>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary={"Laporan Penjualan"} />
        </ListItem>

        <Divider />

        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={"Pengaturan"} />
        </ListItem>
      </List>
    </>
  );
}
