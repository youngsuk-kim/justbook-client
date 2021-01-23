import { useForm } from "react-hook-form";
import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Postcode from "../components/DaumApi";
import {
  Typography,
  Button,
  Container,
  CssBaseline,
  Dialog,
  TextField,
} from "@material-ui/core";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(2),
    fontSize: "3rem",
  },
  adressBox: {
    display: "flex",
    alignItems: "center",
  },
  adressBtn: {
    marginTop: "5px",
    marginLeft: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  label: {
    marginBottom: theme.spacing(2),
  },
}));

const Register = () => {
  const classes = useStyles();

  const { register, handleSubmit, watch, errors } = useForm();
  const [isOpen, setIsOpen] = useState(false);
  const [Adress, setAdress] = useState("");

  const password = useRef({});
  password.current = watch("password", "");

  function handleClickOpen() {
    setIsOpen(!isOpen);
  }

  function handleClose(value) {
    if (typeof value === "string") {
      setAdress(value);
    }
    setIsOpen(!isOpen);
  }

  return (
    <Container component="main">
      <CssBaseline />
      <div className={classes.paper}>
        <AccessibilityNewIcon className={classes.avatar} />
        <Typography className={classes.label} component="h1" variant="h5">
          회원가입
        </Typography>
        <form onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
          <TextField
            label="이메일"
            variant="outlined"
            margin="dense"
            name="email"
            type="email"
            helperText={errors.email && "이메일을 입력해주세요"}
            error={errors.email}
            inputRef={register({
              required: true,
            })}
          />
          <br />
          <TextField
            label="비밀번호"
            variant="outlined"
            margin="dense"
            name="password"
            type="password"
            helperText={errors.password && "비밀번호를 입력해주세요"}
            error={errors.email}
            intputRef={register({
              required: true,
            })}
          />
          <br />
          <TextField
            label="비밀번호 확인"
            variant="outlined"
            margin="dense"
            name="passwordRepeat"
            type="password"
            helperText={errors.passwordRepeat && "비밀번호 확인을 입력해주세요"}
            error={errors.passwordRepeat}
            inputRef={register({
              required: true,
            })}
          />
          <br />
          <TextField
            label="핸드폰 번호"
            variant="outlined"
            margin="dense"
            name="phone"
            type="phone"
            helperText={errors.phone && "핸드폰 번호를 입력해주세요"}
            error={errors.phone}
            inputRef={register({
              required: true,
            })}
          />
          <br />
          <div className={classes.adressBox}>
            <TextField
              label="주소"
              name="adress"
              margin="dense"
              type="text"
              helperText={errors.adress && "주소를 입력해주세요"}
              error={errors.adress}
              inputRef={register({
                required: true,
              })}
              value={Adress}
              variant="outlined"
            />
            <Button
              className={classes.adressBtn}
              variant="outlined"
              color="primary"
              onClick={handleClickOpen}
            >
              주소 찾기
            </Button>
          </div>
          <Dialog open={isOpen} onClose={handleClose}>
            <Postcode onRequestClose={handleClose} />
          </Dialog>
          <TextField
            name="adressDetail"
            type="text"
            margin="dense"
            fullWidth
            inputRef={register}
            label="나머지주소"
            variant="outlined"
          />

          <Button
            className={classes.submit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            확인
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Register;
