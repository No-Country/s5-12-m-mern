import bcrypt from "bcrypt"

const hashFunction = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
}

const comparePassword = (password, passwordToCompare) => {
    return bcrypt.compare(password, passwordToCompare);
};

export {hashFunction, comparePassword}