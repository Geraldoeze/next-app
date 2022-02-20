
const Filter = (props) => {
    return (    
     props.show ? <div className="Backdrop"
     onClick={props.clicked} ></div> 
      : null
     );
}
 
export default Filter;