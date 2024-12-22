import { TextField } from "@mui/material";

  

  type Props = {

    name: string,
    type: string,
    label: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: string
    
  };

  
  const CustomizedInput = (props: Props) => {
    return (
     <TextField
     margin="normal"
     slotProps={{inputLabel: {sx: {color: "white"}}}}
     name={props.name}
     type={props.type}
     label={props.label} 
     onChange={props.onChange}
     value={props.value}
     InputProps={{
      style: {
        width: "400px",
        borderRadius: 10,
        fontSize: 20,
        color: "white",
      },
    }}
    
     />

    
    )
  }
  
  export default CustomizedInput