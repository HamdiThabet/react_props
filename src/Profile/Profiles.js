import React from "react"
import propstype from "prop-types"

const Profiles = (props) => {

   const butn= {color:" red"}
   return (
      <div className="propsclass" style={{width:"150"}}>
         <div>
            <div>
               <img style={{ height: "200px", width: "200px" }} src={props.Image} />
<br></br>
<br></br>

            </div>
            <div>
               <p> {props.FullName}</p>
               <br></br>
               <br></br>
               <p> {props.Profession}</p>
            </div>
         </div>
         <br></br>
         <br></br>
         <br></br>
         <br></br>

         <button className="btnclass" style={butn} onClick={() => props.alertMyInput(`My name is :`+props.FullName)}>
                      confirmer
         </button>
      </div>
   )
}
Profiles.propstype={
   FullName:propstype.string,
   Profession:propstype.string,
}
export default Profiles
