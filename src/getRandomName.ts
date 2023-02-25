import { NAMES } from "./names";
import type {Name} from "./types/Name";

const getRandomName = () => {
    return NAMES[Math.floor(Math.random() * NAMES.length)] as Name;
};

export { getRandomName };