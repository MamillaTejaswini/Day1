function Fourth(){
let condition=true;
// if(condition){
//     return (
//     <div>
//         <h1>Hello</h1>
//     </div>);
// }
// else{
//     return (
//     <div>
//         <h1>Hi</h1>
//     </div>);
// }
return(
    <div>
        {condition?'This is True':'This is False'}
    </div>
);
}
export default Fourth;
