export type Profile = {
    name: string;
    titleLine: string;
    bio: string;
    photoSrc: string; // public içində yol
    cardLabel: string;
    cardCode: string;
  };
  
  export const profile: Profile = {
    name: "Anvar Khalid",
    titleLine: "Microsoft Certified Trainer • Microsoft Certified DevOps Engineer Expert",
    bio:
      "Təlimlərim praktikaya söykənir: real layihələr, təhlükəsiz veb yanaşması, doğru arxitektura, deployment və DevOps məntiqi. Məqsəd remote iş üçün hazır səviyyəyə gəlmək, portfolionu gücləndirmək və sahədə stabil nəticə göstərməkdir.",
    photoSrc: "/about/me.png",
    cardLabel: "About Me",
    cardCode: "#AKTIS",
  };
  