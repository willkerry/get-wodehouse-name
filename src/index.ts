import { getRandomName } from "./getRandomName";
import { formatEmail } from "./formatEmail";

/**
 * Get the full name of a Wodehouse character
 *
 * @returns A random Wodehouse name
 * @example
 * ```
 * const wodehouseName = getWodehouseName();
 * //=> "Bertie Wooster"
 * ```
 */
export const getWodehouseName = () => {
  return getRandomName().join(" ");
};

/**
 * Get the first name of a Wodehouse character
 * @returns A random Wodehouse first name
 * @example
 * ```
 * const wodehouseFirstName = getWodehouseFirstName();
 * //=> "Bertie"
 * ```
 */
export const getWodehouseFirstName = () => {
  return getRandomName()[0];
};

/**
 * Get the last name of a Wodehouse character
 * @returns A random Wodehouse last name
 * @example
 * ```
 * const wodehouseLastName = getWodehouseLastName();
 * //=> "Wooster"
 * ```
 */
export const getWodehouseLastName = () => {
  return getRandomName()[1];
};

/**
 * Get the email address of a Wodehouse character
 * @returns A random Wodehouse email address
 * @example
 * ```
 * const wodehouseEmail = getWodehouseEmail();
 * //=> "bertie@wooster.com"
 * ```
 */
export const getWodehouseEmail = () => {
  return formatEmail(getRandomName());
};

/**
 * Get the 'full details' of a Wodehouse character
 *
 * @returns An object containing the first name, last name and email address of a Wodehouse character
 * @example
 * ```
 * const wodehouseDetails = getWodehouseFullDetails();
 * //=> { firstName: "Bertie", lastName: "Wooster", email: "bertie@wooster.com" }
 * ```
 */
export const getWodehouseFullDetails = () => {
  const name = getRandomName();
  return {
    firstName: name[0],
    lastName: name[1],
    email: formatEmail(name),
  };
};

/**
 * Get the 'full details' of a composite Wodehouse character, whose first name is a random Wodehouse
 * first name and whose last name is a random Wodehouse last name
 *
 * @returns An object containing the first name of a Wodehouse character, the last name of a Wodehouse
 * character and an email address combining the two
 * @example
 * ```
 * const compositeWodehouseDetails = getCompositeWodehouseFullDetails();
 * //=> { firstName: "Bertie", lastName: "Bassington-Bassington", email: "bertie@bassington-bassington.com" }
 * ```
 */
export const getCompositeWodehouseFullDetails = () => {
  const firstName = getWodehouseFirstName();
  const lastName = getWodehouseLastName();
  const email = formatEmail([firstName, lastName]);

  return { firstName, lastName, email };
};
