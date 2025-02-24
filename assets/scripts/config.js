Config = {}; // Don't touch

Config.HideoverlayKeybind = 112 // JS key code https://keycode.info
Config.CustomBindText = "F1"; // leave as "" if you don't want the bind text in html to be statically set

Config.ServerIP = "";
Config.ServerName = "Server Name"
Config.ServerDescription = "Server Description";

Config.Showcase = [
    {
        name: "Showcase",
        img: 'https://r2.fivemanage.com/3oi2OE5yiZtZvh9LYIqUE/images/product_16984546757799hnZ78Xrm5ffZg.png',
        color: '#010101',
        time: 5000 // Time in ms (5 seconds)
    },
];

// Videos
Config.Video = [
    {name: "Hippie Sabotage - Devil Eyes", videoLink: 'assets/videos/video1.mp4'},
    {name: "Bloodhound Lil Jeff - Ahhh", videoLink: 'assets/videos/video2.mp4'},
];

Config.VideoVolume = 0.1; // Default volume level (10%)

// Social media buttons
Config.Socials = [
    {name: "discord", label: "Discord", description: "Click here to copy the link and join our Discord server!", icon: "assets/media/icons/discord.png", link: "#"},
    {name: "instagram", label: "Instagram", description: "An Instagram page will open for us soon, feel free to join and follow us!", icon: "assets/media/icons/tiktok.png", link: "#"},
    {name: "tebex", label: "Donations", description: "For donations, feel free to look at the channel - #Donations at Discord.", icon: "assets/media/icons/tebex.png", link: "#"},
];
// Staff list
Config.Staff = [
    {name: "Traziier", description: "Dev", quote: "Quote", color: "#010101", image: "assets/media/avatar-picture/Traziier.jpg"},
    {name: "Staff", description: "Staff", quote: "Quote", color: "#010101", image: "assets/media/avatar-picture/Empty.png"},
    {name: "Staff", description: "Staff", quote: "Quote", color: "#010101", image: "assets/media/avatar-picture/Empty.png"},


];

// Categories
Config.Categories = [
    {label: "Social Networks", default: false},
    {label: "Staff team", default: true}
];