function Skill() {
    return (
        <div style={{
            marginBottom: "20px",
            padding: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "5px"
        }}>

            <div style={{
                //padding: "5px",
                margin: "5px",
                border: "2px solid black",
                borderRadius: "5px",
                backgroundColor: "grey",
                textAlign: "center"
            }}>
                <h2 style={{
                    fontSize: "20px",
                    margin: "0",
                    fontWeight: "bold",
                    fontFamily: "revert-layer"
                }}>      SKILLS  </h2>
            </div>

            <ul>
                <h3 style={{
                    fontSize: "15px",
                    margin: "0",
                    fontWeight: "bold",
                    fontFamily: "revert-layer"
                }}>SOFT SKILLS</h3>

                <li style={{ fontSize: "15px", fontFamily: "revert" }}>Strong Communication</li>
                <li style={{ fontSize: "15px", fontFamily: "revert"  }}>Active Listening</li>
                <li style={{ fontSize: "15px", fontFamily: "revert"}}>Problem Solving</li>
                <li style={{ fontSize: "15px", fontFamily: "revert"  }}>Team Leadership</li>
                <li style={{ fontSize: "15px", fontFamily: "revert"}}>Adaptability</li>



            </ul>

            <ul>
                <h3 style={{
                    fontSize: "15px",
                    margin: "0",
                    fontWeight: "bold",
                    fontFamily: "revert-layer"
                }}> HARD SKILLS </h3>
                <li style={{ fontSize: "15px", fontFamily: "revert" }}>HTML</li>
                <li style={{ fontSize: "15px", fontFamily: "revert" }}>CSS</li>
                <li style={{ fontSize: "15px", fontFamily: "revert"}}>TypeScript</li>
                <li style={{ fontSize: "15px", fontFamily: "revert"}}>Exploratory Data Analysis (EDA)</li>
            </ul>


        </div>
    )
}
export default Skill