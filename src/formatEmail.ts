import type { Name } from "./types/Name";

const formatEmail = (name: Name) => {
  return `${name[0].toLowerCase()}@${name[1].toLowerCase()}.com`;
};

export { formatEmail };
