const { PrismaClient } = require("@prisma/client");

prisma = new PrismaClient();

(async () => {
  for (const decimals of [32, 35, 36]) {
    console.log(`Inserting with ${decimals} decimals`);
    await prisma.foo.create({
      data: {
        bar: Array(decimals).fill("1").join(""),
      },
    });
  }
})();
