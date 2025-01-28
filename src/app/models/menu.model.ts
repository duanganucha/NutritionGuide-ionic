export interface MenuItem {
    id: number;
    name: string;
    category: string;
    image: string;
    ingredients: string[];
    instructions: string[];
    nutrition: {
        calories: number;
        protein: number;
        fat: number;
        carbs: number;
        sodium: number;
    };
}

export interface MenuCategory {
    name: string;
    items: MenuItem[];
}