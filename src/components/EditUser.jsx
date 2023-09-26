import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser } from "../slice/userSlice";
import { Button, TextField } from './index';

const EditUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const users = useSelector((store) => store.user);
  // console.log(params.id, typeof params.id);
  const existingUser = users.filter((user) => user.id === params.id);
  const { title, description } = existingUser[0];
  const [values, setValues] = useState({ title: title, description: description });
  
  const handleEditUser = () => {
    dispatch(editUser({
      id: params.id,
      title: values.title,
      description: values.description
    }));
    setValues({ title: '', description: '' });
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
        value={values.description}
        onChange={(e) => setValues({ ...values, description: e.target.value })}
      />
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  );
}

export default EditUser;