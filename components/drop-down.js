
const Dropdown = (props) => {
    return (    
     props.show ? <div className="Backdrop"
     onClick={props.clicked} ></div> 
      : null
     );
}
 
export default Dropdown;