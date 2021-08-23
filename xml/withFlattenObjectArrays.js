const capitalize = (str) => `${str[0].toUpperCase()}${str.substring(1)}`;
const snakeToCamel = (str) => {
  const [firstWord, ...rest] = str.split("-");
  return `${firstWord}${rest.map(capitalize).join("")}`;
};

module.exports = () => ({
  flattenObjectArrays(value) {
    if (Array.isArray(value)) {
      if (value.length === 1) {
        return this.flattenObjectArrays(value[0]);
      } else {
        return value.map((v) => this.flattenObjectArrays(v));
      }
    } else if (typeof value === "object") {
      const result = {};
      for (const key in value) {
        let newKey = key;
        if (key.includes("-")) {
          newKey = snakeToCamel(key);
        }
        result[newKey] = this.flattenObjectArrays(value[key]);
      }
      return result;
    } else return value;
  },
});
