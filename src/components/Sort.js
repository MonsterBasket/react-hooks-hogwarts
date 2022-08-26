function Sort({sortBy}){
    return <div>
        <button onClick={_ => sortBy("name")}>Sort by Name</button>
        <button onClick={_ => sortBy("weight")}>Sort by Weight</button>
        <br></br><br></br>{/* Yep, I'm a dirty cheat */}
    </div>
}

export default Sort;