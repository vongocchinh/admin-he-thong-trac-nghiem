import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Fab } from "@material-ui/core";
import LoopIcon from "@material-ui/icons/Loop";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { ExportCSV } from "./../question/export";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Scores(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [Name, setName] = useState("");
  const [IDSV, setIDSV] = useState("");
  // const [quyen, setQuyen] = useState(3);
  const [PassWord, setPassWord] = useState("");
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
    body: {
      fontSize: 13,
    },
  }))(TableCell);
  const handleReset = () => {
    props.handleReset();
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleCloseAdd = () => {
    props.addUserCategory({
      IDSV: IDSV,
      count: 0,
      itemR: 0,
      itemW: 0,
      rules: "",
      online: false,
      fullname: Name,
      passWord: PassWord,
      quyen:parseInt(3)
    });
    setIDSV("");
    setName("");
    setPassWord("");
    setOpen(false);
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeIDSV = (e) => {
    setIDSV(e.target.value);
  };
  const onChangePass = (e) => {
    setPassWord(e.target.value);
  };
  // const onChangeQuyen=(e)=>{
  //   setQuyen(e.target.value);
  // }
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="form-dialog-title">Th??m Sinh Vi??n</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="a"
            label="Full Name"
            type="text"
            className="dialog-category-add"
            width="300px"
            onChange={onChangeName}
          />
          <TextField
            autoFocus
            margin="dense"
            id="b"
            label="M?? Sinh Vi??n"
            type="text"
            className="dialog-category-add"
            width="300px"
            onChange={onChangeIDSV}
          />
          <TextField
            autoFocus
            margin="dense"
            id="b"
            label="PassWord"
            type="text"
            className="dialog-category-add"
            width="300px"
            onChange={onChangePass}
          />
          {/* <TextField
            autoFocus
            margin="dense"
            id="b"
            label="Ph??n Quy???n"
            type="number"
            className="dialog-category-add"
            width="300px"
            onChange={onChangeQuyen}
          /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            H???y
          </Button>
          <Button onClick={handleCloseAdd} color="primary">
            Th??m
          </Button>
        </DialogActions>
      </Dialog>
      <div className="container">
        <div className="container-layout">
        <p className="p-h">
            Danh S??ch Sinh Vi??n Thi{" "}
            {props.CategoryDetailStore.data
              ? props.CategoryDetailStore.data.name
              : ""}
          </p>
          <div className="add-icon-layout">
            <div>
              <Fab
                size="small"
                color="primary"
                onClick={handleReset}
                aria-label="add"
              >
                <LoopIcon size="small" />
              </Fab>
              &nbsp;
              <Fab
                size="small"
                color="primary"
                onClick={handleOpen}
                aria-label="add"
              >
                <AddCircleOutlineIcon size="small" />
              </Fab>
            </div>

            <ExportCSV
              csvData={props.User}
              fileName={"Danh S??ch ??i???m Sinh Vi??n"}
            />
          </div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Stt</StyledTableCell>
                  <StyledTableCell align="right">T??n Sinh Vi??n</StyledTableCell>
                  <StyledTableCell align="right">M?? Sinh Vi??n</StyledTableCell>
                  <StyledTableCell align="right">??i???m</StyledTableCell>
                  <StyledTableCell align="right">Tham gia</StyledTableCell>
                  <StyledTableCell align="right">online</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>{props.show}</TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}
