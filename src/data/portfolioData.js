export const heroData = {
  subHeadline: "Tunneling Engineer & Construction Manager",
  headline: "Mahmoud Younis",
  focus: "MTBM Operator · Micro Tunneling Specialist · PLC & Laser Guidance Systems Expert",
  description:
    "Delivering precision underground infrastructure through expert machine operation, intelligent automation, and disciplined construction management.",
  bgImage: "/imgs/hero-background.png",
  stats: [
    { number: "10+", label: "Years underground" },
    { number: "30+", label: "MTBM drives" },
    { number: "6", label: "Core disciplines" },
    { number: "∞", label: "Tight tolerances" },
  ],
};

export const projectFilters = [
  "All",
  "Automation",
  "Construction Management",
  "Laser Guidance",
  "MTBM",
  "Maintenance",
  "Mechanical",
  "Micro Tunneling",
  "PLC",
  "Pipe Jacking",
  "Sewer",
];

export const projectsData = [
  {
    id: 1,
    title: "MTBM Drive — Al-Kharj Sewer Network",
    location: "Al-Kharj, Riyadh Province",
    description:
      "Managed a micro tunneling drive as the MTBM broke through into the reception shaft along King Fahd Road. Controlled slurry pressure, jacking force, and alignment to land within tight tolerance.",
    tags: ["MTBM", "Micro Tunneling", "Sewer"],
    image: "/imgs/WhatsApp Image 2026-07-15 at 8.57.37 AM.jpeg",
    stats: [
      { value: "Al-Kharj", label: "Location" },
      { value: "3380 Al-Aqlishi", label: "Route" },
    ],
  },
  {
    id: 2,
    title: "PLC & Laser Guidance Console",
    location: "MTBM Control Cabin",
    description:
      "Operated the machine from the PLC & laser guidance HMI — monitoring cutting head position, articulation joint, working pressure, rotational speed, and interjack status in real time to keep the drive on line and grade.",
    tags: ["PLC", "Laser Guidance", "Automation"],
    image: "/imgs/WhatsApp Image 2026-07-15 at 8.57.38 AM (1).jpeg",
    stats: [
      { value: "124 bar", label: "Pressure" },
      { value: "1.3", label: "RPM" },
    ],
  },
  {
    id: 3,
    title: "Pipe Jacking — King Fahd Road",
    location: "Al Aliyah, Al-Kharj",
    description:
      "Directed a pipe jacking micro tunneling operation beneath King Fahd Road. Coordinated launch shaft setup, thrust wall reactions, and MTBM steering through variable ground conditions.",
    tags: ["Micro Tunneling", "Pipe Jacking", "Construction Management"],
    image: "/imgs/WhatsApp Image 2026-07-15 at 8.57.38 AM (2).jpeg",
    stats: [
      { value: "King Fahd Rd", label: "Corridor" },
      { value: "Deep shaft", label: "Depth" },
    ],
  },
  {
    id: 4,
    title: "MTBM Arrival — King Salman Bin Abdulaziz Rd",
    location: "Al Faysaliyah, Al-Kharj",
    description:
      "Supervised MTBM arrival at the reception shaft on King Salman Bin Abdulaziz Road. Executed cutterhead retrieval, alignment verification, and shaft handover to the pipe-laying crew.",
    tags: ["MTBM", "Construction Management", "Sewer"],
    image: "/imgs/WhatsApp Image 2026-07-15 at 8.57.38 AM (3).jpeg",
    stats: [
      { value: "3455 King Salman", label: "Route" },
      { value: "On target", label: "Result" },
    ],
  },
  {
    id: 5,
    title: "Cutterhead in Hard Ground",
    location: "Al-Kharj, Saudi Arabia",
    description:
      "Advanced the MTBM cutterhead through cemented, hard-ground conditions. Monitored disc-cutter wear, torque, and face pressure to maintain progress while protecting the machine.",
    tags: ["MTBM", "Maintenance", "Mechanical"],
    image: "/imgs/WhatsApp Image 2026-07-15 at 8.57.38 AM.jpeg",
    stats: [
      { value: "89° E", label: "Heading" },
      { value: "Hard", label: "Ground" },
    ],
  },
  {
    id: 6,
    title: "Cutterhead Breakthrough — An Nuzhah",
    location: "An Nuzhah, Al-Kharj",
    description:
      "Guided the MTBM cutterhead into the reception shaft on King Fahd Road, An Nuzhah. Managed final approach steering, exit-seal integrity, and shaft dewatering during arrival.",
    tags: ["MTBM", "Micro Tunneling", "Sewer"],
    image: "/imgs/WhatsApp Image 2026-07-15 at 8.57.39 AM (1).jpeg",
    stats: [
      { value: "King Fahd Rd", label: "Corridor" },
      { value: "Breakthrough", label: labelOrStage("Stage") },
    ],
  },
  {
    id: 7,
    title: "Reception Shaft Arrival",
    location: "Al-Kharj Drainage Line",
    description:
      "Landed the MTBM cleanly at the base of a deep reception shaft, aligned with the pre-installed exit seal. Confirmed line, grade, and pipe string integrity before demobilizing the machine.",
    tags: ["MTBM", "Pipe Jacking", "Construction Management"],
    image: "/imgs/WhatsApp Image 2026-07-15 at 8.57.39 AM.jpeg",
    stats: [
      { value: "Deep", label: "Shaft" },
      { value: "On target", label: "Alignment" },
    ],
  },
  {
    id: 8,
    title: "Micro Tunneling Drive — 7949 Al-Qaysarani",
    location: "Al-Kharj, Riyadh Province",
    description:
      "Ran a micro tunneling drive along the 7949 Al-Qaysarani alignment. Balanced slurry circulation and jacking rate to keep the MTBM stable in saturated ground.",
    tags: ["MTBM", "Micro Tunneling", "Sewer"],
    image: "/imgs/WhatsApp Image 2026-07-15 at 8.57.40 AM (1).jpeg",
    stats: [
      { value: "7949 Qaysarani", label: "Route" },
      { value: "Saturated", label: "Ground" },
    ],
  },
  {
    id: 9,
    title: "Nile River Crossing — Micro Tunneling Drive",
    location: "Barqash → Nikla, Egypt",
    description:
      "Delivered a challenging micro tunneling crossing beneath the Nile between Barqash and Nikla. Managed multi-line pipe jacking under the river with tight alignment tolerance and continuous slurry pressure control against hydrostatic head.",
    tags: ["MTBM", "Micro Tunneling", "Pipe Jacking", "Construction Management"],
    image: "/imgs/WhatsApp Image 2026-07-15 at 8.57.40 AM (2).jpeg",
    stats: [
      { value: "Nile River", label: "Crossing" },
      { value: "Multi-pipe", label: "Lines" },
    ],
  },
  {
    id: 10,
    title: "Barqash–Nikla Alignment Planning",
    location: "Nile Delta, Egypt",
    description:
      "Planned and set out the multi-drive alignment for the Barqash–Nikla river crossing. Coordinated launch and reception shaft positions, drive lengths, and pipeline geometry across the corridor.",
    tags: ["Construction Management", "Micro Tunneling", "Pipe Jacking"],
    image: "/imgs/WhatsApp Image 2026-07-15 at 8.57.40 AM (3).jpeg",
    stats: [
      { value: "Barqash–Nikla", label: "Corridor" },
      { value: "Multi-drive", label: "Scope" },
    ],
  },
  {
    id: 11,
    title: "MTBM Arrival — Deep Wet Shaft",
    location: "Reception Shaft, Egypt",
    description:
      "Landed the MTBM into a deep, water-filled reception shaft. Controlled inflow, managed exit seal performance, and executed a clean cutterhead arrival at depth under wet conditions.",
    tags: ["MTBM", "Micro Tunneling", "Sewer"],
    image: "/imgs/WhatsApp Image 2026-07-15 at 8.57.40 AM (4).jpeg",
    stats: [
      { value: "Deep / wet", label: "Shaft" },
      { value: "Arrival", label: "Stage" },
    ],
  },
  {
    id: 12,
    title: "1400 mm MTBM Recovery",
    location: "Al-Kharj Sewer Project",
    description:
      "On-site recovery of a 1400 mm diameter MTBM at the reception pit. Crew handled machine extraction, cutterhead cleaning, and coordination with the pipe-jacking team next to the receiving concrete pipe.",
    tags: ["MTBM", "Construction Management", "Sewer"],
    image: "/imgs/WhatsApp Image 2026-07-15 at 8.57.40 AM.jpeg",
    stats: [
      { value: "1400 mm", label: "Diameter" },
      { value: "Recovery", label: "Stage" },
    ],
  },
  {
    id: 13,
    title: "Rock-Face MTBM Drive",
    location: "Riyadh Province",
    description:
      "Advanced the MTBM through hard limestone rock. Monitored cutter wear and steering as the machine cut a clean bore through the rock face into open ground.",
    tags: ["MTBM", "Micro Tunneling", "Mechanical"],
    image: "/imgs/WhatsApp Image 2026-07-15 at 8.57.41 AM (1).jpeg",
    stats: [
      { value: "Hard rock", label: "Ground" },
      { value: 'Clean bore', label: "Result" },
    ],
  },
];

