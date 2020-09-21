import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import SettingsIcon from "@material-ui/icons/Settings";
import LocalDrinkIcon from "@material-ui/icons/LocalDrink";
import AddIcon from "@material-ui/icons/Add";

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
