import fs from 'fs/promises';
import path from 'path';

const srcDir = path.resolve('user_assets');
const destDir = path.resolve('dist/public/user_assets');

try {
  await fs.mkdir(destDir, { recursive: true });
  await fs.cp(srcDir, destDir, { recursive: true });
  console.log(`Copied user assets to ${destDir}`);
} catch (err) {
  console.error('Failed to copy user assets:', err);
  process.exit(1);
}
