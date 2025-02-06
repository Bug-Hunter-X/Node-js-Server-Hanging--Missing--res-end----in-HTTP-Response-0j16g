# Node.js Server Hanging: Missing `res.end()`

This repository demonstrates a common error in Node.js HTTP servers: forgetting to call `res.end()` to properly conclude the response.  This omission can lead to hanging requests and unexpected server behavior.

## Bug

The `bug.js` file contains the problematic code. The server responds with a 'Hello, World!' message but fails to call `res.end()`, causing client requests to hang.

## Solution

The `bugSolution.js` file provides the corrected code.  The addition of `res.end()` after writing the response ensures proper termination and prevents hanging requests.

## How to reproduce

1. Clone the repository.
2. Navigate to the project directory.
3. Run `node bug.js`.
4. Make a request to `http://localhost:3000/`.  Observe that the request hangs.
5. Run `node bugSolution.js`.
6. Make a request to `http://localhost:3000/`.  Observe that the request completes successfully.