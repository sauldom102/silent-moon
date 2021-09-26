const addAlpha = (color: string, opacity: number) => {
  const finalOpacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + finalOpacity.toString(16).toUpperCase();
};

export default addAlpha;
