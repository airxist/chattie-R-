import { useState } from "react"

const useLocalState = () => {
    const [ loading, setLoading ] = useState(false);
    const [ success, setSuccess ] = useState(false);
    const [ alert, setAlert ] = useState({
        show: false,
        type: "danger",
        msg: ""
    })
    const showAlert = (type = "danger", msg = "Something went wrong") => {
        setAlert({ show: true, type, msg })
    }
    const hideAlert = () => setAlert(prev => ({...prev, show: false}))

    return {
        loading,
        alert,
        showAlert,
        hideAlert,
        success
    }
}

export default useLocalState;