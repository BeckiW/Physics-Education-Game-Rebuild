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

exports.userValidation = {
  resultid: {
    in: ["params", "query"],
    errorMessage: "ID is wrong",
    isLength: {
      errorMessage: "id should be betweek 1 and 20 letters",
      options: { min: 1, max: 20 }
    }
  }
};
