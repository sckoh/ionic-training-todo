export default function CapitalizeFilter() {
  return function(text) {
    if (text.length > 0)
      return text.replace(text[0], text[0].toUpperCase());
  };
}
