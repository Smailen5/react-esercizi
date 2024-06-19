function rgbToHex(r, g, b) {
  return (
    "#" +
    [r, g, b]
      .map((el) => {
        const hex = el.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
}

export default rgbToHex;
