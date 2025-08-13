import fs from 'fs';
import path from 'path';
import { setWallpaper } from 'wallpaper';


const IMAGE_URL = 'https://picsum.photos/1920/1080'; // random free image
const DOWNLOAD_PATH = path.join(process.cwd(), 'wallpaper.jpg');

// Function to download and save image
async function downloadImage(url, filepath) {
    const res = await fetch(url);
    const buffer = await res.arrayBuffer();
    fs.writeFileSync(filepath, Buffer.from(buffer));
}

// Function to change wallpaper
async function changeWallpaper() {
    console.log("Fetching new wallpaper...");
    await downloadImage(IMAGE_URL, DOWNLOAD_PATH);
    await setWallpaper(DOWNLOAD_PATH);
    console.log("Wallpaper updated!");
}

// Run every 5 minutes (300000 ms)
setInterval(changeWallpaper, 300000);

// Run immediately on start
changeWallpaper();
