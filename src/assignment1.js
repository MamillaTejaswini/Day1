function Assignment1(){
    const Array1=["Reviewer Name","Product is good"];
    const Array1List=Array1.map((ReviewerName,index) => <li key={index}>{ReviewerName}</li>)
    const Array2=["Reviewer Name","Product is good"];
    const Array2List=Array2.map((ReviewerName,index) => <li key={index}>{ReviewerName}</li>)
    return (
        <div>
            <h3>Reviews</h3>
        <div>
            <img src='/book.jpeg'height='25px'weight='30px'></img>
            <ul>
                {Array1List}
            </ul>
        </div>
        <div>
            <ul>
            <img src='/book.jpeg'height='25px'weight='30px'></img>
            {Array2List}
            </ul>
    </div>
    </div>
    );
}
export default Assignment1;