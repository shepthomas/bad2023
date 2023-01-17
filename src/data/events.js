export const events = [
  {
    type: "exhibition",
    slug: "rmxtv",
    name: "RMXTV",
    image: { caption: "Image Courtesy Steve Alexander.", src: "" },
    locale: "city",
    location: {
      slug: "museum-of-brisbane",
      name: "Museum of Brisbane",
      address: "Level 3, City Hall, King George Square,",
      suburb: "Brisbane",
    },
    past: false,
    free: true,
    booking: true,
    adult: false,
    sponsor: "",
    description:
      "Experience a live art remix as a group of artists test their creative agility this May at Museum of Brisbane. Over the course of three weeks, participants will draw and paint on a large purpose-built environment guided by a series of prompts delivered via the big screen.",
  },
  {
    type: "experience",
    slug: "bad-block-party",
    name: "BAD Block Party",
    image: { caption: "Image Courtesy Magpie Goose.", src: "" },
    locale: "Southside",
    location: {
      slug: "",
      name: "Fish Lane",
      address: "Town Square, South Brisbane 63 Melbourne St",
      suburb: "South Brisbane",
    },
    past: false,
    free: true,
    booking: false,
    adult: true,
    sponsor: "Blaklash Creative",
    description:
      "Presented by Blaklash, the BAD Block Party will kick off with an afternoon of markets from local First Nations makers including Rachael Sarra and Magpie Goose. Then take a behind the scenes tour of the laneway’s impressive collection of public artworks before returning to Town Square to sip cocktails amongst the lush greenery of Town Square.",
  },
  {
    type: "tour",
    slug: "bad-neighbourhood-tour-southside",
    name: "BAD Neighbourhood Tour: SOUTHSIDE",
    image: {
      caption:
        "Indigenous Art Program (2018) Walking Tours. Artwork: Libby Hayward - Gannga: Bangan-Mud-Tallebudgera Creek / Gangga Series",
      src: "",
    },
    locale: "Southside",
    location: {
      slug: "",
      name: "BAD Hub",
      address: "",
      suburb: "",
    },
    past: false,
    free: true,
    booking: false,
    adult: true,
    sponsor: "",
    description:
      "West End and South Brisbane take centre stage for the BAD Walking Tours on the Southside. Taking in the sights of Griffith University’s Queensland College of Art’s many studios and exhibitions, as well as TAFE Queensland’s graduate exhibition and open day, State Library of Queensland’s exhibitions, Fish Lane, West Village and Metro Arts and some exciting surprises along the way, the Southside is packed with activity.",
  },
  {
    type: "exhibition",
    slug: "immaterial-counterpoint-act",
    name: "Immaterial Counterpoint Act: A Natural Low",
    image: {
      caption: "A Natural Low. Image Courtesy Wreckers Art Space.",
      src: "",
    },
    locale: "Southside",
    location: {
      slug: "wreckers-artspace",
      name: "Wreckers Artspace",
      address: "7 Lotus Street",
      suburb: "Woolloongabba",
    },
    past: false,
    free: true,
    booking: true,
    adult: true,
    sponsor: "",
    description:
      "An ephemeral, degenerative sound-focused happening featuring enigmatic local & interstate multidisciplinary artists in a collaborative, experimental installation discarding mercantile tools for amplified found/recycled/stolen objects while rejecting anticipated latent profound purpose and celebrating the unexplainable intrinsic fascination toward the unaesthetic discord. Immaterial Counterpoint Act is curated by A Natural Low – a small, local independent community ARI focused on presenting experimental art & audio-visual actions by often obscured & underground artists’.",
  },
  {
    type: "exhibition",
    slug: "live-mural-painting-jordache",
    name: "Live Mural Painting: Jordache",
    image: {
      caption: "Image Courtesy Mayne Line.",
      src: "",
    },
    locale: "Southside",
    location: {
      slug: "mayne-line",
      name: "Mayne Line",
      address: "39 Corunna St",
      suburb: "Albion",
    },
    past: false,
    free: true,
    booking: false,
    adult: true,
    sponsor: "",
    description:
      "Hailing from Brisbane, Australia, Jordache is a contemporary, post-graffiti artist and the director of Mayne Line – a community gallery championing urban culture and street art.",
  },
  {
    type: "talk",
    slug: "artist-talk-mandy-quadrio",
    name: "Artist Talk: Mandy Quadrio",
    image: {
      caption: "Image Courtesy Griffith University Art Museum.",
      src: "",
    },
    locale: "Southside",
    location: {
      slug: "griffith-university-art-museum",
      name: "Griffith University Art Museum – Hope St Studio",
      address: "58 Hope Street",
      suburb: "South Brisbane",
    },
    past: false,
    free: true,
    booking: true,
    adult: true,
    sponsor: "",
    description:
      "Join artist Mandy Quadrio for an in conversation at Hope St Studio about her latest exhibition. With a body of work that spans sculpture, installation, photography and mixed media, this is your invitation to come and be a part of the conversation when Mandy opens her studio to the public.",
  },
  {
    type: "open-studio",
    slug: "a-wet-finger-to-the-wind-aaron-chapman",
    name: "Open Studio: Aaron Chapman",
    image: {
      caption: "Image Courtesy Aaron Chapman.",
      src: "",
    },
    locale: "Northside",
    location: {
      slug: "norman-park-substation",
      name: "Norman Park Substation",
      address: "97 Wynnum Rd",
      suburb: "Norman Park",
    },
    past: false,
    free: true,
    booking: true,
    adult: true,
    sponsor: "Metro Arts",
    description:
      "Join Aaron Chapman in the studio and explore his new body of work, A Wet Finger to the Wind. A Wet Finger to the Wind celebrates and mourns the colourful imagination of childhood innocence by reinterpreting photographs through the lens of a childhood craft.",
  },
  {
    type: "exhbition",
    slug: "ambit",
    name: "Tay Haggarty + Holly Bates",
    image: {
      caption: "Parallel Park, ambit, 2021. Video Still.",
      src: "",
    },
    locale: "Southside",
    location: {
      slug: "metro-arts",
      name: "Metro Arts",
      address: "97 Boundary St",
      suburb: "West End",
    },
    past: false,
    free: true,
    booking: true,
    adult: true,
    sponsor: "",
    description:
      "Parallel Park (Tay Haggarty and Holly Bates) will present a new video work continuing their ongoing interest in queer formations of intimacy, collaboration and community, at the intersection of artistic process. Combining interviews, reconstructed memories and formal experimentation, the work places water, and its slippery flows, its spills and its quotidian beauty, at its metaphorical centre.",
  },
  {
    type: "workshop",
    slug: "photography-re-imagining-self",
    name: "Photography: Re-imagining Self",
    image: {
      caption: "Image Courtesy Queensland College of Art.",
      src: "",
    },
    locale: "Southside",
    location: {
      slug: "queensland-college-of-art",
      name: "Queensland College of Art",
      address: "226 Grey St",
      suburb: "South Brisbane",
    },
    past: false,
    free: true,
    booking: false,
    adult: true,
    sponsor: "",
    description:
      "Photography informs how we perceive the world, our understanding of self and the forming of public opinion. QCA’s photography studios embrace contemporary practice and the roots of photographic practice.",
  },
];
