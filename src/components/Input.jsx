const Input = ({type="text", label, id, name, value, onChange}) => {
    return (  
       <div className="inputField">
        {label && <p><label>{label}</label></p>}
        <input type={type} id={id} name={name} value={value} onChange={onChange}  />
       </div>
    );
}
 
export default Input;