import { changeWallpaper } from './wallpaper.js';

// Run immediately
changeWallpaper();

// Repeat every 5 minutes
setInterval(changeWallpaper, 5 * 60 * 1000);
