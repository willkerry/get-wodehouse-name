import type { Name } from "./types/Name";

const formatEmail = (name: Name) => {
  const [lowercaseFirstName, lowercaseLastName] = name.map((namePart) =>
    namePart.toLowerCase()
  );

  return `${lowercaseFirstName}@${lowercaseLastName}.com`;
};

export { formatEmail };
