# Hash Tables

- Associative Array: a collection of key/value pairs where the key can only exist once in the collection.
- Places to find associative arrays: HTTP Headers, Application Configuration, Environment Variables, Key/Value Database (NoSQL).
- Hash Table: An associative array container that provides O(1) insert, delete and search operations
- Hash Function: a function that maps data of arbitrary size to data of a fixed size. `hash = f(value)`
- Properties of Hash Function
- Stability:: A hash function always generates the same output given the same input.
- Uniformity:: A hash algorithm should distribute its resulting hash value evenly throughout the output space.
- Security:: A secure hashing algorithm cannot be inverted. You should not be able to easily derive an input that will produce a given output hash.
- SDBMHash function has 64-bit output space which makes it to limited to be used as a secure hashing algorithm
  - Generally, the larger the output space, the more secure the hashing algorithm provided the function remains stable and uniform.
  - 256-bit output space is now a common starting point for sucure hashing algorithms.
  - The SHA 256 hashing algorithm is commonly used in mordern applications.
  - Apart from 256-bit output space we have 512-bit, 1024-bit and 2048-bit with even larger output space being introduced periodically.
- Hash Function examples:: Verifying downloaded data, Storing passwords in a database, Hash tables key lookup, secrets
