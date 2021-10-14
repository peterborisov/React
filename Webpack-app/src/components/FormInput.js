import { memo } from "react";
import TextField from "@material-ui/core/TextField";

const FormInput = ({ placeholder, value, handleOnchange }) => {
    return (
        <TextField
            placeholder={placeholder}
            value={value}
            onChange={handleOnchange}
        />
    )
}

export default memo(FormInput);