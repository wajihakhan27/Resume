import About from "./component/about"
import Contact from "./component/contact"
import Education from "./component/education"
import Experiance from "./component/experiance"
import OtherActivity from "./component/extraactivity"
import ExtraEducation from "./component/extraeducation"
import Skill from "./component/skill"
import Image from 'next/image';

export default function Home() {
    return (
        <div style={{
            backgroundColor: "snow",
            fontFamily: "Arial, sans-serif",
            padding: "20px",
            width: "8.27in",
            minHeight: "11.69in",
            margin: "0 auto",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)"
        }}>

            {/* Header Section */}
            <div style={{
                display: "flex",          // Enables side-by-side layout
                alignItems: "center",      // Vertically aligns items in the center
                justifyContent: "space-between", // Places the header on the right side
                marginBottom: "20px"
            }}>
                {/* Profile Image (Left Side) */}

                <Image src="pic.avif"  alt="Profile"
                    style={{
                        width: '200px',
                        height: '150px',
                        borderRadius: '50%',  // Circular shape
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow effect
                        border: '3px solid white', // Optional white border for emphasis
                        marginRight: '20px' // Adds space between the image and header
                    }} />
               L
                   
               

                {/* Header Content (Right Side) */}
                <div style={{
                    textAlign: "center",
                    backgroundColor: "#f0f0f0",
                    padding: "10px",
                    width: "500px",
                    borderRadius: "5px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
                }}>
                    <h1 style={{
                        fontSize: "32px",
                        margin: "0",
                        color: "#333",
                        fontFamily: "'Arial', sans-serif",
                        fontWeight: "bold",
                        letterSpacing: "1.5px"
                    }}>
                        WAJIHA SALMAN KHAN
                    </h1>
                </div>
            </div>


            {/* Left and Right Sections */}
            <div style={{ display: 'flex' }}>
                <div style={{
                    flex: '1',
                    backgroundColor: "grey",
                    height: "10in",
                    width: "3in",
                    padding: '20px',
                    borderRadius: '8px',
                    marginRight: '20px',
                    // textAlign: 'center'
                }}>
                    <About />
                    <Contact />
                    <Skill />
                    <OtherActivity />
                </div>

                <div style={{
                    flex: '2',
                    backgroundColor: '#ffffff',
                    padding: '10px',
                    borderRadius: '8px',
                    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                    height: "10in",
                    width: "3in",
                }}>
                    <Education/>
                    <Experiance />
                    <ExtraEducation/>
                </div>
            </div>
        </div>
    );
}
