exports.newUserValidation = {
  username: {
    isLength: {
      errorMessage: "ID is wrong",
      options: { min: 2, max: 20 }
    }
  },
  password: {
    isLength: {
      options: { min: 8, max: 90 }
    }
  }
};

exports.userValidation = {
  size: {}
};
