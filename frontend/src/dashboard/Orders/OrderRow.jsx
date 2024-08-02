import { Fragment, useState } from "react";
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

const OrderRow = ({ name, isApprov, courseName, phone, reqId }) => {
  const theme = useTheme();
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);
  const { user } = useSelector((state) => state.auth);

  return (
    <Fragment>
      <TableRow>
        <TableCell>{name}</TableCell>
        <TableCell>{courseName}</TableCell>
        <TableCell>{phone}</TableCell>
        <TableCell>{isApprov ? "מאושר" : "ממתין"}</TableCell>
        <TableCell>
          <Button
            onClick={() => setIsOpenDelete(true)}
            variant="contained"
            color="error"
            sx={{ mx: 1 }}
          >
            מחיקת ההזמנה
          </Button>
          {!isApprov && (
            <Button
              onClick={() => setIsOpenConfirm(true)}
              variant="contained"
              color="primary"
              sx={{ mx: 1 }}
            >
              אישור ההזמנה
            </Button>
          )}
        </TableCell>
      </TableRow>

      {/* Delete Order Dialog */}
      <Dialog
        open={isOpenDelete}
        onClose={() => setIsOpenDelete(false)}
        PaperProps={{
          sx: {
            bgcolor: theme.palette.background.default,
            color: theme.palette.text.primary,
            boxShadow: theme.shadows[5],
            borderRadius: 2,
            p: 2,
          },
        }}
      >
        <DialogTitle>האם אתה בטוח?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            האם אתה בטוח שברצונך למחוק את ההזמנה? לא תוכל לשחזר אותה לאחר
            המחיקה.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "space-between" }}>
          <Button
            onClick={async () => {
              await request.delete(`/api/orders/${reqId}`, {
                headers: {
                  Authorization: "Bearer " + user?.token,
                },
              });
              toast.success("ההזמנה נמחקה בהצלחה");
              setIsOpenDelete(false);
            }}
            color="error"
            variant="contained"
          >
            מחיקת ההזמנה
          </Button>
          <Button
            onClick={() => setIsOpenDelete(false)}
            color="secondary"
            variant="outlined"
            sx={{ mr: 1 }}
          >
            ביטול
          </Button>
        </DialogActions>
      </Dialog>

      {/* Confirm Order Dialog */}
      <Dialog
        open={isOpenConfirm}
        onClose={() => setIsOpenConfirm(false)}
        PaperProps={{
          sx: {
            bgcolor: theme.palette.background.default,
            color: theme.palette.text.primary,
            boxShadow: theme.shadows[5],
            borderRadius: 2,
            p: 2,
          },
        }}
      >
        <DialogTitle>האם אתה בטוח?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            האם אתה בטוח שברצונך לאשר את ההזמנה? לא תוכל לשנות את הסטטוס לאחר
            אישור.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "space-between" }}>
          <Button
            onClick={async () => {
              await request.put(
                `/api/orders/${reqId}`,
                { isApproved: true },
                {
                  headers: {
                    Authorization: "Bearer " + user?.token,
                  },
                }
              );
              toast.success("ההזמנה אושרה בהצלחה");
              setIsOpenConfirm(false);
            }}
            color="primary"
            variant="contained"
          >
            אישור ההזמנה
          </Button>
          <Button
            onClick={() => setIsOpenConfirm(false)}
            color="secondary"
            variant="outlined"
            sx={{ mr: 1 }}
          >
            ביטול
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

OrderRow.propTypes = {
  name: PropTypes.string.isRequired,
  isApprov: PropTypes.bool.isRequired,
  courseName: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  reqId: PropTypes.string.isRequired,
};

export default OrderRow;
