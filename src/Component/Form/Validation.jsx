const Validation = (userdetails)=>{
   const errors = {}

    const emailPattern = /^[^\s@]+[@][\w]+[\.][a-z]{2,3}$/

    const passwordPattern = /^[^\s]{8,}$/

    if(userdetails.name === ""){
        errors.name = 'Name is required'
    }

    if(userdetails.email === ""){
        errors.email = "Email is Required"
    }else if(!emailPattern.test(userdetails.email)){
        errors.email = "Email does not match"
    }

    if(userdetails.password === ""){
        errors.password = "Password is Required"
    }else if(!passwordPattern.test(userdetails.password)){
        errors.password = "Password does not match"
    }

    return  errors
}

export default Validation;