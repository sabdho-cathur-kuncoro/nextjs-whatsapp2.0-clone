import { Circle } from "better-react-spinkit"

function Loading() {
    return (
        <center style={{display: "grid", placeItems: "center", height: "100vh"}}>
            <div>
                <img 
                    src="https://www.its.ac.id/mt/wp-content/uploads/sites/48/2020/07/77220-scalable-vector-graphics-logo-whatsapp-icon-thumb.png" 
                    alt="" 
                    height={200}
                    style={{marginBottom: 10}}
                />
                <Circle color="#3cbc28" size={60} />
            </div>
        </center>
        
    )
}

export default Loading
