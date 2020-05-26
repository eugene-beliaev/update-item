Simple function for updating array items

####Installation
```
npm i @beliaev/update-item
```

####Usage
```ts
import { update } from "@beliaev/update-item"

type User = {
  name: string;
  merried?: boolean;
}

const users: User[] = [
  { name: 'Paul Smith',  },
  { name: 'John Doe' },
  { name: 'Jane Doe' },
  { name: 'Ann Johnson',  },
]

const updated = update(
  users,
  _ => _.name.endsWith('Doe'),
  _ => ({ merried: true })
)

updated; // -> [
//  { name: 'Paul Smith',  },
//  { name: 'John Doe', merried: true },
//  { name: 'Jane Doe', merried: true },
//  { name: 'Ann Johnson',  },
//]

```

####Signature
```ts
function update<T>(
  array: T[],
  predicate: (el: T) => boolean,
  reducer: (el: T) => Partial<T>
): T[]
```