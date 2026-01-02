
export type Category = 
  | "Castle Cafe Breakfast"
  | "Breakfast Sandwiches"
  | "Sandwiches"
  | "All Day Omelette"
  | "Hot Drinks"
  | "Today's Specials"
  | "Freshly Made Sandwiches"
  | "Children's Menu"
  | "Jacket Potato"
  | "Cold Sandwich Deal"
  | "Cream Tea"
  | "Tea Or Coffee"
  | "Paninis & Baguettes"
  | "Chips & Salad"
  | "Others";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: Category;
  imageUrl: string;
}

export interface OpeningHour {
  day: string;
  open: string;
  close: string;
  isClosed?: boolean;
}
