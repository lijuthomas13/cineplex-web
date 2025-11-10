export const SEAT_STATUS = {
  AVAILABLE: "available",
  BOOKED: "booked",
};

export const SEAT_CATEGORY = {
 SILVER: "SILVER",
 GOLD: "GOLD",
 PLATINUM: "PLATINUM"
}

export const SEAT_CATEGORY_THEMES = [
  {
    label: "Platinum ₹200",
    borderColor: "border-primary",
    bgColor: "bg-transparent",
  },
  {
    label: "Selected",
    borderColor: "border-transparent",
    bgColor: "bg-green-500",
  },
  { label: "Gold ₹150", borderColor: "border-amber-400", bgColor: "bg-transparent" },
  {
    label: "Unavailable",
    borderColor: "border-transparent",
    bgColor: "bg-gray-300 dark:bg-white/9",
  },
  {
    label: "Silver ₹100",
    borderColor: "border-slate-400",
    bgColor: "bg-transparent",
  },
];