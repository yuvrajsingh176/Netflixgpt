export const checkValidateData = (email,password) => {
    const isemailValid = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
    const isPasswordValid=/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password)
    if (!isemailValid) {
        return "Email is not valid";
}
if (!isPasswordValid) {
    return "Password is not valid";
    }

}
