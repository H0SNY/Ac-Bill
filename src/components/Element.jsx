import { useState } from "react";
import { getResults } from "../ops";

export default function Element({name , type , value : val}){
	const [value , setValue] = useState(val);
	const handleChange = e =>{
		setValue(e.target.value)
	}
	let mytype = "text";
	if(type === "elements") mytype = "number";
	return (<div className="flex gap-x-2 p-2 items-center">
	<label className="w-14" htmlFor = {name}>{name}</label>
	{type === "results" ?  (<p>{getResults() ?  String(getResults()) : "0"}</p>) :<input  className="text-black h-5"  id = {name} value = {value} onChange = {handleChange} type = {mytype} name={name} onWheel = {e =>{e.currentTarget.blur()}}/>}</div>)
}