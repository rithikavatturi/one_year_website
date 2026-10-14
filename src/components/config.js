const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "1025", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Enter Passcode", // Title displayed on the passcode entry page
  successMessage: "Yayy!! :)", // Message shown upon successful passcode entry
  redirectMessage: "Redirecting...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Incorrect passcode, hint: our anniversary date!", // Message shown for incorrect passcode
  cancelButtonText: "Cancel", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Search Google or type a URL", // Placeholder text in the search input
  trendingTitle: "Trending searches for the Question Game", // Title for the trending searches section
  trendingSearches: [
    "If I was a fart, would you hold me in or fart me out", // Example trending search query
    "Who is thinking of you when you get the hiccups", // Another example query
    `How to make Marry Me Pasta: recipe for goofy goobers`, // A personalized trending search
  ],
  proTip: 'Search: "How long have we been together?" ;)', // Helpful tip for users

  // ⏳ Timer Page
  anniversaryDate: "2025-10-25", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "We've been together for:", // Title displayed on the timer page
  timerMessage: "... and still counting <3", // Message shown alongside the timer
  timeUnits: {
    days: "Days", // Label for days in the timer
    hours: "Hours", // Label for hours in the timer
    minutes: "Minutes", // Label for minutes in the timer
    seconds: "Seconds", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Year One Recap", // Title for the recap page
  clickMeText: "Click me!", // Text prompting users to interact

  recapSections: [
    { label: "Messages", path: "/recap/message", icon: "Message" }, // Section for messages
    { label: "Pictures", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Music", path: "/recap/music", icon: "Music" }, // Section for music
  ],

  // 🎵 Music Page
  musicTitle: "Songs that remind me of you", // Title for the music page
  musicGallery: [
    {
      title: "Sal Tlay Ka Siti (Salt Lake City)", // Title of the song
      artist: "Book of Mormon Broadway Cast", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
    },
    {
      title: "Who's Your Boyfriend",
      artist: "Royel Otis",
      left: "40%",
      top: "15%",
    },
    {
      title: "Glue Song",
      artist: "Beabadoobee",
      left: "15%",
      top: "40%",
    },
    {
      title: "Sue Me",
      artist: "Audrey Hobert",
      left: "30%",
      top: "70%",
    },
    {
      title: "Love Letter",
      artist: "Juice Wrld",
      left: "5%",
      top: "65%",
    },
    {
      title: "CLose to You",
      artist: "Gracie Abrams",
      left: "25%",
      top: "90%",
    },
    {
      title: "Ant Pile",
      artist: "Dominic Fike",
      left: "35%",
      top: "50%",
    },
    {
      title: "Feel So Close",
      artist: "Calvin Harris",
      left: "10%",
      top: "25%",
    },
  ],

    // 📝 Message Recap Page
    messageTitle: "Our Messages", // Title for the messages recap page
    messageGallery: [
      { title: "September 3, 2024", description: "What started it all" }, // Message entry
      { title: "October 28, 2025", description: "Back when you were a Dr.Suri fan" },
      { title: "January 22, 2026", description: "One of our last 'with so much like' texts" },
    ],
  
    // 📸 Picture Recap Page
    pictureTitle: "Our Pictures", // Title for the pictures recap page
    pictureGallery: [
      { title: "October 31, 2025", description: "Our first picture together" }, // Picture entry
      { title: "February 26, 2026", description: "Every facetime ends in negotiating for five extra minutes" },
      { title: "May 9, 2026", description: "Berkeley day" },
      { title: "July 24, 2026", description: "Chef and Sous" },
      { title: "August 9, 2026", description: "Our first concert" },
    ],
  

  // 💌 Love Letter Page
  loveLetterMessage: "While you have been working so hard on coding, I thought I could try making some fun coding for you💖", // Message displayed on the love letter page

  // 🎇 Closing Page
  closingMessage: "Thank you for being my favorite person 💖 Cheers to our first of many anniversaries to come!", // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Previous page", // Text for the previous page button
  nextPageText: "Next page", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "How long have we been together?", // Example of a correct search query
    "how long have we been together", // Another example of a correct search query
  ],
};

export default config;
