export default {
  generateKey: (props) =>
    Object.keys(props)
      .map((key) => key + ':' + props[key])
      .join(';'),
};
