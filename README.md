# Forked Version of nc-loadingscreens

This is a forked version of the [nc-loadingscreens](https://github.com/NaorNC/nc-loadingscreens) created to add additional features for use in FiveM servers.

## Changes Made

### 1. **Volume Slider**
- Added a volume bar slider to adjust the volume of video/audio during the loading screen.

### 2. **Showcase Sections**
- Showcase sections have been added that allow you to:
  - Change the name displayed in the showcase
  - Set a custom image
  - Choose a display color for the showcase
  - Set a custom time duration for how long the showcase is visible before switching to the next

### 3. **Staff Member Quotes**
- Each staff member in the `config.js` now has a configurable quote that is displayed in the staff section. This gives more personality and recognition to staff members.

### 4. **Now Playing Feature**
- A "Now Playing" feature was added below the server description that dynamically displays the name of the currently playing song.

### 5. **Video Change Button**
- Added a button that allows users to change the video being played on the loading screen.

## How to Use

1. **Download the Latest Release**  
   To get started, [download the latest release](link-to-latest-release) of this resource. Ensure you’re using the latest version to have access to all the new features and improvements.

2. **Configure to Your Liking**  
   - Edit the titles to match your server name.  
   - Modify the description to fit your server's needs.  
   - Customize the showcase section (edit the name, image, color, and display time).  
   - Navigate to `/assets/media` to replace the logos with your server’s logos.  
   - Edit the **video config** in `index.html` to change the names and video links.  
   - Open `config.js` to configure your social media information and staff team (edit the name, description, quote, color, and image).  
   - To change the colors, edit `style.css` and replace **#b10707** with your preferred color.  
   
4. **Start the Resource**  
   Once the configuration is set, start the resource in your server's `server.cfg` by adding the following line: ```start nc-loadingscreens``` This will initiate the loading screen with all your configured settings in place.

## Credits

This project is a fork of [nc-loadingscreens](https://github.com/NaorNC/nc-loadingscreens). Special thanks to NaorNC for the original work!

---

Feel free to contribute or modify the code as needed for your own server. Enjoy!
