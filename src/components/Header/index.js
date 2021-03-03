import useStore from "src/hooks/useStore";
import { observer } from "mobx-react-lite";
import {
  AppBar,
  Grid,
  Select,
  Toolbar,
  Typography,
  FormControl,
  Box,
} from "@material-ui/core";
import User from "src/components/common/User";

function Header() {
  const { boards, users } = useStore();

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Box display="flex" alignItems="center">
              <Typography variant="h6">Dashboard:</Typography>
              <FormControl>
                <Select
                  style={{
                    backgroundColor: "#ffffff",
                    marginLeft: 10,
                  }}
                  id="active"
                  native
                  value={boards?.active?.id || ""}
                  onChange={(event) => {
                    const { value } = event.target;

                    boards.selectBoard(value);
                  }}
                >
                  <option value={""} disabled>
                    –
                  </option>
                  {boards?.boards.map((board) => {
                    return (
                      <option key={board?.id} value={board?.id}>
                        {board?.title}
                      </option>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item>
            <User user={users?.me} />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default observer(Header);
