import React from 'react'


export default function About(props) {
    // const[mystyle,setMyStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })

    let mystyle = {
        color:props.mode === "dark"?"white":"#343a40",
        backgroundColor:props.mode === "dark"?"#343a40":"white"
    }
    // const[btntext,setBtnText] = useState("Enable Dark Mode")
    // const toggleStyle =()=>{
    //     if(mystyle.color === 'white'){
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white',
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border:'1px solid black'
    //         })
    //         setBtnText("Enable Light Mode");
    //     }
    // }

    return (
        <div className='container' style={mystyle}>
            <h1 className='my-2'>About Us</h1>
            <div className="accordion" id="accordionExample" style={mystyle}>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Analyze Your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione excepturi, omnis quam doloremque dolores eum porro? Alias non temporibus dignissimos libero deserunt adipisci perspiciatis quae error totam omnis eius beatae dolor ducimus eligendi magni asperiores consectetur architecto aliquid, ad placeat molestiae? Commodi minus modi neque odit ex ab placeat ipsum.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free To Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit magni natus, minima enim animi voluptatem modi error saepe atque in repellat id? Corporis excepturi ipsa incidunt perspiciatis rem obcaecati veritatis sunt itaque, delectus soluta numquam sequi sed reprehenderit libero ex.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tenetur ipsa deleniti? Facilis aut porro ipsa voluptate sequi, maxime nisi laudantium, recusandae temporibus ipsum repudiandae voluptatibus eligendi totam a autem odit sapiente id suscipit molestias! Tempora consequuntur ea mollitia, esse obcaecati corrupti unde dolore debitis.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