function labelOrStage(str) {
  return str;
}

export const expertiseData = [
  {
    title: "Tunneling Engineering",
    description:
      "End-to-end tunnel design support, ground investigation interpretation, and construction methodology selection for underground infrastructure.",
  },
  {
    title: "MTBM Operation",
    description:
      "Expert operation of Micro Tunnel Boring Machines, including steering, face pressure control, slurry management, and segment erecting.",
  },
  {
    title: "Construction Management",
    description:
      "Planning, scheduling, and site coordination for complex underground works with multiple subcontractors and live utilities.",
  },
  {
    title: "PLC & Automation",
    description:
      "Programming, troubleshooting, and integration of PLC systems for TBM and plant automation, with a focus on safety and reliability.",
  },
  {
    title: "Laser Guidance Systems",
    description:
      "Installation, calibration, and daily operation of laser-based guidance and total-station surveying for precise tunnel alignment.",
  },
  {
    title: "Electrical Engineering",
    description:
      "Power distribution, control circuits, and instrumentation for tunneling equipment and underground site services.",
  },
];

export const contactData = {
  title: "Let's build underground.",
  description:
    "Looking for an experienced MTBM operator, tunneling engineer, or construction manager for your next project? Let's discuss how I can help.",
  buttons: [
    {
      label: "Call +966 53 663 4035",
      href: "tel:+966536634035",
      type: "phone",
    },
    {
      label: "Call +20 111 921 0020",
      href: "tel:+201119210020",
      type: "phone",
    },
    {
      label: "WhatsApp KSA",
      href: "https://wa.me/966536634035",
      type: "whatsapp",
    },
    {
      label: "WhatsApp Egypt",
      href: "https://wa.me/201119210020",
      type: "whatsapp",
    },
    {
      label: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/mahmoud-younis-676665137?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      type: "linkedin",
    },
  ],
};

export const footerData = {
  logo: "Mahmoud Younis .",
  copyright:
    "© 2026 Mahmoud Younis. Tunneling engineer, construction manager, MTBM & micro tunneling specialist.",
};
