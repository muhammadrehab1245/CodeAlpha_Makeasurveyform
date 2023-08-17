import Notecontext from "./Notecontext";
import { useEffect, useState } from "react";

const Notestate = (props) => {
    const [user, setUser] = useState({});

    const updateUser = (data) => {
      setUser((prevUser) => ({ ...prevUser, ...data }));
    };

    const resetUser = () => {
      setUser({});
    };
    const [radioValue, setRadioValue] = useState('');

    const updateRadioValue = (newValue) => {
      setRadioValue(newValue);
    };

  return (
    <Notecontext.Provider value={{ user,updateUser,resetUser,radioValue, updateRadioValue}}>
      {props.children}
    </Notecontext.Provider>
  );
};

export default Notestate;
