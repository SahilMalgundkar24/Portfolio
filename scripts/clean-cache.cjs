const { rmSync } = require("fs");
const { join } = require("path");

const targets = [".next", join("node_modules", ".cache")];

for (const target of targets) {
  try {
    rmSync(target, { recursive: true, force: true });
    console.log(`Removed ${target}`);
  } catch {
    // ignore
  }
}
