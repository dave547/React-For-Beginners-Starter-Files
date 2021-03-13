import React from "react";

// more efficient way of doing this
const Header = props => (
    <header className="top">
        <h1>Catch 
            <span className="ofThe">
                <span className="of">of</span>
                <span className="the"> the</span>
            </span> 
        day</h1>
        <h3 className="tagline">
            <span>{props.tagline}</span>
        </h3>
    </header>
)

// Component way of doing this
// class Header extends React.Component {
//     render() {
//         return (
      
//            <header className="top">
//                 <h1>Catch 
//                     <span className="ofThe">
//                         <span className="of">of</span>
//                         <span className="the"> the</span>
//                     </span> 
//                 day</h1>
//                 <h3 className="tagline">
//                     <span>{this.props.tagline}</span>
//                 </h3>
//            </header>
                
  
//        )
//     }
// }

export default Header;