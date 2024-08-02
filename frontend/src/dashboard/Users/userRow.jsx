import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import request from "../../utils/request";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TableRow,
  TableCell,
  useTheme,
} from "@mui/material";

const UserRow = (props) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <TableRow>
        <TableCell>{props.name}</TableCell>
        <TableCell>{props.email}</TableCell>
        <TableCell>{props.phone}</TableCell>
        <TableCell>{props.isAdmin ? "מנהל" : "משתמש"}</TableCell>
        <TableCell>
          <Button
            onClick={openModal}
            variant="contained"
            color="error"
            sx={{ mx: 1 }}
          >
            מחיקת משתמש
          </Button>
        </TableCell>
      </TableRow>

      <Dialog
        open={isOpen}
        onClose={closeModal}
        PaperProps={{
          sx: {
            bgcolor: theme.palette.background.default,
            color: theme.palette.text.primary,
          },
        }}
      >
        <DialogTitle>האם אתה בטוח?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            האם אתה בטוח שברצונך למחוק את המשתמש? לא תוכל לשחזר אותו לאחר
            המחיקה.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={async () => {
              await request.delete(`/api/users/${props.userId}`, {
                headers: {
                  Authorization: "Bearer " + user?.token,
                },
              });
              toast.success("המשתמש נמחק בהצלחה");
              setIsOpen(false);
              closeModal();
            }}
            color="error"
            variant="contained"
          >
            מחיקת משתמש
          </Button>
          <Button onClick={closeModal} color="secondary" variant="contained">
            ביטול
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

UserRow.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  userId: PropTypes.string.isRequired,
};

export default UserRow;
