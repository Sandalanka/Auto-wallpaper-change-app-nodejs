import { setWallpaper } from 'wallpaper';
import fs from 'fs';
import path from 'path';

export const IMAGE_URL = 'https://picsum.photos/1920/1080';
export const DOWNLOAD_PATH = path.join(process.cwd(), 'wallpaper.jpg');

export async function downloadImage(url = IMAGE_URL, filepath = DOWNLOAD_PATH) {
  const res = await fetch(url);
  const buffer = await res.arrayBuffer();
  fs.writeFileSync(filepath, Buffer.from(buffer));
}

export async function changeWallpaper() {
  console.log('📸 Fetching new wallpaper...');
  await downloadImage();
  await setWallpaper(DOWNLOAD_PATH);
  console.log('✅ Wallpaper updated!');
}
