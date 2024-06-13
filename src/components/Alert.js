import styled from "styled-components"
import useDefaultState from "../utils/default";
import { useEffect } from "react";

const Alert = () => {
    const { alert, showAlert } = useDefaultState();
    useEffect(() => {
        showAlert("danger", "Registration")
    }, [])
  return (
    <Alarm className={`d-none position-absolute shadow-lg bg-light d-flex align-items-center rounded-3 ${alert.type}`}>
      <p className="alarm-msg m-0">{alert.msg}</p>
      <span className={`close badge ms-auto ${alert.type}`}>
        X
      </span>
    </Alarm>
  )
}

const Alarm = styled.div`
min-width: 179px;
height: 52px;
top: 50px;
left: 30%;
z-index: 20;
padding: 16px 20px;

&.danger {
    border: 1px solid var(--primary);
}
&.success {
    border: 1px solid var(--primary-purple);
}
.close {
    &.danger {
        background-color: var(--border-red);
        color: var(--primary)
    }
    &.success {
        background-color: var(--border-purple);
        color: var(--primary-purple)
    }
}
`

export default Alert
