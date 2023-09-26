import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { addUser } from "../slice/userSlice";
import { Button, TextField } from './index';

const AddUser = () => {
  const [values, setValues] = useState({ title: '', description: '' });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddUser = () => {
    // console.log(values);
    dispatch(addUser({
      id: uuidv4(),
      title: values.title,
      description: values.description
    }));
    setValues({ title: "", description: "" });
    navigate("/");
  }

  return (
    <div className="font-medium mt-10 max-w-xl mx-auto">
      <TextField
        label={"Title"}
        inputProps={{ type: "text", placeholder: "Task" }}
        value={values.title}
        onChange={(e) => setValues({ ...values, title: e.target.value })}
      />
      <br />
      <TextField 
        label={"Description"}
        inputProps={{ type: "text", placeholder: "working" }}
        value={values.email}
        onChange={(e) => setValues({ ...values, description: e.target.value })}
      />
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  );
}

export default AddUser;