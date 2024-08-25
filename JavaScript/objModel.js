export const greeting = "Hello, world!";

//Read ME

/*
To omit the .js extension when using import statements in Node.js, you need to configure a module resolution approach that doesn't 
require specifying file extensions. However,
 native ES module support in Node.js doesn't allow omitting extensions directly as it strictly follows the ECMAScript specification.
*/

/*
Option 4: Native JavaScript Solution
If you prefer to stay with plain JavaScript and Node.js, you might need to use the .js extension as per the ECMAScript module specifications.

Summary
While there's no direct way to omit .js extensions in ES modules in Node.js without additional tools or configurations, 
using a build tool or TypeScript can simplify the process.
 For native JavaScript with ES modules in Node.js, you must specify the .js extension.
*/



/*
Option 3: Custom Loaders (Experimental)
Node.js has an experimental feature called custom loaders which can be used to alter the module loading behavior. This requires enabling experimental features and writing a custom loader.

Practical Example Using TypeScript
If you're open to using TypeScript, you can configure the TypeScript compiler to resolve modules without needing to specify extensions.

Install TypeScript:

bash
Copy code
npm install typescript ts-node
Create a tsconfig.json file:

json
Copy code
{
  "compilerOptions": {
    "module": "esnext",
    "target": "es2017",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "skipLibCheck": true
  },
  "include": ["./src/** /*.ts"],
  "exclude": ["node_modules"]
}
Convert Your Files to TypeScript:

Rename your files to .ts and adjust your imports:

objModel.ts
typescript
Copy code
export const greeting = "Hello, world!";
index.ts
typescript
Copy code
import { greeting } from './objModel';

console.log(greeting); // Output: Hello, world!
Run Your TypeScript Code:

Use ts-node to run your TypeScript files without needing to compile them manually:

bash
Copy code
npx ts-node src/index.ts
*/