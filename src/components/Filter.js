import { useState } from "react";

function Filter({filter}){
    const [formData, setFormData] = useState({filterValue: "all", min: 0, max: 6, other: "", greased: true})

    return <div>
        <br></br>
        <select onChange={e => setFormData({...formData, filterValue: e.target.value})} value={formData.filterValue}>
            <option value="all">All</option>
            <option value="name">Name</option>
            <option value="specialty">Specialty</option>
            <option value="greased">Greased</option>
            <option value="weight">Weight</option>
            <option value="highest medal achieved">Highest medal acheived</option>
        </select>
            {formData.filterValue === "weight" ? 
                <>
                    min: <input type="number" style={{width: "40px"}} min={0} max={5} onChange={e => setFormData({...formData, min: e.target.value})} value={formData.min}></input> 
                    max: <input type="number" style={{width: "40px"}} min={1} max={6} onChange={e => setFormData({...formData, max: e.target.value})} value={formData.max}></input>
                </> 
                : formData.filterValue === "all" ? null 
                : formData.filterValue === "greased" ? <select onChange={e => setFormData({...formData, greased: e.target.value})}><option value={1}>Yes</option><option value={""}>No</option></select>
                : <input type="text" onChange={e => setFormData({...formData, other: e.target.value})} value={formData.other}></input> }
            <button onClick={_ => filter(formData.filterValue, formData.min, formData.max, formData.other, formData.greased)}>filter</button>
            <button onClick={_ => {filter("all"); setFormData({filterValue: "all", min: 0, max: 6, other: "", greased: true})}}>reset filter</button>

    </div>
}

export default Filter;