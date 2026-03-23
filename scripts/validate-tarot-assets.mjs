import { promises as fs } from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const tarotDataPath = path.join(projectRoot, "src", "data", "tarotCards.ts");
const cardsDir = path.join(projectRoot, "public", "images", "cards");

const majorKeyPattern = /^\d{2}-[a-z-]+$/;
const minorKeyPattern =
  /^(wands|cups|swords|pentacles)-(0[1-9]|10|page|knight|queen|king)$/;

function parseFields(source, fieldName) {
  const regex = new RegExp(`${fieldName}:\\s*"([^"]+)"`, "g");
  return [...source.matchAll(regex)].map((match) => match[1]);
}

async function main() {
  const fileContent = await fs.readFile(tarotDataPath, "utf8");
  const keys = parseFields(fileContent, "key");
  const images = parseFields(fileContent, "image");

  const errors = [];

  if (keys.length !== 78) {
    errors.push(`Expected 78 keys, got ${keys.length}.`);
  }

  if (images.length !== 78) {
    errors.push(`Expected 78 images, got ${images.length}.`);
  }

  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    const image = images[i];
    const isMajor = i <= 21;
    const keyPattern = isMajor ? majorKeyPattern : minorKeyPattern;

    if (!keyPattern.test(key)) {
      errors.push(`Invalid key format at index ${i}: ${key}`);
    }

    const expectedImage = `/images/cards/${key}.jpg`;
    if (image !== expectedImage) {
      errors.push(
        `Image path mismatch at index ${i}: expected ${expectedImage}, got ${image}`,
      );
    }

    const localImagePath = path.join(cardsDir, `${key}.jpg`);
    try {
      await fs.access(localImagePath);
    } catch {
      errors.push(`Missing local image file: public/images/cards/${key}.jpg`);
    }
  }

  const idMatches = [...fileContent.matchAll(/id:\s*(\d+)/g)].map((m) =>
    Number(m[1]),
  );
  if (idMatches.length !== 78) {
    errors.push(`Expected 78 ids, got ${idMatches.length}.`);
  } else {
    for (let i = 0; i < idMatches.length; i += 1) {
      if (idMatches[i] !== i) {
        errors.push(`ID sequence error at index ${i}: got ${idMatches[i]}`);
        break;
      }
    }
  }

  if (errors.length > 0) {
    console.error("Tarot assets validation failed:");
    for (const error of errors) {
      console.error(`- ${error}`);
    }
    process.exit(1);
  }

  console.log("Tarot assets validation passed.");
}

main().catch((error) => {
  console.error("Validation script crashed:", error);
  process.exit(1);
});
