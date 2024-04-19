import {useSnackbar} from "notistack";

export const useNotification = ()=> {
    const {enqueueSnackbar} = useSnackbar();
    const notify = (message, variant = 'success', options = {}) => {
        enqueueSnackbar(message, {
            variant: variant,
            autoHideDuration: 3000,
            ...options
        });
    };

    const errorNotify = (message = "مشگلی وجود دارد", options = {}) => {
        enqueueSnackbar(message, {
            variant: 'error',
            autoHideDuration: 3000,
            ...options
        });
    };

    return {notify, errorNotify};
}