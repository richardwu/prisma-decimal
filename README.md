# Prisma Decimal Limited Mantissa Repro

Mantissas are currently limited to 128 bits because of the conversion
function implementation in `prisma/quaint`.

To reproduce:

```sh
npm install
DATABASE_URL=... npx prisma migrate dev
DATABASE_URL=... node index.js
```
