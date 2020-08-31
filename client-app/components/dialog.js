import React, { useState } from "react";
import axios from "axios";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import {
  Button,
  Dialog,
  DialogTitle,
  FormControl,
  Input,
  InputLabel,
  DialogActions,
} from "@material-ui/core";
import styles from "../styles/Dialog.module.css";

export default function FormDialog() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const [command, setCommand] = useState({
    howTo: '',
    line: '',
    platform: 'Windows',
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/commands/', command)
    .then(function (response) {
      console.log(response);
      handleClick()
    })
  };

  const handleChange = (e) => {
    setCommand({...command, [e.target.name]: e.target.value });
  }

  return (
    <div >
        <Button variant="contained" onClick={handleClick}>
          <AddOutlinedIcon />
          Add Command
        </Button>
      <Dialog
        open={open}
        onClose={handleClick}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add a new command</DialogTitle>
        <form className={styles.form} onSubmit={handleSubmit}>
          <FormControl className={styles.input}>
            <InputLabel htmlFor="howTo">Description</InputLabel>
            <Input
              type="text"
              variant="outlined"
              placeholder="How to"
              name="howTo"
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl >
            <InputLabel htmlFor="line">Command syntax</InputLabel>
            <Input
              className="input"
              type="text"
              placeholder="Command syntax"
              name="line"
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl >
            <InputLabel htmlFor="platform">Platform</InputLabel>
            <Input
              className="input"
              type="text"
              placeholder="Platform"
              name="platform"
              onChange={handleChange}
              required
            />
          </FormControl>
          <DialogActions>
            <Button type="submit" color="primary">
              Create
            </Button>
            <Button onClick={handleClick} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
