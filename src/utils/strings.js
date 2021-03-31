export const capitalize = (string) =>
  string.replace(/(^\w{1})|(\s{1}\w{1})/g, (match) =>
    match.trim() === 'y' ? match : match.toUpperCase(),
  );

export const capitalizeFirstLetter = (string) =>
  string.replace(/^./, string[0].toUpperCase());
