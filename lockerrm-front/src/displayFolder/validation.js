const validation = (user) => {
    let errors = {};

    if(!user.username){
        errors.username="**Username is required"

    }
    if(!user.password){
        errors.password="**Password is required"
    }
    return errors;
}
export default validation;