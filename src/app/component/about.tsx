function About() {
    return (
        <div style={{
            marginBottom: "20px",
            padding: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "5px"
        }}>
            <div style={{
                //padding: "5px",
                margin: "10px",
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
                }}>    ABOUT ME  </h2>
            </div>


            <p style={{ fontSize: "15px", lineHeight: "1.5" }}>
                “A PASSIONATE YOUNG PROFESSIONAL HAVING A GOOD ACADEMIC RECORD AND MOTIVATED TO PROGRESS WITHIN THE FINANCIAL INDUSTRY.”
            </p>


        </div>
    )
}

export default About;
