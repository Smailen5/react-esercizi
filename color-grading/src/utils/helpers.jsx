function rgbToHex(r, g, b) {
  return (
    "#" +
    [r, g, b]
      .map((el) => {
        const hex = el.toString(16);
        return hex.length === 1 ? "0" + hex : hex; // controlla, se selezioni 10 sfumature ne crea 11, sempre una bianca e una nera
      })
      .join("")
  );
}

export default rgbToHex;
