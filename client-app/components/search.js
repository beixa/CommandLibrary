import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { blue } from "@material-ui/core/colors";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

export default function Search({searchTerm, handleChange}) {

  return (
    <div >
      <ThemeProvider theme={theme}>
        <TextField
          id="input-with-icon-textfield"
          label="Search"
          variant="outlined"
          onChange={handleChange}
          value={searchTerm}
          InputProps={{
            type: "search",
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
            ),
            
          }}
        />
      </ThemeProvider>
    </div>
  );
}
