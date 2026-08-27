const pets = [
  // HUGES
  { name: "Huge Cat", value: "4.25B", demand: "9/10", status: "Stable", category: "Huges", variant: "Normal", update: "UPD 5", emoji: "🐱", obtain: "Original Merch Code", change: 0 },
  { name: "Huge Pumpkin Cat", value: "225M", demand: "7/10", status: "Dropping", category: "Huges", variant: "Normal", update: "UPD 10", emoji: "🎃", obtain: "Halloween Event Eggs", change: 0 },
  { name: "Huge Pegasus", value: "4.7B", demand: "9/10", status: "Stable", category: "Huges", variant: "Normal", update: "UPD 10", emoji: "🪽", obtain: "Exclusive Shop", change: 0 },
  { name: "Huge Festive Cat", value: "600M", demand: "8/10", status: "Stable", category: "Huges", variant: "Normal", update: "UPD 13", emoji: "🎄", obtain: "Christmas Event Eggs", change: 0 },
  { name: "Huge Santa Paws", value: "3.6B", demand: "7/10", status: "Stable", category: "Huges", variant: "Normal", update: "UPD 14", emoji: "🎅", obtain: "Limited-Time Christmas Egg", change: 0 },
  { name: "Huge Hacked Cat", value: "980M", demand: "7/10", status: "Stable", category: "Huges", variant: "Normal", update: "UPD 15", emoji: "🌐", obtain: "Tech Hacked Eggs", change: 0 },
  { name: "Huge Forest Wyvern", value: "3.25B", demand: "8/10", status: "Stable", category: "Huges", variant: "Normal", update: "UPD 15", emoji: "🌲", obtain: "Original Exclusive Eggs", change: 0 },
  { name: "Huge Glitched Cat", value: "3.5B", demand: "8/10", status: "Stable", category: "Huges", variant: "Normal", update: "UPD 15", emoji: "👾", obtain: "Exclusive Shop", change: 0 },
  { name: "Huge Gargoyle Dragon", value: "2.5B", demand: "8/10", status: "Stable", category: "Huges", variant: "Normal", update: "UPD 16", emoji: "🪨", obtain: "Original Exclusive Eggs", change: 0 },
  { name: "Huge Cupcake", value: "80M", demand: "4/10", status: "Dropping", category: "Huges", variant: "Normal", update: "UPD 17", emoji: "🧁", obtain: "Free Gifts (Rare Drop)", change: 0 },
  { name: "Huge Dog", value: "2.8B", demand: "8/10", status: "Stable", category: "Huges", variant: "Normal", update: "UPD 17", emoji: "🐶", obtain: "Exclusive Shop", change: 0 },
  { name: "Huge Dragon", value: "2.8B", demand: "8/10", status: "Stable", category: "Huges", variant: "Normal", update: "UPD 17", emoji: "🐲", obtain: "Exclusive Shop", change: 0 },
  { name: "Huge Lucky Cat", value: "1.55B", demand: "8/10", status: "Stable", category: "Huges", variant: "Normal", update: "UPD 17", emoji: "🍀", obtain: "Original Exclusive Eggs", change: 0 },
  { name: "Huge Pixel Cat", value: "250M", demand: "7/10", status: "Stable", category: "Huges", variant: "Normal", update: "UPD 18", emoji: "👾", obtain: "Rainbow Pixel Eggs", change: 0 },
  { name: "Huge Pony", value: "1.55B", demand: "7/10", status: "Stable", category: "Huges", variant: "Normal", update: "UPD 18", emoji: "🐴", obtain: "Original Exclusive Eggs", change: 0 },
  { name: "Huge Storm Agony", value: "3.45B", demand: "8/10", status: "Stable", category: "Huges", variant: "Normal", update: "UPD 18", emoji: "⛈️", obtain: "Original Exclusive Eggs", change: 0 },
  { name: "Huge Easter Cat", value: "12B", demand: "10/10", status: "Overpaid", category: "Huges", variant: "Normal", update: "UPD 20", emoji: "🐣", obtain: "Easter Event Eggs", change: 0 },
  { name: "Huge Super Corgi", value: "500M", demand: "6/10", status: "Stable", category: "Huges", variant: "Normal", update: "UPD 20", emoji: "😎", obtain: "Original Exclusive Eggs", change: 0 },
  { name: "Huge Rainbow Unicorn", value: "750M", demand: "6/10", status: "Dropping", category: "Huges", variant: "Normal", update: "UPD 20", emoji: "🦄", obtain: "Original Exclusive Eggs", change: 0 },
  { name: "Huge Hell Rock", value: "23M", demand: "5/10", status: "Stable", category: "Huges", variant: "Normal", update: "UPD 20", emoji: "🔥", obtain: "Huge Hell Rock Event", change: 0 },
  { name: "Huge Floppa", value: "260M", demand: "4/10", status: "Underpaid", category: "Huges", variant: "Normal", update: "UPD 20", emoji: "😼", obtain: "Super Exclusive Egg", change: 0 },
  { name: "Huge Sleipnir", value: "350M", demand: "5/10", status: "Underpaid", category: "Huges", variant: "Normal", update: "UPD 20", emoji: "🎠", obtain: "Super Exclusive Egg", change: 0 },
  { name: "Huge Chest Mimic", value: "4B", demand: "8/10", status: "Overpaid", category: "Huges", variant: "Normal", update: "UPD 20", emoji: "👑", obtain: "Exclusive Shop", change: 0 },
  { name: "Huge Tiedye Cat", value: "450M", demand: "7/10", status: "Underpaid", category: "Huges", variant: "Normal", update: "UPD 20", emoji: "🎨", obtain: "Season 1 Merch Gifts", change: 0 },
  { name: "Huge Tiedye Corgi", value: "450M", demand: "6/10", status: "Underpaid", category: "Huges", variant: "Normal", update: "UPD 20", emoji: "🐕", obtain: "Season 1 Merch Gifts", change: 0 },
  { name: "Huge Mosaic Corgi", value: "450M", demand: "7/10", status: "Stable", category: "Huges", variant: "Normal", update: "UPD 20", emoji: "🧩", obtain: "Season 1 Merch Gifts", change: 0 },
  { name: "Huge Mosaic Griffin", value: "450M", demand: "6/10", status: "Stable", category: "Huges", variant: "Normal", update: "UPD 20", emoji: "🦅", obtain: "Season 1 Merch Gifts", change: 0 },
  { name: "Huge Crystal Dog", value: "450M", demand: "5/10", status: "Underpaid", category: "Huges", variant: "Normal", update: "UPD 20", emoji: "💎", obtain: "Season 1 Merch Gifts", change: 0 },
  { name: "Huge Nightfall Wolf", value: "650M", demand: "7/10", status: "Stable", category: "Huges", variant: "Normal", update: "UPD 20", emoji: "🌙", obtain: "Season 1 Merch Gifts", change: 0 },
  { name: "Huge Nightfall Pegasus", value: "1.25B", demand: "8/10", status: "Stable", category: "Huges", variant: "Normal", update: "UPD 20", emoji: "🌘", obtain: "Season 1 Merch Gifts", change: 0 },
  { name: "Huge Enchanted Deer", value: "3B", demand: "9/10", status: "Overpaid", category: "Huges", variant: "Normal", update: "UPD 20", emoji: "🦌", obtain: "Exclusive Shop", change: 0 },
  { name: "Huge Party Cat", value: "1B", demand: "8/10", status: "Rising", category: "Huges", variant: "Normal", update: "UPD 21", emoji: "🎉", obtain: "Anniversary Gift", change: 0 },
  { name: "Huge Capybara", value: "500M", demand: "N/A", status: "Dropping", category: "Huges", variant: "Normal", update: "UPD 21", emoji: "🦫", obtain: "Exclusive Capybara Egg", change: 0 },
  { name: "Huge Cyborg Capybara", value: "700M", demand: "N/A", status: "Stable", category: "Huges", variant: "Normal", update: "UPD 21", emoji: "🤖", obtain: "Exclusive Capybara Egg", change: 0 },
  { name: "Huge Cyborg Cat", value: "4B", demand: "9/10", status: "Overpaid", category: "Huges", variant: "Normal", update: "UPD 21", emoji: "🦾", obtain: "Season 2 Merch Gifts", change: 0 },
  { name: "Huge Grim Reaper", value: "900M", demand: "7/10", status: "Dropping", category: "Huges", variant: "Normal", update: "UPD 22", emoji: "💀", obtain: "Halloween Event Eggs", change: 0 },
  { name: "Huge Prickly Panda", value: "350M", demand: "N/A", status: "Stable", category: "Huges", variant: "Normal", update: "UPD 22", emoji: "🌵", obtain: "Elemental Exclusive Egg", change: 0 },
  { name: "Huge Inferno Cat", value: "500M", demand: "N/A", status: "Stable", category: "Huges", variant: "Normal", update: "UPD 22", emoji: "🔥", obtain: "Elemental Exclusive Egg", change: 0 },
  { name: "Huge Scary Cat", value: "400M", demand: "N/A", status: "Dropping", category: "Huges", variant: "Normal", update: "UPD 22", emoji: "👻", obtain: "Halloween Gifts", change: 0 },
  { name: "Huge Scary Corgi", value: "400M", demand: "N/A", status: "Dropping", category: "Huges", variant: "Normal", update: "UPD 22", emoji: "👻", obtain: "Halloween Gifts", change: 0 },

  // EXCLUSIVES
  { name: "Blue Big Maskot", value: "200M", demand: "N/A", status: "Stable", category: "Exclusives", variant: "Normal", update: "UPD 0", emoji: "🧸", obtain: "Original Exclusive Pet", change: 0 },
  { name: "Doge", value: "120M", demand: "7/10", status: "Stable", category: "Exclusives", variant: "Normal", update: "UPD 0", emoji: "🐕", obtain: "Original Exclusive Pet", change: 0 },
  { name: "Chest Mimic", value: "120M", demand: "8/10", status: "Stable", category: "Exclusives", variant: "Normal", update: "UPD 0", emoji: "👑", obtain: "Original Exclusive Pet", change: 0 },
  { name: "Dominus Astra", value: "180M", demand: "7/10", status: "Stable", category: "Exclusives", variant: "Normal", update: "UPD 0", emoji: "💫", obtain: "Original Exclusive Pet", change: 0 },
  { name: "Blobfish", value: "60M", demand: "5/10", status: "Stable", category: "Exclusives", variant: "Normal", update: "UPD 1", emoji: "🐡", obtain: "Original Exclusive Pet", change: 0 },
  { name: "Electric Slime", value: "70M", demand: "6/10", status: "Stable", category: "Exclusives", variant: "Normal", update: "UPD 1", emoji: "⚡", obtain: "Original Exclusive Pet", change: 0 },
  { name: "Galaxy Dragon", value: "100M", demand: "8/10", status: "Stable", category: "Exclusives", variant: "Normal", update: "UPD 1", emoji: "✨", obtain: "Original Exclusive Pet", change: 0 },
  { name: "Guest Noob", value: "90M", demand: "7/10", status: "Stable", category: "Exclusives", variant: "Normal", update: "UPD 2", emoji: "🤪", obtain: "Original Exclusive Pet", change: 0 },
  { name: "Mushroom King", value: "65M", demand: "8/10", status: "Stable", category: "Exclusives", variant: "Normal", update: "UPD 2", emoji: "🍄", obtain: "Original Exclusive Pet", change: 0 },
  { name: "Storm Wolf", value: "75M", demand: "9/10", status: "Stable", category: "Exclusives", variant: "Normal", update: "UPD 2", emoji: "🐺", obtain: "Original Exclusive Pet", change: 0 },
  { name: "Hell Chest Mimic", value: "90M", demand: "7/10", status: "Stable", category: "Exclusives", variant: "Normal", update: "UPD 3", emoji: "🔥", obtain: "Original Exclusive Pet", change: 0 },
  { name: "Noobortuus", value: "95M", demand: "9/10", status: "Stable", category: "Exclusives", variant: "Normal", update: "UPD 3", emoji: "🤪", obtain: "Original Exclusive Pet", change: 0 },
  { name: "Domortuus Astra", value: "100M", demand: "10/10", status: "Stable", category: "Exclusives", variant: "Normal", update: "UPD 3", emoji: "⚜️", obtain: "Original Exclusive Pet", change: 0 },
  { name: "Pterodactyl", value: "65M", demand: "7/10", status: "Stable", category: "Exclusives", variant: "Normal", update: "UPD 4", emoji: "🦖", obtain: "Original Exclusive Pet", change: 0 },
  { name: "Sock Monkey", value: "70M", demand: "9/10", status: "Stable", category: "Exclusives", variant: "Normal", update: "UPD 4", emoji: "🐒", obtain: "Original Exclusive Pet", change: 0 },
  { name: "Empyrean Agony", value: "50M", demand: "4/10", status: "Stable", category: "Exclusives", variant: "Normal", update: "UPD 4", emoji: "🌟", obtain: "Original Exclusive Pet", change: 0 },
  { name: "Grumpy Cat", value: "90M", demand: "7/10", status: "Stable", category: "Exclusives", variant: "Normal", update: "UPD 6", emoji: "😒", obtain: "Original Exclusive Pet", change: 0 },
  { name: "Nyan Cat", value: "100M", demand: "8/10", status: "Stable", category: "Exclusives", variant: "Normal", update: "UPD 6", emoji: "🌈", obtain: "Original Exclusive Pet", change: 0 },
  { name: "Nebula Dragon", value: "80M", demand: "7/10", status: "Stable", category: "Exclusives", variant: "Normal", update: "UPD 6", emoji: "🌀", obtain: "Original Exclusive Pet", change: 0 },
  { name: "Lava Scorpion", value: "75M", demand: "7/10", status: "Stable", category: "Exclusives", variant: "Normal", update: "UPD 7", emoji: "🌋", obtain: "Original Exclusive Pet", change: 0 },
  { name: "Sad Cat", value: "60M", demand: "7/10", status: "Stable", category: "Exclusives", variant: "Normal", update: "UPD 7", emoji: "🥺", obtain: "Original Exclusive Pet", change: 0 },
  { name: "Galaxy Pegasus", value: "90M", demand: "8/10", status: "Stable", category: "Exclusives", variant: "Normal", update: "UPD 7", emoji: "🌌", obtain: "Original Exclusive Pet", change: 0 },
  { name: "Blobenstein", value: "50M", demand: "6/10", status: "Stable", category: "Exclusives", variant: "Normal", update: "UPD 9", emoji: "🫠", obtain: "Original Exclusive Pet", change: 0 },
  { name: "Stacked Doge Noob", value: "75M", demand: "8/10", status: "Stable", category: "Exclusives", variant: "Normal", update: "UPD 9", emoji: "🤓", obtain: "Original Exclusive Pet", change: 0 },
  { name: "Dominus Darkwing", value: "40M", demand: "6/10", status: "Stable", category: "Exclusives", variant: "Normal", update: "UPD 9", emoji: "🌑", obtain: "Original Exclusive Pet", change: 0 },
  { name: "Yee-haw Cat", value: "75M", demand: "7/10", status: "Stable", category: "Exclusives", variant: "Normal", update: "UPD 11", emoji: "🤠", obtain: "Original Exclusive Pet", change: 0 },
  { name: "Sock Corgi", value: "75M", demand: "7/10", status: "Stable", category: "Exclusives", variant: "Normal", update: "UPD 11", emoji: "🦮", obtain: "Original Exclusive Pet", change: 0 },
  { name: "Storm Dragon", value: "100M", demand: "N/A", status: "Stable", category: "Exclusives", variant: "Normal", update: "UPD 11", emoji: "🌩️", obtain: "Original Exclusive Pet", change: 0 },
  { name: "Sea Dragon", value: "100M", demand: "7/10", status: "Stable", category: "Exclusives", variant: "Normal", update: "UPD 12", emoji: "🌊", obtain: "Original Exclusive Pet", change: 0 },
  { name: "Sock Cat", value: "100M", demand: "9/10", status: "Stable", category: "Exclusives", variant: "Normal", update: "UPD 12", emoji: "🧦", obtain: "Original Exclusive Pet", change: 0 },
  { name: "Wicked Angelus", value: "125M", demand: "10/10", status: "Stable", category: "Exclusives", variant: "Normal", update: "UPD 12", emoji: "😈", obtain: "Original Exclusive Pet", change: 0 },
  { name: "Otter", value: "90M", demand: "8/10", status: "Stable", category: "Exclusives", variant: "Normal", update: "UPD 13", emoji: "🦦", obtain: "Original Exclusive Pet", change: 0 },
  { name: "Punkey", value: "100M", demand: "10/10", status: "Stable", category: "Exclusives", variant: "Normal", update: "UPD 13", emoji: "🐵", obtain: "Original Exclusive Pet", change: 0 },
  { name: "Sapphire Phoenix", value: "125M", demand: "9/10", status: "Stable", category: "Exclusives", variant: "Normal", update: "UPD 13", emoji: "💠", obtain: "Original Exclusive Pet", change: 0 },
  { name: "Rainbow Blue Big Maskot", value: "2B", demand: "N/A", status: "Stable", category: "Exclusives", variant: "Rainbow", update: "UPD 0", emoji: "🧸", obtain: "Original Exclusive Pet", change: 0 },
  { name: "Rainbow Signature Big Maskot", value: "150M", demand: "8/10", status: "Stable", category: "Exclusives", variant: "Rainbow", update: "UPD 0", emoji: "✍", obtain: "Meet Owner In Game", change: 0 },

  // OTHER
  { name: "Glitched Huge Pumpkin Cat", value: "200M", demand: "3/10", status: "Stable", category: "Other", variant: "Glitched", update: "UPD 15", emoji: "🎃", obtain: "Glitched Huge Pet", change: 0 },
  { name: "Glitched Golden Huge Pumpkin Cat", value: "400M", demand: "4/10", status: "Stable", category: "Other", variant: "Glitched Golden", update: "UPD 15", emoji: "🎃", obtain: "Glitched Huge Pet", change: 0 },
  { name: "Glitched Storm Dragon", value: "1B", demand: "N/A", status: "Stable", category: "Other", variant: "Glitched", update: "UPD 15", emoji: "⚡", obtain: "Glitched Pet", change: 0 },
  { name: "Rainbow Pixel Wolf", value: "2.5M", demand: "8/10", status: "Stable", category: "Other", variant: "Rainbow", update: "N/A", emoji: "🐺", obtain: "Rainbow Pixel Eggs", change: 0 },
  { name: "Rainbow Pixel Demon", value: "5M", demand: "9/10", status: "Stable", category: "Other", variant: "Rainbow", update: "N/A", emoji: "😈", obtain: "Rainbow Pixel Eggs", change: 0 },
  { name: "DM Pixel Wolf", value: "5.5M", demand: "8/10", status: "Stable", category: "Other", variant: "Dark Matter", update: "UPD 18", emoji: "🐺", obtain: "Rainbow Pixel Eggs", change: 0 },
  { name: "DM Pixel Demon", value: "8M", demand: "9/10", status: "Stable", category: "Other", variant: "Dark Matter", update: "UPD 18", emoji: "😈", obtain: "Rainbow Pixel Eggs", change: 0 },
  { name: "Banana", value: "4B", demand: "7/10", status: "Stable", category: "Other", variant: "Normal", update: "UPD 20", emoji: "🍌", obtain: "Very Rare Hatchable", change: 0 },
  { name: "Golden Banana", value: "2B", demand: "8/10", status: "Stable", category: "Other", variant: "Golden", update: "N/A", emoji: "🍌", obtain: "Very Rare Hatchable", change: 0 },
  { name: "Rainbow Banana", value: "9.5B", demand: "9/10", status: "Stable", category: "Other", variant: "Rainbow", update: "N/A", emoji: "🍌", obtain: "Very Rare Hatchable", change: 0 },
  { name: "Dark Matter Banana", value: "12B", demand: "10/10", status: "Stable", category: "Other", variant: "Dark Matter", update: "N/A", emoji: "🍌", obtain: "Very Rare Hatchable", change: 0 },
  { name: "Original Exclusive Egg", value: "15M", demand: "N/A", status: "Stable", category: "Other", variant: "Normal", update: "UPD 20", emoji: "🔥", obtain: "Exclusive Shop", change: 0 },
  { name: "Capybara Exclusive Egg", value: "20M", demand: "N/A", status: "Stable", category: "Other", variant: "Normal", update: "UPD 21", emoji: "🦫", obtain: "Exclusive Shop", change: 0 },
  { name: "Elemental Exclusive Egg", value: "N/A", demand: "N/A", status: "Stable", category: "Other", variant: "Normal", update: "UPD 22", emoji: "⛰️", obtain: "Exclusive Shop", change: 0 },
  { name: "Anniversary Gift", value: "65M", demand: "10/10", status: "Rising", category: "Other", variant: "Normal", update: "UPD 21", emoji: "🥳", obtain: "1 Year Anniversary Gift", change: 0 },
  { name: "Season 1 Basic Gift", value: "60M", demand: "8/10", status: "Rising", category: "Other", variant: "Normal", update: "UPD 20", emoji: "🎁", obtain: "Exclusive Shop", change: 0 },
  { name: "Season 1 Rare Gift", value: "120M", demand: "8/10", status: "Stable", category: "Other", variant: "Normal", update: "UPD 20", emoji: "🎁", obtain: "Exclusive Shop", change: 0 },
  { name: "Season 1 Epic Gift", value: "235M", demand: "9/10", status: "Rising", category: "Other", variant: "Normal", update: "UPD 20", emoji: "🎁", obtain: "Exclusive Shop", change: 0 },
  { name: "Season 1 Legendary Gift", value: "825M", demand: "9/10", status: "Rising", category: "Other", variant: "Normal", update: "UPD 20", emoji: "🎁", obtain: "Exclusive Shop", change: 0 },
  { name: "Season 1 Mythical Gift", value: "1.6B", demand: "10/10", status: "Rising", category: "Other", variant: "Normal", update: "UPD 20", emoji: "🎁", obtain: "Exclusive Shop", change: 0 },
  { name: "Halloween Gift", value: "N/A", demand: "N/A", status: "Stable", category: "Other", variant: "Normal", update: "UPD 22", emoji: "🎃", obtain: "Exclusive Shop", change: 0 },
  { name: "Hubert", value: "N/A", demand: "N/A", status: "Stable", category: "Other", variant: "Normal", update: "UPD 0", emoji: "⚜️", obtain: "Rare Pet", change: 0 },

  // GOLDEN HUGES
  { name: "Golden Huge Pumpkin Cat", value: "600M", demand: "7/10", status: "Dropping", category: "Golden Huges", variant: "Golden", update: "UPD 10", emoji: "🎃", obtain: "Halloween Event Eggs", change: 0 },
  { name: "Golden Huge Pegasus", value: "14B", demand: "8/10", status: "Overpaid", category: "Golden Huges", variant: "Golden", update: "UPD 10", emoji: "🪽", obtain: "Exclusive Shop", change: 0 },
  { name: "Golden Huge Festive Cat", value: "1.85B", demand: "8/10", status: "Stable", category: "Golden Huges", variant: "Golden", update: "UPD 13", emoji: "🎄", obtain: "Christmas Event Eggs", change: 0 },
  { name: "Golden Huge Santa Paws", value: "15.5B", demand: "10/10", status: "Overpaid", category: "Golden Huges", variant: "Golden", update: "UPD 14", emoji: "🎅", obtain: "Limited-Time Christmas Egg", change: 0 },
  { name: "Golden Huge Hacked Cat", value: "4.5B", demand: "8/10", status: "Stable", category: "Golden Huges", variant: "Golden", update: "UPD 15", emoji: "🌐", obtain: "Tech Hacked Eggs", change: 0 },
  { name: "Golden Huge Forest Wyvern", value: "7B", demand: "8/10", status: "Overpaid", category: "Golden Huges", variant: "Golden", update: "UPD 15", emoji: "🌲", obtain: "Original Exclusive Eggs", change: 0 },
  { name: "Golden Huge Glitched Cat", value: "8.5B", demand: "8/10", status: "Stable", category: "Golden Huges", variant: "Golden", update: "UPD 15", emoji: "👾", obtain: "Exclusive Shop", change: 0 },
  { name: "Golden Huge Gargoyle Dragon", value: "8.5B", demand: "8/10", status: "Stable", category: "Golden Huges", variant: "Golden", update: "UPD 16", emoji: "🪨", obtain: "Original Exclusive Eggs", change: 0 },
  { name: "Golden Huge Dog", value: "7B", demand: "10/10", status: "Stable", category: "Golden Huges", variant: "Golden", update: "UPD 17", emoji: "🐶", obtain: "Exclusive Shop", change: 0 },
  { name: "Golden Huge Dragon", value: "7B", demand: "10/10", status: "Stable", category: "Golden Huges", variant: "Golden", update: "UPD 17", emoji: "🐲", obtain: "Exclusive Shop", change: 0 },
  { name: "Golden Huge Lucky Cat", value: "7B", demand: "8/10", status: "Overpaid", category: "Golden Huges", variant: "Golden", update: "UPD 17", emoji: "🍀", obtain: "Original Exclusive Eggs", change: 0 },
  { name: "Golden Huge Pixel Cat", value: "1B", demand: "5/10", status: "Stable", category: "Golden Huges", variant: "Golden", update: "UPD 18", emoji: "👾", obtain: "Rainbow Pixel Eggs", change: 0 },
  { name: "Golden Huge Pony", value: "7B", demand: "8/10", status: "Stable", category: "Golden Huges", variant: "Golden", update: "UPD 18", emoji: "🐴", obtain: "Original Exclusive Eggs", change: 0 },
  { name: "Golden Huge Storm Agony", value: "15B", demand: "10/10", status: "Overpaid", category: "Golden Huges", variant: "Golden", update: "UPD 18", emoji: "⛈️", obtain: "Original Exclusive Eggs", change: 0 },
  { name: "Golden Huge Easter Cat", value: "O/C", demand: "10/10", status: "Overpaid", category: "Golden Huges", variant: "Golden", update: "UPD 20", emoji: "🐣", obtain: "Easter Event Eggs", change: 0 },
  { name: "Golden Huge Super Corgi", value: "1.1B", demand: "6/10", status: "Dropping", category: "Golden Huges", variant: "Golden", update: "UPD 20", emoji: "😎", obtain: "Original Exclusive Eggs", change: 0 },
  { name: "Golden Huge Rainbow Unicorn", value: "1.85B", demand: "6/10", status: "Dropping", category: "Golden Huges", variant: "Golden", update: "UPD 20", emoji: "🦄", obtain: "Original Exclusive Eggs", change: 0 },
  { name: "Golden Huge Hell Rock", value: "35M", demand: "3/10", status: "Dropping", category: "Golden Huges", variant: "Golden", update: "UPD 20", emoji: "🔥", obtain: "Huge Hell Rock Event", change: 0 },
  { name: "Golden Huge Floppa", value: "900M", demand: "6/10", status: "Underpaid", category: "Golden Huges", variant: "Golden", update: "UPD 20", emoji: "😼", obtain: "Super Exclusive Egg", change: 0 },
  { name: "Golden Huge Sleipnir", value: "1.1B", demand: "7/10", status: "Underpaid", category: "Golden Huges", variant: "Golden", update: "UPD 20", emoji: "🎠", obtain: "Super Exclusive Egg", change: 0 },
  { name: "Golden Huge Chest Mimic", value: "6B", demand: "10/10", status: "Overpaid", category: "Golden Huges", variant: "Golden", update: "UPD 20", emoji: "👑", obtain: "Exclusive Shop", change: 0 },
  { name: "Golden Huge Tiedye Cat", value: "3.7B", demand: "8/10", status: "Stable", category: "Golden Huges", variant: "Golden", update: "UPD 20", emoji: "🎨", obtain: "Season 1 Merch Gifts", change: 0 },
  { name: "Golden Huge Tiedye Corgi", value: "3.3B", demand: "8/10", status: "Underpaid", category: "Golden Huges", variant: "Golden", update: "UPD 20", emoji: "🐕", obtain: "Season 1 Merch Gifts", change: 0 },
  { name: "Golden Huge Mosaic Corgi", value: "3.3B", demand: "9/10", status: "Stable", category: "Golden Huges", variant: "Golden", update: "UPD 20", emoji: "🧩", obtain: "Season 1 Merch Gifts", change: 0 },
  { name: "Golden Huge Mosaic Griffin", value: "3.3B", demand: "7/10", status: "Underpaid", category: "Golden Huges", variant: "Golden", update: "UPD 20", emoji: "🦅", obtain: "Season 1 Merch Gifts", change: 0 },
  { name: "Golden Huge Crystal Dog", value: "3.3B", demand: "7/10", status: "Underpaid", category: "Golden Huges", variant: "Golden", update: "UPD 20", emoji: "💎", obtain: "Season 1 Merch Gifts", change: 0 },
  { name: "Golden Huge Nightfall Wolf", value: "3.5B", demand: "9/10", status: "Stable", category: "Golden Huges", variant: "Golden", update: "UPD 20", emoji: "🌙", obtain: "Season 1 Merch Gifts", change: 0 },
  { name: "Golden Huge Nightfall Pegasus", value: "6B", demand: "10/10", status: "Overpaid", category: "Golden Huges", variant: "Golden", update: "UPD 20", emoji: "🌘", obtain: "Season 1 Merch Gifts", change: 0 },
  { name: "Golden Huge Enchanted Deer", value: "5B", demand: "10/10", status: "Overpaid", category: "Golden Huges", variant: "Golden", update: "UPD 20", emoji: "🦌", obtain: "Exclusive Shop", change: 0 },
  { name: "Golden Huge Capybara", value: "1.55B", demand: "N/A", status: "Stable", category: "Golden Huges", variant: "Golden", update: "UPD 21", emoji: "🦫", obtain: "Exclusive Capybara Egg", change: 0 },
  { name: "Golden Huge Cyborg Capybara", value: "1.85B", demand: "N/A", status: "Stable", category: "Golden Huges", variant: "Golden", update: "UPD 21", emoji: "🤖", obtain: "Exclusive Capybara Egg", change: 0 },
  { name: "Golden Huge Grim Reaper", value: "1.75B", demand: "8/10", status: "Dropping", category: "Golden Huges", variant: "Golden", update: "UPD 22", emoji: "💀", obtain: "Halloween Event Eggs", change: 0 },
  { name: "Golden Huge Prickly Panda", value: "950M", demand: "N/A", status: "Stable", category: "Golden Huges", variant: "Golden", update: "UPD 22", emoji: "🌵", obtain: "Elemental Exclusive Egg", change: 0 },
  { name: "Golden Huge Inferno Cat", value: "1.3B", demand: "N/A", status: "Stable", category: "Golden Huges", variant: "Golden", update: "UPD 22", emoji: "🔥", obtain: "Elemental Exclusive Egg", change: 0 },
  { name: "Golden Huge Scary Cat", value: "1B", demand: "N/A", status: "Dropping", category: "Golden Huges", variant: "Golden", update: "UPD 22", emoji: "👻", obtain: "Halloween Gifts", change: 0 },
  { name: "Golden Huge Scary Corgi", value: "1B", demand: "N/A", status: "Dropping", category: "Golden Huges", variant: "Golden", update: "UPD 22", emoji: "👻", obtain: "Halloween Gifts", change: 0 },

  // RAINBOW HUGES
  { name: "Rainbow Huge Cat", value: "15B", demand: "9/10", status: "Overpaid", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 5", emoji: "🐱", obtain: "Original Merch Code", change: 0 },
  { name: "Rainbow Huge Pumpkin Cat", value: "1.5B", demand: "8/10", status: "Dropping", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 10", emoji: "🎃", obtain: "Halloween Event Eggs", change: 0 },
  { name: "Rainbow Huge Pegasus", value: "16B", demand: "N/A", status: "Overpaid", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 10", emoji: "🪽", obtain: "Exclusive Shop", change: 0 },
  { name: "Rainbow Huge Festive Cat", value: "5.9B", demand: "8/10", status: "Rising", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 13", emoji: "🎄", obtain: "Christmas Event Eggs", change: 0 },
  { name: "Rainbow Huge Santa Paws", value: "O/C", demand: "10/10", status: "Overpaid", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 14", emoji: "🎅", obtain: "Limited-Time Christmas Egg", change: 0 },
  { name: "Rainbow Huge Hacked Cat", value: "12.5B", demand: "9/10", status: "Stable", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 15", emoji: "🌐", obtain: "Tech Hacked Eggs", change: 0 },
  { name: "Rainbow Huge Forest Wyvern", value: "14B", demand: "8/10", status: "Stable", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 15", emoji: "🌲", obtain: "Original Exclusive Eggs", change: 0 },
  { name: "Rainbow Huge Glitched Cat", value: "12.5B", demand: "9/10", status: "Stable", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 15", emoji: "👾", obtain: "Exclusive Shop", change: 0 },
  { name: "Rainbow Huge Gargoyle Dragon", value: "15B", demand: "9/10", status: "Stable", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 16", emoji: "🪨", obtain: "Original Exclusive Eggs", change: 0 },
  { name: "Rainbow Huge Dog", value: "14.5B", demand: "10/10", status: "Overpaid", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 17", emoji: "🐶", obtain: "Exclusive Shop", change: 0 },
  { name: "Rainbow Huge Dragon", value: "14.5B", demand: "10/10", status: "Overpaid", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 17", emoji: "🐲", obtain: "Exclusive Shop", change: 0 },
  { name: "Rainbow Huge Lucky Cat", value: "13B", demand: "N/A", status: "Stable", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 17", emoji: "🍀", obtain: "Original Exclusive Eggs", change: 0 },
  { name: "Rainbow Huge Pixel Cat", value: "2.95B", demand: "8/10", status: "Stable", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 18", emoji: "👾", obtain: "Rainbow Pixel Eggs", change: 0 },
  { name: "Rainbow Huge Pony", value: "O/C", demand: "10/10", status: "Overpaid", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 18", emoji: "🐴", obtain: "Original Exclusive Eggs", change: 0 },
  { name: "Rainbow Huge Storm Agony", value: "O/C", demand: "10/10", status: "Overpaid", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 18", emoji: "⛈️", obtain: "Original Exclusive Eggs", change: 0 },
  { name: "Rainbow Huge Super Corgi", value: "2.25B", demand: "6/10", status: "Stable", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 20", emoji: "😎", obtain: "Original Exclusive Eggs", change: 0 },
  { name: "Rainbow Huge Rainbow Unicorn", value: "3.45B", demand: "6/10", status: "Dropping", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 20", emoji: "🦄", obtain: "Original Exclusive Eggs", change: 0 },
  { name: "Rainbow Huge Hell Rock", value: "80M", demand: "5/10", status: "Stable", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 20", emoji: "🔥", obtain: "Huge Hell Rock Event", change: 0 },
  { name: "Rainbow Huge Floppa", value: "2B", demand: "6/10", status: "Underpaid", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 20", emoji: "😼", obtain: "Super Exclusive Egg", change: 0 },
  { name: "Rainbow Huge Sleipnir", value: "2.5B", demand: "8/10", status: "Underpaid", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 20", emoji: "🎠", obtain: "Super Exclusive Egg", change: 0 },
  { name: "Rainbow Huge Chest Mimic", value: "15.5B", demand: "10/10", status: "Overpaid", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 20", emoji: "👑", obtain: "Exclusive Shop", change: 0 },
  { name: "Rainbow Huge Tiedye Cat", value: "7.7B", demand: "10/10", status: "Underpaid", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 20", emoji: "🎨", obtain: "Season 1 Merch Gifts", change: 0 },
  { name: "Rainbow Huge Tiedye Corgi", value: "7.3B", demand: "9/10", status: "Underpaid", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 20", emoji: "🐕", obtain: "Season 1 Merch Gifts", change: 0 },
  { name: "Rainbow Huge Mosaic Corgi", value: "7.3B", demand: "9/10", status: "Stable", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 20", emoji: "🧩", obtain: "Season 1 Merch Gifts", change: 0 },
  { name: "Rainbow Huge Mosaic Griffin", value: "7.3B", demand: "9/10", status: "Underpaid", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 20", emoji: "🦅", obtain: "Season 1 Merch Gifts", change: 0 },
  { name: "Rainbow Huge Crystal Dog", value: "7.3B", demand: "9/10", status: "Underpaid", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 20", emoji: "💎", obtain: "Season 1 Merch Gifts", change: 0 },
  { name: "Rainbow Huge Nightfall Wolf", value: "7.5B", demand: "10/10", status: "Overpaid", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 20", emoji: "🌙", obtain: "Season 1 Merch Gifts", change: 0 },
  { name: "Rainbow Huge Nightfall Pegasus", value: "8B", demand: "10/10", status: "Overpaid", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 20", emoji: "🌘", obtain: "Season 1 Merch Gifts", change: 0 },
  { name: "Rainbow Huge Enchanted Deer", value: "12B", demand: "10/10", status: "Overpaid", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 20", emoji: "🦌", obtain: "Exclusive Shop", change: 0 },
  { name: "Rainbow Huge Party Cat", value: "7B", demand: "10/10", status: "Overpaid", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 21", emoji: "🎉", obtain: "Anniversary Gift", change: 0 },
  { name: "Rainbow Huge Capybara", value: "2.35B", demand: "N/A", status: "Stable", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 21", emoji: "🦫", obtain: "Exclusive Capybara Egg", change: 0 },
  { name: "Rainbow Huge Cyborg Capybara", value: "N/A", demand: "N/A", status: "Stable", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 21", emoji: "🤖", obtain: "Exclusive Capybara Egg", change: 0 },
  { name: "Rainbow Huge Grim Reaper", value: "3.5B", demand: "10/10", status: "Dropping", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 22", emoji: "💀", obtain: "Halloween Event Eggs", change: 0 },
  { name: "Rainbow Huge Prickly Panda", value: "1.85B", demand: "N/A", status: "Stable", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 22", emoji: "🌵", obtain: "Elemental Exclusive Egg", change: 0 },
  { name: "Rainbow Huge Inferno Cat", value: "2.4B", demand: "N/A", status: "Stable", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 22", emoji: "🔥", obtain: "Elemental Exclusive Egg", change: 0 },
  { name: "Rainbow Huge Scary Cat", value: "2.5B", demand: "N/A", status: "Dropping", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 22", emoji: "👻", obtain: "Halloween Gifts", change: 0 },
  { name: "Rainbow Huge Scary Corgi", value: "2.5B", demand: "N/A", status: "Dropping", category: "Rainbow Huges", variant: "Rainbow", update: "UPD 22", emoji: "👻", obtain: "Halloween Gifts", change: 0 }
];

const defaultChanges = [
  //{pet:"Huge Cat", old:4600000000, current:5000000000, percent:9, demand:9, date:"2026-08-22"},
];

// Last updated date
const LAST_UPDATED = "2026-08-27";

const EXCLUSIVE_TIERS = ["Huges", "Exclusives", "Titanics"];

// Next update countdown, uses UTC time (WIP)
const NEXT_UPDATE_LABEL = "🐱Cat World UPD";
const NEXT_UPDATE_SET_ON = "2026-08-27T12:00:00Z";
const NEXT_UPDATE_HOURS = "51";

let changes = defaultChanges;
let currentRoute = location.hash.replace("#","") || "home";
let currentPage = 1;
const perPage = 12;
let calcOffers = { yours: [], theirs: [] };

const $ = (s) => document.querySelector(s);
const fmt = (n) => {
  if (n >= 1e12) return (n/1e12).toFixed(2).replace(/\.00$/,"") + "T";
  if (n >= 1e9) return (n/1e9).toFixed(2).replace(/\.00$/,"") + "B";
  if (n >= 1e6) return (n/1e6).toFixed(2).replace(/\.00$/,"") + "M";
  if (n >= 1e3) return (n/1e3).toFixed(2).replace(/\.00$/,"") + "K";
  return n.toLocaleString();
};
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const slugify = (s) => String(s).toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");

function formatDate(d) {
  if (d instanceof Date) return isNaN(d) ? "—" : d.toLocaleDateString("en-US", {month:"short", day:"numeric", year:"numeric"});
  if (typeof d !== "string" || !/^\d{4}-\d{2}-\d{2}/.test(d)) return d || "—";
  const dt = new Date(d);
  if (isNaN(dt)) return d || "—";
  return dt.toLocaleDateString("en-US", {month:"short", day:"numeric", year:"numeric"});
}

function lastUpdatedLabel() {
  return formatDate(LAST_UPDATED);
}

// ---------- next-update countdown ----------
let countdownTimer = null;
const pad2 = (n) => String(n).padStart(2, "0");

function getUpdateTarget() {
  if (typeof NEXT_UPDATE_HOURS !== "number") return null; // "off" (or anything non-numeric)
  const start = new Date(NEXT_UPDATE_SET_ON);
  if (isNaN(start)) return null;
  return new Date(start.getTime() + NEXT_UPDATE_HOURS * 60 * 60 * 1000);
}

function tickCountdown() {
  const el = $("#nextUpdateValue");
  if (!el) { clearInterval(countdownTimer); countdownTimer = null; return; } // navigated away from home
  if (typeof NEXT_UPDATE_HOURS !== "number") {
    el.textContent = "Coming Soon"; // "off"
    clearInterval(countdownTimer); countdownTimer = null;
    return;
  }
  const target = getUpdateTarget();
  const diff = target ? target - new Date() : 0;
  if (!target || diff <= 0) {
    el.textContent = "0:00:00:00"; // countdown finished — frozen, not "Coming Soon"
    clearInterval(countdownTimer); countdownTimer = null;
    return;
  }
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  el.textContent = `${days}:${pad2(hours)}:${pad2(minutes)}:${pad2(seconds)}`;
}

function startUpdateCountdown() {
  if (countdownTimer) { clearInterval(countdownTimer); countdownTimer = null; }
  tickCountdown(); // paint immediately instead of waiting a second for the first tick
  const target = getUpdateTarget();
  if (target && target - new Date() > 0) countdownTimer = setInterval(tickCountdown, 1000);
}

function save() {
  const el = $("#footerUpdated");
  if (el) el.textContent = "Last updated " + lastUpdatedLabel();
}

// Pet images in assets/pets/
function petImageMarkup(name, image) {
  const src = image || `assets/pets/${slugify(name)}.png`;
  return `<div class="pet-image">
    <img src="${src}" alt="" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="pet-image-fallback">🐾</div>
  </div>`;
}

function statusBadge(status) {
  const badges = {
    "Stable": { text: "⚖️ Stable", cls: "status-stable" },
    "Dropping": { text: "📉 Dropping", cls: "status-dropping" },
    "Underpaid": { text: "⬇️ Underpaid", cls: "status-underpaid" },
    "Overpaid": { text: "⬆️ Overpaid", cls: "status-overpaid" },
    "Rising": { text: "📈 Rising", cls: "status-rising" }
  };
  return badges[status] || null;
}

function petCard(p) {
  const badge = statusBadge(p.status);
  return `<article class="pet-card" data-id="${p.id}" onclick="showPet(${p.id})">
    <div class="pet-card-top"><span>${p.demand != null ? `DMD <b>${p.demand}/10</b>` : ""}</span><span>${formatDate(p.release)}</span></div>
    ${petImageMarkup(p.name, p.image)}
    <div class="pet-card-body">
      <div class="pet-name">${p.emoji ? p.emoji + " " : ""}${esc(p.name)}</div>
      <div class="pet-type">${esc(p.category)} · ${esc(p.variant)}</div>
      <div class="pet-tags">
        ${badge ? `<span class="tag tag-badge ${badge.cls}">${badge.text}</span>` : ""}
      </div>
      <div class="pet-row"><span class="value">${fmt(p.value)}</span><span class="${p.change >= 0 ? "up":"down"}">${p.change > 0 ? "+" : ""}${p.change}%</span></div>
      ${p.obtain ? `<div class="pet-obtain">${esc(p.obtain)}</div>` : ""}
    </div>
  </article>`;
}

function changeCard(c) {
  // Reuses the exact same .pet-card markup/classes as the Values grid so
  // both sections render identically — this card just swaps in the
  // before/after value instead of the status badge as its headline stat.
  const match = pets.find(p => p.name === c.pet);
  const clickable = match ? `data-id="${match.id}" onclick="showPet(${match.id})"` : "";
  return `<article class="pet-card" ${clickable}>
    <div class="pet-card-top"><span class="${c.percent >= 0 ? "up":"down"}">${c.percent >= 0 ? "▲" : "▼"} <b>${c.percent > 0 ? "+" : ""}${c.percent}%</b></span></div>
    ${petImageMarkup(c.pet, match?.image)}
    <div class="pet-card-body">
      <div class="pet-name">${match?.emoji ? match.emoji + " " : ""}${esc(c.pet)}</div>
      <div class="pet-type">${match ? `${esc(match.category)} · ${esc(match.variant)}` : "Value update"}</div>
      <div class="pet-row"><span class="change-old">${fmt(c.old)} →</span><span class="value">${fmt(c.current)}</span></div>
      ${match?.obtain ? `<div class="pet-obtain">${esc(match.obtain)}</div>` : ""}
    </div>
  </article>`;
}

function renderHome() {
  const top = [...pets].sort((a,b)=>(Number(b.value)||0)-(Number(a.value)||0)).slice(0,5);
  const recent = [...changes].slice(0,5);
  const exclusiveCount = pets.filter(p => EXCLUSIVE_TIERS.includes(p.category)).length;
  $("#app").innerHTML = `
    <section class="hero">
      <div class="hero-copy">
        <div class="eyebrow">PSX Reborn</div>
        <h1>The official<br><span class="grad">PSX Reborn values.</span></h1>
        <p>Values are accurate and are dictated by diamond worth as well as demand.</p>
        <div class="hero-actions">
          <a class="btn primary" href="#values">Browse values →</a>
          <a class="btn ghost" href="#calculator">Open calculator</a>
        </div>
      </div>
      <div class="hero-stats">
        <div class="stat"><b>${pets.length}</b><span>Pets tracked</span></div>
        <div class="stat"><b>${exclusiveCount}</b><span>Exclusives &amp; huges</span></div>
        <div class="stat stat-date"><b>${lastUpdatedLabel()}</b><span>Last updated</span></div>
        <div class="stat"><b id="nextUpdateValue">Coming Soon</b><span>${esc(NEXT_UPDATE_LABEL)}</span></div>
      </div>
    </section>

    <div class="section-head">
      <div><h2>Recent changes</h2><p>Values that changed recently.</p></div>
    </div>
    <section class="changes-grid">${recent.map(changeCard).join("")}</section>

    <div class="section-head">
      <div><h2>Highest values</h2><p>The most expensive pets in the list right now.</p></div>
      <a class="btn" href="#values">See full list</a>
    </div>
    <section class="pet-grid">${top.map(petCard).join("")}</section>
  `;
  startUpdateCountdown();
}

function renderValues() {
  const categories = ["All", ...new Set(pets.map(p => p.category))];
  $("#app").innerHTML = `
    <div class="page-title"><h1>Values</h1><p>Filter by category, sort by rarity and variants.</p></div>
    <div class="toolbar">
      <input id="search" class="field" placeholder="Search for a pet…" autocomplete="off">
      <select id="sortBy" class="field">
        <option value="default">Default sort</option>
        <option value="value-desc">Value: high to low</option>
        <option value="value-asc">Value: low to high</option>
        <option value="demand-desc">Demand: high to low</option>
        <option value="name-asc">Name: A–Z</option>
      </select>
      <select id="variantFilter" class="field"><option value="All">All Variants</option>${[...new Set(pets.map(p=>p.variant))].map(v=>`<option value="${esc(v)}">${esc(v)}</option>`).join("")}</select>
      <select id="categoryFilter" class="field">${categories.map(c=>`<option value="${esc(c)}">${esc(c)}</option>`).join("")}</select>
    </div>
    <div class="filters-row">${categories.map(c=>`<button class="chip ${c==="All"?"active":""}" data-cat="${esc(c)}">${esc(c)}</button>`).join("")}</div>
    <div class="results-meta" id="resultsMeta"></div>
    <section class="pet-grid" id="petGrid"></section>
    <div class="pagination" id="pagination"></div>
  `;
  currentPage = 1;
  const search = $("#search"), sortBy = $("#sortBy"), variantFilter = $("#variantFilter"), categoryFilter = $("#categoryFilter");
  const chips = document.querySelectorAll(".chip");
  const update = () => { currentPage = 1; renderValuesList(); };
  search.addEventListener("input", update);
  sortBy.addEventListener("change", update);
  variantFilter.addEventListener("change", update);
  categoryFilter.addEventListener("change", () => {
    chips.forEach(c => c.classList.toggle("active", c.dataset.cat === categoryFilter.value));
    update();
  });
  chips.forEach(chip => chip.addEventListener("click", () => {
    chips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    categoryFilter.value = chip.dataset.cat;
    update();
  }));
  renderValuesList();
}

function renderValuesList() {
  const search = ($("#search")?.value || "").toLowerCase().trim();
  const sortBy = $("#sortBy")?.value || "default";
  const variant = $("#variantFilter")?.value || "All";
  const category = $("#categoryFilter")?.value || "All";

  let filtered = pets.filter(p =>
    (category === "All" || p.category === category) &&
    (variant === "All" || p.variant === variant) &&
    (!search || p.name.toLowerCase().includes(search))
  );

  if (sortBy === "value-desc") filtered.sort((a,b)=>(Number(b.value)||0)-(Number(a.value)||0));
  else if (sortBy === "value-asc") filtered.sort((a,b)=>(Number(a.value)||0)-(Number(b.value)||0));
  else if (sortBy === "demand-desc") filtered.sort((a,b)=>(b.demand??-1)-(a.demand??-1));
  else if (sortBy === "name-asc") filtered.sort((a,b)=>a.name.localeCompare(b.name));

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  currentPage = Math.min(currentPage, totalPages);
  const pageItems = filtered.slice((currentPage-1)*perPage, currentPage*perPage);

  $("#resultsMeta").textContent = `${filtered.length} result${filtered.length===1?"":"s"} · page ${currentPage} of ${totalPages}`;
  $("#petGrid").innerHTML = pageItems.length ? pageItems.map(petCard).join("") : `<div class="panel empty">Nothing matches that search. Try a different name or clear the filters.</div>`;

  const pag = $("#pagination");
  if (totalPages <= 1) { pag.innerHTML = ""; return; }
  let html = "";
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || Math.abs(i-currentPage) <= 1) {
      html += `<button class="btn ${i===currentPage?"primary":""}" data-page="${i}">${i}</button>`;
    } else if (Math.abs(i-currentPage) === 2) {
      html += `<span style="color:var(--muted)">…</span>`;
    }
  }
  pag.innerHTML = html;
  pag.querySelectorAll("[data-page]").forEach(btn => btn.addEventListener("click", () => {
    currentPage = Number(btn.dataset.page); renderValuesList(); window.scrollTo(0,0);
  }));
}

function showPet(id) {
  const p = pets.find(x=>x.id===id); if(!p) return;
  const badge = statusBadge(p.status);
  const changeEntry = changes.find(c => c.pet === p.name);
  // Use the logged change's real percent when there is one — p.change on
  // its own is just a placeholder (0) for pets that aren't in the log yet.
  const changePercent = changeEntry ? changeEntry.percent : p.change;
  const backdrop=document.createElement("div");
  backdrop.className="modal-backdrop";
  backdrop.addEventListener("click", (e) => { if (e.target === backdrop) backdrop.remove(); });
  backdrop.innerHTML=`<div class="modal">
    <div class="modal-head"><div><h2>${p.emoji ? p.emoji + " " : ""}${esc(p.name)}</h2><p>${esc(p.category)} · ${esc(p.variant)}</p></div><button class="btn" onclick="this.closest('.modal-backdrop').remove()">✕</button></div>
    ${petImageMarkup(p.name, p.image)}
    <div class="pet-tags" style="margin-top:12px">
      ${p.demand != null ? `<span class="tag">Demand ${p.demand}/10</span>` : ""}
      ${badge ? `<span class="tag tag-badge ${badge.cls}">${badge.text}</span>` : ""}
    </div>
    <div class="modal-stats" style="margin-top:14px">
      <div class="stat"><b>${fmt(p.value)}</b><span>Current value</span></div>
      <div class="stat"><b>${changePercent>=0?"+":""}${changePercent}%</b><span>Recent change${changeEntry ? ` · ${formatDate(changeEntry.date)}` : ""}</span></div>
    </div>
    <p>Released: <strong>${formatDate(p.release)}</strong></p>
    ${p.obtain ? `<div class="pet-obtain" style="font-size:12px">${esc(p.obtain)}</div>` : ""}
    <div class="modal-actions"><button class="btn primary" onclick="addToCalc(${p.id},'yours');this.closest('.modal-backdrop').remove()">Add to my offer</button><button class="btn" onclick="this.closest('.modal-backdrop').remove()">Close</button></div>
  </div>`;
  document.body.appendChild(backdrop);
}

function renderCalculator() {
  $("#app").innerHTML=`
    <div class="page-title"><h1>Calculator</h1><p>Add pets on both sides of a trade and see the value difference.</p></div>
    <div class="calc-layout">
      <section class="panel">
        <div class="offer-title"><h2>Your offer</h2><strong id="yoursTotal">0</strong></div>
        <div class="offer-list" id="yoursList"></div>
        <div class="add-row"><select id="yoursPick" class="field">${pets.map(p=>`<option value="${p.id}">${esc(p.name)} · ${fmt(p.value)}</option>`).join("")}</select><button class="btn primary" onclick="addToCalc(Number($('#yoursPick').value),'yours')">Add</button></div>
      </section>
      <section class="panel">
        <div class="offer-title"><h2>Their offer</h2><strong id="theirsTotal">0</strong></div>
        <div class="offer-list" id="theirsList"></div>
        <div class="add-row"><select id="theirsPick" class="field">${pets.map(p=>`<option value="${p.id}">${esc(p.name)} · ${fmt(p.value)}</option>`).join("")}</select><button class="btn primary" onclick="addToCalc(Number($('#theirsPick').value),'theirs')">Add</button></div>
      </section>
      <aside class="calc-side">
        <div class="eyebrow">Trade evaluation</div>
        <div id="calcResult" class="calc-result"><strong>ADD PETS</strong><p style="margin:5px 0 0;color:var(--muted)">Add pets to both sides to see who is winning.</p></div>
        <div><span style="color:var(--muted);font-size:12px">Value difference</span><div class="calc-total" id="diff">0</div></div>
        <p class="helper-note">This only compares listed values. Demand and how badly someone wants a specific pet can still make a "fair" trade feel lopsided in practice.</p>
        <button class="btn" style="margin-top:10px;width:100%" onclick="clearCalc()">Clear calculator</button>
      </aside>
    </div>`;
  renderOffers();
}

function calcCard(p, side, i) {
  return `<div class="pet-card calc-card">
    <button class="offer-remove" onclick="removeCalc('${side}',${i})" aria-label="Remove ${esc(p.name)}">×</button>
    ${petImageMarkup(p.name, p.image)}
    <div class="pet-card-body">
      <div class="pet-name">${p.emoji ? p.emoji + " " : ""}${esc(p.name)}</div>
      <div class="pet-type">${esc(p.variant)}</div>
      <div class="pet-row"><span class="value">${fmt(p.value)}</span></div>
    </div>
  </div>`;
}

function renderOffers(){
  ["yours","theirs"].forEach(side=>{
    const list=$(side==="yours"?"#yoursList":"#theirsList");
    list.innerHTML=calcOffers[side].length ? calcOffers[side].map((p,i)=>calcCard(p,side,i)).join("") : `<div class="empty">No pets added yet.</div>`;
  });
  updateCalc();
}

function addToCalc(id, side) {
  const p = pets.find(x=>x.id===id); if(!p) return;
  calcOffers[side].push(p);
  renderOffers();
}
function removeCalc(side, i) { calcOffers[side].splice(i,1); renderOffers(); }
function clearCalc() { calcOffers = { yours: [], theirs: [] }; renderOffers(); }

function updateCalc() {
  const a = calcOffers.yours.reduce((s,p)=>s+(Number(p.value)||0),0);
  const b = calcOffers.theirs.reduce((s,p)=>s+(Number(p.value)||0),0);
  $("#yoursTotal").textContent = fmt(a);
  $("#theirsTotal").textContent = fmt(b);
  const d = a - b;
  $("#diff").textContent = (d>=0?"+":"") + fmt(Math.abs(d)) + (d<0?" behind":"");
  const result = $("#calcResult");
  if(!a&&!b){result.className="calc-result";result.innerHTML="<strong>ADD PETS</strong><p style='margin:5px 0 0;color:var(--muted)'>Add pets to both sides to see how the trade shakes out.</p>";return;}
  const pct = Math.max(a,b) ? Math.round(Math.abs(d)/Math.max(a,b)*100) : 0;
  let title = pct <= 5 ? "PRETTY FAIR" : d > 0 ? "YOU'RE AHEAD" : "THEY'RE AHEAD";
  result.className = "calc-result" + (d < 0 ? " loss" : "");
  result.innerHTML = `<strong>${title}</strong><p style="margin:5px 0 0;color:var(--muted)">${pct}% difference between the two offers.</p>`;
}

function route(){
  if (countdownTimer) { clearInterval(countdownTimer); countdownTimer = null; }
  currentRoute=location.hash.replace("#","")||"home";
  document.querySelectorAll(".nav a").forEach(a=>a.classList.toggle("active",a.dataset.route===currentRoute));
  if(currentRoute==="values")renderValues();
  else if(currentRoute==="calculator")renderCalculator();
  else renderHome();
  $(".nav")?.classList.remove("open");
  window.scrollTo(0,0);
}

function toast(msg) {
  const el = $("#toast");
  el.textContent = msg; el.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => el.classList.remove("show"), 2300);
}

window.addEventListener("hashchange",route);
$("#mobileMenu").addEventListener("click",()=>$(".nav").classList.toggle("open"));
save();
route();
