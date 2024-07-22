function Third(){
    const Array1=["AIML","IT","AIDS","CSE","CS"];
    const Array1List=Array1.map((branch,index) => <li key={index}>{branch}</li>)
    return (
        <div>
            <h1>List of branches</h1>
            <ul>
                {Array1List}


            </ul>
        </div>
    )
}
export default Third;