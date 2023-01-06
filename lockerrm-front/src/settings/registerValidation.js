const registerValidation = (user) => {
    let errors = {};
    const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if(!user.firstName){
        errors.firstName = "**First Name required"
    }
    if(!user.lastName){
        errors.lastName = "**Last Name required"
    }
    if(!user.username){
        errors.username = "**Username required"
    }
    if(!user.favoriteTeam){
        errors.favoriteTeam = "**Favorite Team required"
    }
    if(!user.username){
        errors.username = "username required"
    }
    if(!user.password){
        errors.password = "Password required"
    } else if(!PASSWORD_REGEX.test(user.password)){
        errors.password = "**Password must contain at least 7 characters & 1 number"
    }
    // if(!user.confirmPassword){
    //     errors.username = "**Username required"
    // }
    if(!user.email){
        errors.email = "**Email required"
    }else if(!EMAIL_REGEX.test(user.email)){
        errors.email = "**Not a valid email"
    }
    // if (user.password !== user.confirmPassword){
    //     errors.password = "**Passwords doesn't match"
    // }
    return errors;
}
export default registerValidation;