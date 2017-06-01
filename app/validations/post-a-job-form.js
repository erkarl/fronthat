const postAJobFormValidator = {
  name: (name) => {
    if (name.length < 3) {
      return ['Name must be at least 3 characters.'];
    }
    if (name.length > 255) {
      return ['Name is too long. Maximum 255 characters allowed.'];
    }
    return [];
  },
  email: (email) => {
    const isInvalidEmail = () => {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return !re.test(email);
    };
    if (isInvalidEmail()) {
      return ['Please enter a valid email address.'];
    }
    return [];
  },
  title: (title) => {
    if (title.length < 10) {
      return ['Title must be at least 10 characters.'];
    }
    if (title.length > 255) {
      return ['Title is too long. Maximum 255 characters allowed.'];
    }
    return [];
  },
  url: (url) => {
    const isInvalidUrl = () => {
      const re = new RegExp(
        "^" +
          // protocol identifier
          "(?:(?:https?|ftp)://)?" +
          // user:pass authentication
          "(?:\\S+(?::\\S*)?@)?" +
          "(?:" +
            // IP address exclusion
            // private & local networks
            "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
            "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
            "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
            // IP address dotted notation octets
            // excludes loopback network 0.0.0.0
            // excludes reserved space >= 224.0.0.0
            // excludes network & broacast addresses
            // (first & last IP address of each class)
            "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
            "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
            "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
          "|" +
            // host name
            "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" +
            // domain name
            "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" +
            // TLD identifier
            "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
            // TLD may end with dot
            "\\.?" +
          ")" +
          // port number
          "(?::\\d{2,5})?" +
          // resource path
          "(?:[/?#]\\S*)?" +
        "$", "i"
      );
      return !re.test(url);
    };
    if (isInvalidUrl()) {
      return ['Please enter a valid URL.'];
    }
    return [];
  },
  description: (description) => {
    if (description.length < 70) {
      return ['Description must be at least 70 characters.'];
    }
    if (description.length > 15000) {
      return ['Description is too long. Maximum 15000 characters allowed.'];
    }
    return [];
  },
};
export default postAJobFormValidator;