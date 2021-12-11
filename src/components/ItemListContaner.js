import React, { Fragment } from "react";
import ClassButton from "./button";

const Saludo = (props) => {
console.log(props)

return (
<Fragment><h2>ESTA ES MI :{props.persona}</h2></Fragment>
)
}
export default Saludo;
