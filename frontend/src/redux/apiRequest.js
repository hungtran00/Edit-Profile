import { updateStart, updateSuccess, upsdateError } from "./useSlice";
import axios from "axios"

export const updateUser = async (user, dispatch)=> {
    dispatch(updateStart());
    try {
        const res = await axios.post("/v1/update", user);
        dispatch(updateSuccess(res.data))
    }catch(error) {
        dispatch(upsdateError());
    }
}
