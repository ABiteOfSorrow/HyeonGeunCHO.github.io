import backImg from "./styles/images/autumn.jpg";

//pause

function Top() {
    return (
        <div style={{position: "relative"}}>
        <div style={{position: "absolute", top: "20%", left: "50%", margin: "0", padding: "0", transform: "translate(-50%, -50%)"}}> 
            <p>Développeur FullStack junior</p>
            <h1>HyeonGeun CHO</h1>
        </div>
            <img src={backImg} alt="background-img" style={{width: "100%", height: "90vh"}}/>
            </div>
    )
}

export default Top;