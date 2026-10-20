import type { CardTone } from "@/types/cardTone.types";

interface CardToneStyles {
  gradient: string;
  iconColor: string;
  /** Sets --card-accent for the hover/shadow colour; purple is the default. */
  accent: string;
}

const CARD_TONES: Record<CardTone, CardToneStyles> = {
  purple: { gradient: "from-purple-100 to-purple-50", iconColor: "text-brand", accent: "" },
  orange: {
    gradient: "from-orange-100 to-orange-50",
    iconColor: "text-orange-500",
    accent: "card-accent-orange",
  },
  yellow: {
    gradient: "from-yellow-100 to-yellow-50",
    iconColor: "text-yellow-600",
    accent: "card-accent-yellow",
  },
  pink: {
    gradient: "from-pink-100 to-pink-50",
    iconColor: "text-pink-500",
    accent: "card-accent-pink",
  },
  blue: {
    gradient: "from-blue-100 to-blue-50",
    iconColor: "text-blue-500",
    accent: "card-accent-blue",
  },
  green: {
    gradient: "from-green-100 to-green-50",
    iconColor: "text-green-600",
    accent: "card-accent-green",
  },
};

/** Classes for a tinted "pillar" card (gradient + 3D shadow + lift on hover). */
export function toneCardClasses(tone: CardTone, radiusClass = "rounded-2xl"): string {
  const { gradient, accent } = CARD_TONES[tone];
  return `pillar-card bg-gradient-to-br ${gradient} card-hover ${accent} ${radiusClass}`;
}

/** Text colour for the standalone icon of a tinted card. */
export function toneIconClasses(tone: CardTone): string {
  return CARD_TONES[tone].iconColor;
}
