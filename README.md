A tiny package that returns P.G. Wodehouse character names.
## Installation

```
$ npm install get-wodehouse-name
```

## Usage

### `getWodehouseName()`

Returns a the full name of a character from the works of P.G. Wodehouse.

```js
import { getWodehouseName } from 'get-wodehouse-name';

const name = getWodehouseName();
//    ^ 'Bertie Wooster'
```

### `getWodehouseFirstName()`

Returns a first name of a character from the works of P.G. Wodehouse.

```js
import { getWodehouseFirstName } from 'get-wodehouse-name';

const firstName = getWodehouseFirstName();
//    ^ 'Bertie'
```

### `getWodehouseLastName()`

Returns a last name of a character from the works of P.G. Wodehouse.

```js
import { getWodehouseLastName } from 'get-wodehouse-name';

const lastName = getWodehouseLastName();
//    ^ 'Wooster'
```

### `getWodehouseEmail()`

Returns the email address formed from the first and last name of a character from the works of P.G. Wodehouse.

```js
import { getWodehouseEmail } from 'get-wodehouse-name';

const email = getWodehouseEmail();
//    ^ 'bertie@wooster.com'
```

### `getWodehouseFullDetails()`

Returns an object containing the first name, last name, and email address of a character from the works of P.G. Wodehouse.

```js
import { getWodehouseFullDetails } from 'get-wodehouse-name';

const details = getWodehouseFullDetails();
//    ^ {
//        firstName: 'Bertie',
//        lastName: 'Wooster',
//        email: 'bertie@wooster.com'
//      }
```

### `getCompositeWodehouseFullDetails()`

Returns an object containing the first name of one character from the works of P.G. Wodehouse, the last name of another and an email address formed from the two. Useful for generating test data.

```js
import { getCompositeWodehouseFullDetails } from 'get-wodehouse-name';

const details = getCompositeWodehouseFullDetails();
//    ^ {
//        firstName: 'Bertie',
//        lastName: 'Bassington-Bassington',
//        email: 'bertie@bassington-bassington.com'
//      }
```
