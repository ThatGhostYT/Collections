# Collections
A library which adds a Collection data type.

## What is a Collection?
A Collection is like an array of objects, but a Collection does this in a much more organized and controlled manner.

Each object is **required** to have a unique `key`, and a `value`.

## Adding Entries
When initiating the Collection, you can provide a rest parameter of objects which will automatically be added to the Collection.
```js
const collection = new Collection(
  // Add as many entries as you want.
  {
    key: "foo",
    value: "bar"
  },
  {
    key: "hello",
    value: "world"
  }
);
```

Or use the `addEntry` method which does the same thing as the constructor.
```js
const collection = new Collection();

collection.addEntry(
  // Add as many entries as you want.
  {
    key: "foo",
    value: "bar"
  },
  {
    key: "hello",
    value: "world"
  }
);
```

## Retrieving Values
There are several ways to retrieve values.

If you want to get the value of the first entry in the object use the `first` method.
```js
console.log(collection.first()); // > "bar"
```

Or if you want to get the value of the last entry in the object use the `last` method.
```js
console.log(collection.last()); // > "world"
```

If you need a specific value, use the `get` method and supply it with the key to the entry.
```js
console.log(collection.get("hello")); // > "world"
```

## Removing Values
To remove a value, use the `remove` method and supply it with the key to the entry.
```js
collection.remove("foo");

console.log(collection.get("foo")); // > undefined
```

The `remove` method does not return anything.

## Getting a Random Key
To get a random key, use the `randomKey` method.
```js
console.log(collection.randomKey()); // > "foo" or "hello"
```

If you want to get a random valye yse the `random` method.
```js
console.log(collection.random()); // > "bar" or "world"
```

## Iterating Through a Collection
A Collection returns the key of an entry and the value of an entry when being used in a `for .. of` loop.
```js
for(const [key,value] of collection){
  console.log(key,value); // > "foo bar" on first iteration and "hello world" on second iteration.
}
```

You can also just iterate through the keys using the `keys` method, which returns an array of all the keys in the Collection.
```js
for(const key of collection.keys()){
  console.log(key) // > "foo" on first iteration and "hello" on second iteration.
}
```

You can also just iterate through the values using the `values` method, which returns an array of all the values in the Collection.
```js
for(const value of collection.values()){
  console.log(key) // > "bar" on first iteration and "world" on second iteration.
}
```
