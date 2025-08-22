// Fantasy inspirert

export const mockTeams = [
  {
    name: "Sunderland",
    players: [
      { name: "Robin Roefs", position: "Goalkeeper" },
      { name: "Harry Maguire", position: "Defender" },
      { name: "Luke Shaw", position: "Defender" },
      { name: "Bruno Fernandes", position: "Midfielder" },
      { name: "Marcus Rashford", position: "Forward" },
    ],
  },
  {
    name: "Liverpool",
    players: [
      { name: "Alisson Becker", position: "Goalkeeper" },
      { name: "Virgil van Dijk", position: "Defender" },
      { name: "Trent Alexander-Arnold", position: "Defender" },
      { name: "Mohamed Salah", position: "Forward" },
      { name: "Sadio Mané", position: "Forward" },
    ],
  },
];
export const formations = [
  { value: "4-4-2", label: "4-4-2" },
  { value: "4-3-3", label: "4-3-3" },
  { value: "3-5-2", label: "3-5-2" },
];
export const positions = [
  { value: "Goalkeeper", label: "Goalkeeper" },
  { value: "Defender", label: "Defender" },
  { value: "Midfielder", label: "Midfielder" },
  { value: "Forward", label: "Forward" },
];
export const maxPlayers = 11;
export const minPlayers = 1;
export const maxPerPosition = {
  Goalkeeper: 1,
  Defender: 3,
  Midfielder: 3,
  Forward: 3,
};
export const maxSameTeamPlayers = 3;
