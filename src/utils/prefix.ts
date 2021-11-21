type Params = {
  prefix: string;
  text: string;
};

export const removePrefix = ({ prefix, text }: Params) =>
  text.startsWith(prefix) ? text.slice(prefix.length) : text;

export const prefixText = ({ prefix, text }: Params) => {
  let finalText = removePrefix({ prefix, text });

  finalText = `${prefix}${finalText}`;
  return finalText;
};
