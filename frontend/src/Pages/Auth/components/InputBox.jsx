import PropTypes from "prop-types";
import { TextField, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const InputBox = ({ type, placeholder, name, value, onChange }) => {
  const theme = useTheme();

  return (
    <Box mb={3}>
      <TextField
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        placeholder={placeholder}
        fullWidth
        variant="outlined"
        sx={{
          minWidth: "290px",
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
            bgcolor: theme.palette.background.paper,
            borderColor: theme.palette.primary.main,
            "&.Mui-focused fieldset": {
              borderColor: theme.palette.primary.main,
            },
            boxShadow: theme.shadows[1],
            transition: theme.transitions.create(
              ["box-shadow", "border-color"],
              {
                duration: theme.transitions.duration.short,
              }
            ),
            "&:hover fieldset": {
              borderColor: theme.palette.primary.light,
            },
          },
          "& .MuiInputBase-input": {
            color: theme.palette.text.primary,
            padding: theme.spacing(2),
            transition: theme.transitions.create(
              ["padding", "background-color"],
              {
                duration: theme.transitions.duration.shortest,
              }
            ),
            "&:hover": {
              bgcolor: theme.palette.action.hover,
            },
          },
        }}
      />
    </Box>
  );
};

InputBox.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputBox;
