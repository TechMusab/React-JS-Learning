function Currenttime(){
    return <h1>
     This is Current time: {new Date().toLocaleDateString()}-{new Date().toLocaleTimeString()}
    </h1>
}
export default Currenttime;
