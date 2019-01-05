function parseJSONToObject(data) {
  try {
    const parsed = JSON.parse(data);
    return parsed;
  } catch (e) {
    return {};
  }
}

module.exports = {
  parseJSONToObject
};
