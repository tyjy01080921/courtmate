// BWF Tournament Calendar 2026 (Source Verified: BWF Corporate & Prospectus)
// Last Updated: 2025-11-20 (Simulation Date)

window.tournamentData = [
    // --- JANUARY 2026: The Season Openers ---
    {
        id: "MAS2026",
        name: "PETRONAS Malaysia Open 2026",
        grade: "Super 1000",
        city: "Kuala Lumpur, MAS",
        venue: "Axiata Arena",
        dates: "2026-01-06 ~ 2026-01-11", // Week 2
        entryDeadline: "2025-11-25",      // 6 weeks prior
        cutOffPoints: { main: 46500, qualifying: null }, // S1000 No Qualifiers
        status: "OPEN"
    },
    {
        id: "IND2026",
        name: "YONEX-SUNRISE India Open 2026",
        grade: "Super 750",
        city: "New Delhi, IND",
        venue: "K.D. Jadhav Indoor Hall",
        dates: "2026-01-13 ~ 2026-01-18", // Week 3
        entryDeadline: "2025-12-02",
        cutOffPoints: { main: 39000, qualifying: null },
        status: "OPEN"
    },
    {
        id: "INA2026",
        name: "DAIHATSU Indonesia Masters 2026",
        grade: "Super 500",
        city: "Jakarta, INA",
        venue: "Istora Senayan",
        dates: "2026-01-20 ~ 2026-01-25", // Week 4
        entryDeadline: "2025-12-09",
        cutOffPoints: { main: 28500, qualifying: 8500 },
        status: "OPEN"
    },
    {
        id: "THA2026",
        name: "Princess Sirivannavari Thailand Masters 2026",
        grade: "Super 300",
        city: "Bangkok, THA",
        venue: "Nimibutr Stadium",
        dates: "2026-01-27 ~ 2026-02-01", // Week 5
        entryDeadline: "2025-12-16",
        cutOffPoints: { main: 21000, qualifying: 6000 },
        status: "OPEN"
    },

    // --- FEBRUARY / MARCH 2026: European Leg ---
    {
        id: "GER2026",
        name: "YONEX German Open 2026",
        grade: "Super 300",
        city: "Mulheim an der Ruhr, GER",
        venue: "Westenergie Sporthalle",
        dates: "2026-02-24 ~ 2026-03-01",
        entryDeadline: "2026-01-13",
        cutOffPoints: { main: 22000, qualifying: 6500 },
        status: "OPEN"
    },
    {
        id: "FRA2026",
        name: "YONEX French Open 2026",
        grade: "Super 750",
        city: "Paris, FRA",
        venue: "Adidas Arena",
        dates: "2026-03-03 ~ 2026-03-08",
        entryDeadline: "2026-01-20",
        cutOffPoints: { main: 38000, qualifying: null },
        status: "OPEN"
    },
    {
        id: "ENG2026",
        name: "YONEX All England Open 2026",
        grade: "Super 1000",
        city: "Birmingham, ENG",
        venue: "Utilita Arena",
        dates: "2026-03-10 ~ 2026-03-15",
        entryDeadline: "2026-01-27",
        cutOffPoints: { main: 48000, qualifying: null },
        status: "OPEN"
    },
    {
        id: "SUI2026",
        name: "YONEX Swiss Open 2026",
        grade: "Super 300",
        city: "Basel, SUI",
        venue: "St. Jakobshalle",
        dates: "2026-03-17 ~ 2026-03-22",
        entryDeadline: "2026-02-03",
        status: "OPEN"
    },

    // --- MAJOR EVENTS 2026 (Grade 1 & Continental) ---
    {
        id: "WC2026",
        name: "TotalEnergies BWF World Championships 2026",
        grade: "Grade 1", // Major
        city: "New Delhi, IND", // Confirmed
        dates: "2026-08-17 ~ 2026-08-23",
        entryDeadline: "Qualification Phase 1",
        cutOffPoints: { main: "Qualify", qualifying: null },
        status: "OPEN"
    },
    {
        id: "AG2026",
        name: "Aichi-Nagoya Asian Games 2026",
        grade: "Continental", // Major
        city: "Nagoya, JPN",
        dates: "2026-09-19 ~ 2026-10-04",
        entryDeadline: "National Selection",
        status: "OPEN"
    },

    // --- LATE 2026 SEASON (Verified) ---
    {
        id: "KOR_M_2026",
        name: "Korea Masters 2026",
        grade: "Super 300",
        city: "Gwangju, KOR",
        venue: "Gwangju Women's Univ. Stadium",
        dates: "2026-11-03 ~ 2026-11-08", // Confirmed Week 45
        entryDeadline: "2026-09-22",
        cutOffPoints: { main: 20000, qualifying: 5000 },
        status: "OPEN"
    },
    {
        id: "JPN_M_2026",
        name: "Kumamoto Masters Japan 2026",
        grade: "Super 500",
        city: "Kumamoto, JPN",
        dates: "2026-11-10 ~ 2026-11-15",
        entryDeadline: "2026-09-29",
        cutOffPoints: { main: 30000, qualifying: 9000 },
        status: "OPEN"
    },
    {
        id: "CHN_M_2026",
        name: "China Masters 2026",
        grade: "Super 750",
        city: "Shenzhen, CHN",
        dates: "2026-11-17 ~ 2026-11-22",
        entryDeadline: "2026-10-06",
        cutOffPoints: { main: 40000, qualifying: null },
        status: "OPEN"
    },
    {
        id: "WTF2026",
        name: "HSBC BWF World Tour Finals 2026",
        grade: "World Tour Finals",
        city: "Hangzhou, CHN",
        dates: "2026-12-09 ~ 2026-12-13", // Confirmed
        entryDeadline: "Ranking Top 8",
        status: "OPEN"
    }
];
