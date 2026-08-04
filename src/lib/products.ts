import type { StaticImageData } from "next/image";
import mulchBlockImg from "@/assets/products/mulch-block.jpeg";
import pottingMixImg from "@/assets/products/potting-mix.jpg";
import growBagsImg from "@/assets/products/grow-bags.jpeg";
import cocoPeatBalesImg from "@/assets/products/coco-peat-bales.jpg";
import cocoPeatBriquettesImg from "@/assets/products/coco-peat-briquettes.jpg";
import livingDollsImg from "@/assets/products/coir-peat-brick.jpeg";
import gardenMatImg from "@/assets/products/mega-coir.jpg";
import fibrePotsImg from "@/assets/products/seed-raising-mix.jpg";

export type SpecTable = {
  columns: string[];
  rows: { label: string; values: string[] }[];
};

export type Application = { icon: string; label: string };

export type Product = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  image: StaticImageData;
  description: string;
  features: string[];
  usage?: string;
  applications: Application[];
  specs: SpecTable;
  packagingNote?: string;
};

export const products: Product[] = [
  {
    slug: "mulch-block",
    name: "Mulch Block",
    category: "Mulch",
    tagline: "Concentrated coir mulch with slow-release fertilizer, feeds plants for up to 4 months",
    image: mulchBlockImg,
    description:
      "Coba Peat & Mulch Block is a concentrated, premium grade coir mulch containing Nitrophoska slow-release fertilizer. Coir is an ideal mulch because it helps plants stay moist in hot weather while keeping the soil temperature warmer in cold months. It has a high water-holding capacity, so once it takes in water it holds it around shrubs, plants and garden beds for longer.",
    features: [
      "Feeds plants for up to 4 months",
      "Improves soil structure",
      "Easy to re-wet",
      "Saves water",
      "Keeps roots warm in winter and cool in summer",
    ],
    usage:
      "Place the block in a wheelbarrow, slowly add around 30 litres of water and allow it to rehydrate. Once expanded, simply pull it apart and it's ready to apply.",
    applications: [
      { icon: "Sprout", label: "Producers of growing media" },
      { icon: "Flower2", label: "As a potting mix" },
      { icon: "Layers", label: "As a soil conditioner" },
      { icon: "Leaf", label: "Seedling nurseries / seed-raising substrate" },
      { icon: "Trophy", label: "Golf course & sports field construction" },
      { icon: "TreePine", label: "Lawns, nurseries & landscaping" },
    ],
    specs: {
      columns: ["Easy Wetta Mulch", "Feed & Mulch", "Mega Feed & Mulch"],
      rows: [
        { label: "Block Dimension (cm)", values: ["28 x 28 x 14", "28 x 28 x 14", "28 x 28 x 18"] },
        { label: "Block Weight (kg)", values: ["4.1", "4.1", "6.5"] },
        { label: "Compression Ratio", values: ["5:1", "5:1", "5:1"] },
        { label: "Volume After Expansion", values: ["60 Ltr", "65 Ltr", "90 Ltr"] },
        { label: "Blocks per Pallet", values: ["244", "244", "154"] },
        { label: "Pallets per 40' FCL", values: ["40", "40", "40"] },
        { label: "Blocks per 40' FCL", values: ["5,040", "5,120", "3,840"] },
        { label: "M/Tons per 40' FCL", values: ["20.664", "20.992", "24.960"] },
      ],
    },
    packagingNote:
      "Individually shrink-wrapped with customer's labels, stacked on treated wooden pallets and wrapped with stretch film.",
  },
  {
    slug: "potting-mix",
    name: "Potting Mix",
    category: "Potting Mix",
    tagline: "Premium & organic coir blends for all indoor and outdoor growing",
    image: pottingMixImg,
    description:
      "Coba Potting Mix — Premium Coir Blend has been engineered from one of nature's cleanest creations, the coconut. This ultra-lightweight mix is soil-free and bark-free and does not go through a composting process — a clean, safe, 100% organic growing media for all containers, and safer to use in home garden applications. Coba Potting Mix — Organic Coir Blend has been expertly blended using 100% organic ingredients. This pH-balanced formula is of premium quality with air-filled porosity, suitable for run-to-waste and recycling systems, eliminating harmful environmental disposal issues, and suitable for use in all indoor and outdoor growing.",
    features: [
      "Saves water",
      "Suitable for all outdoor and indoor hydroponic applications",
      "Easy to re-wet",
      "Less risk of harmful bacteria and fungi than other potting mixes",
      "100% natural and environmentally safe",
    ],
    usage:
      "Place the block in a wheelbarrow, slowly add around 30 litres of water and allow it to expand into potting mix. Once expanded, simply pull it apart and it's ready to use.",
    applications: [
      { icon: "Home", label: "Indoor and outdoor growing" },
      { icon: "Package", label: "Hanging baskets" },
      { icon: "Palmtree", label: "Growing tropical plants" },
      { icon: "Flower2", label: "Roses and cut flowers" },
      { icon: "Flower", label: "Orchids" },
      { icon: "Sprout", label: "Potted plants" },
    ],
    specs: {
      columns: ["1.00 Kg", "2.5 Kg + 50g", "4.1 Kg + 100g"],
      rows: [
        { label: "Compression Ratio", values: ["5:1", "5:1", "5:1"] },
        { label: "Dimension (cm)", values: ["21 x 14 x 9", "28 x 28 x 7", "28 x 28 x 14"] },
        { label: "Volume After Expansion", values: ["15 Ltr", "30 Ltr", "60 Ltr"] },
        { label: "Blocks per Pallet", values: ["930", "256", "126"] },
        { label: "Pallets per 40' FCL", values: ["40", "40", "40"] },
        { label: "Blocks per 40' FCL", values: ["18,600", "10,240", "5,040"] },
        { label: "M/Tons per 40' FCL", values: ["18.600", "20.992", "20.664"] },
      ],
    },
    packagingNote:
      "As per buyers' requirements, labeling can be arranged with their brand names, including their company details.",
  },
  {
    slug: "grow-bags",
    name: "Grow Bags",
    category: "Growing Solutions",
    tagline: "Ready-to-plant growing container and media in one, for greenhouse & nursery production",
    image: growBagsImg,
    description:
      "This innovative product provides a growing container and media in one. Available as Nature Grow Bag, Tomato Grow Bag, Normal Grow Bag, Carnation Bag and Naked Grow Slab (no bag). Normal Grow Bags are also available in custom dimensions of 110 x 15 x 2.5cm (expanding to 110 x 15 x 7.5cm) and 100 x 20 x 2.5cm (expanding to 100 x 20 x 7.5cm), and can vary by number of drainage or planting holes, with or without buffering.",
    features: [
      "Labour & time saving",
      "Easier to break up",
      "Provides a more efficient and productive, hygienic growing environment",
      "Combines growing container & media in one product",
    ],
    applications: [
      { icon: "Sprout", label: "As a growing media for plants" },
      { icon: "Warehouse", label: "As a potting mix in nurseries" },
      { icon: "Building2", label: "Greenhouse cultivation of tomatoes, chilies, cucumbers & strawberries" },
      { icon: "Flower2", label: "Roses, gerberas & carnations" },
    ],
    specs: {
      columns: ["Nature Grow", "Tomato Grow Bag", "Normal Grow Bag", "Carnation Bag", "Naked Grow Slab (no bag)"],
      rows: [
        { label: "Weight", values: ["865g + 50g", "1 kg", "2.5kg + 100g", "2.5 kg", "800g + 50g"] },
        { label: "Compression Ratio", values: ["5:1", "5:1", "5:1", "5:1", "5:1"] },
        { label: "Dimension (cm)", values: ["25 x 18 x 5", "25 x 20 x 6", "110 x 15 x 4", "100 x 20 x 4", "25 x 20 x 4"] },
        { label: "Expansion (cm)", values: ["25 x 18 x 18", "25 x 20 x 18", "110 x 15 x 15", "100 x 20 x 15", "20 x 25 x 15"] },
        { label: "Blocks per Pallet", values: ["560", "400", "210", "200", "530"] },
        { label: "Pallets per 40' FCL", values: ["40", "40", "40", "40", "40"] },
        { label: "Blocks per 40' FCL", values: ["22,400", "16,000", "8,400", "8,000", "21,200"] },
        { label: "M/Tons per 40' FCL", values: ["19.376", "14.400", "21.000", "20.000", "16.960"] },
      ],
    },
    packagingNote:
      "Printing on bags: as per buyers' requirements, labeling can be arranged with their brand names, including their company details.",
  },
  {
    slug: "coco-peat-bales",
    name: "Coco Peat Bales",
    category: "Coco Peat",
    tagline: "Hard-compressed coco peat blocks for maximum container loadability",
    image: cocoPeatBalesImg,
    description:
      "Coco Peat Bales (Blocks) are our most common and popular block form, hard-compressed so a maximum weight can be loaded per container.",
    features: [
      "Pressure moulded using modern technology",
      "Non-toxic, natural & environmentally friendly",
      "Tightly compressed and therefore subject to considerable expansion in water",
      "Free of pathogenic bacteria through heat treatment",
      "Free of added chemical pollutants",
      "Free of weeds & seeds",
      "High retention of moisture, nutrients & oxygen for enhanced aeration",
      "Economical",
    ],
    applications: [
      { icon: "Sprout", label: "As a growing media for plants" },
      { icon: "Warehouse", label: "As a potting mix in nurseries" },
      { icon: "TreePine", label: "Ideal for commercial gardens" },
      { icon: "Landmark", label: "Ideal for landscaping & turfing" },
    ],
    specs: {
      columns: ["4.5 Kg + 100g", "5 Kg + 100g", "25 Kg + 200g"],
      rows: [
        { label: "Compression Ratio", values: ["5:1", "5:1", "2:1"] },
        { label: "Yield", values: ["60 – 65 Ltr", "70 – 75 Ltr", "300 – 350 Ltr"] },
        { label: "Block Dimension", values: ["28 x 28 x 14 cm", "28 x 28 x 14 cm", "33 x 44 x 80 cm"] },
        { label: "Loadability per Pallet", values: ["267 Blocks", "256 Blocks", "No Pallets"] },
        { label: "Pallets per 1x40' FCL", values: ["20", "20", "NIL (loosely packed)"] },
        { label: "Total Bales per 1x40' FCL", values: ["5,360", "4,480", "665"] },
        { label: "Total M/Tons per 1x40' FCL", values: ["24.12", "22.40", "16.6"] },
      ],
    },
  },
  {
    slug: "coco-peat-briquettes",
    name: "Coco Peat Briquettes",
    category: "Coco Peat",
    tagline: "Highly compressed briquettes, available with or without fertilizer",
    image: cocoPeatBriquettesImg,
    description:
      "Coba Peat Briquettes are highly compressed and therefore subject to considerable expansion in water. For this reason they should be placed in a container large enough to accommodate the expansion on contact with water.",
    features: [
      "Highly compressed, subject to considerable expansion in water",
      "Should be placed in a container large enough to accommodate expansion",
      "Available with or without fertilizer",
    ],
    applications: [
      { icon: "Sprout", label: "As a growing media for plants" },
      { icon: "Warehouse", label: "As a potting mix in nurseries" },
      { icon: "TreePine", label: "Ideal for commercial gardens" },
      { icon: "Landmark", label: "Ideal for landscaping & turfing" },
    ],
    specs: {
      columns: ["650g + 50g"],
      rows: [
        { label: "Dimension", values: ["20 x 10 x 5 cm"] },
        { label: "Compression Ratio", values: ["8:1"] },
        { label: "Yield", values: ["9 Ltr"] },
        { label: "Loadability", values: ["40 pallets per 1x40' FCL (approx. 38,400 blocks per FCL)"] },
        { label: "Total Weight per 1x40' FCL", values: ["24.12 M/Tons"] },
      ],
    },
    packagingNote:
      "Packed either as (1) unwrapped briquettes stacked on treated wooden pallets and wrapped with stretch film, or (2) blocks individually shrink-wrapped with labels, stacked on treated wooden pallets and wrapped with stretch film.",
  },
  {
    slug: "coba-living-dolls",
    name: "Coba Living Dolls",
    category: "Coir Craft",
    tagline: "Hand-crafted coir garden ornaments, made from the same natural fibre as our growing media",
    image: livingDollsImg,
    description:
      "Coba Living Dolls turn coconut coir into decorative, biodegradable garden figures — a specialty retail line built on the same fibre expertise behind our commercial growing media. Each piece is produced in limited runs, so quality and finish stay consistent across every batch.",
    features: [
      "100% natural coir construction — biodegradable and environmentally safe",
      "Produced in dedicated, limited monthly runs for consistent quality",
      "Suitable for retail garden centres and gift/décor ranges",
    ],
    applications: [
      { icon: "Home", label: "Retail garden centres" },
      { icon: "Package", label: "Gift & décor ranges" },
      { icon: "Leaf", label: "Decorative, biodegradable garden ornaments" },
    ],
    specs: {
      columns: ["Details"],
      rows: [
        {
          label: "Specifications",
          values: ["Contact our sales team for size, weight, packing and MOQ details."],
        },
      ],
    },
  },
  {
    slug: "coba-garden-mat",
    name: "Coba Garden Mat",
    category: "Coir Landscaping",
    tagline: "Natural coir matting for weed suppression, erosion control and landscaping",
    image: gardenMatImg,
    description:
      "Woven from durable coconut coir fibre, Coba Garden Mat is a natural alternative to plastic weed matting — biodegradable, breathable, and built to hold up outdoors.",
    features: [
      "100% biodegradable — no plastic to remove or dispose of later",
      "Breathable, allows water and air through to soil",
      "Suitable for landscaping, erosion control and nursery ground cover",
    ],
    applications: [
      { icon: "TreePine", label: "Landscaping & erosion control" },
      { icon: "Layers", label: "Nursery ground cover" },
      { icon: "Leaf", label: "Plastic-free weed suppression" },
    ],
    specs: {
      columns: ["Details"],
      rows: [
        {
          label: "Specifications",
          values: ["Contact our sales team for roll size, thickness and MOQ details."],
        },
      ],
    },
  },
  {
    slug: "coba-fibre-pots",
    name: "Coba Fibre Pots",
    category: "Coir Pots",
    tagline: "Biodegradable coir plant pots that go straight into the ground",
    image: fibrePotsImg,
    description:
      "Made entirely from coconut fibre, Coba Fibre Pots let growers plant the whole pot directly into soil — reducing transplant shock and eliminating plastic pot waste.",
    features: [
      "Plant pot and all — no need to remove seedlings before transplanting",
      "Fully biodegradable, breaks down naturally in soil",
      "Reduces transplant shock versus rigid plastic pots",
    ],
    applications: [
      { icon: "Sprout", label: "Seedling & nursery production" },
      { icon: "Leaf", label: "Direct-to-soil transplanting" },
      { icon: "Package", label: "Plastic-free potting" },
    ],
    specs: {
      columns: ["Details"],
      rows: [
        {
          label: "Specifications",
          values: ["Contact our sales team for pot sizes, packing and MOQ details."],
        },
      ],
    },
  },
];

export const productCategoryGrid: {
  title: string;
  description: string;
  image: StaticImageData;
  slug: string;
}[] = [
  {
    title: "Coco Peat Bales & Briquettes",
    description: "Hard-compressed blocks and highly compressed briquettes in multiple weights.",
    image: cocoPeatBalesImg,
    slug: "coco-peat-bales",
  },
  {
    title: "Mulch Block",
    description: "Slow-release fertilizer mulch blocks that feed plants for up to 4 months.",
    image: mulchBlockImg,
    slug: "mulch-block",
  },
  {
    title: "Potting Mix",
    description: "Premium & organic coir blends for indoor and outdoor growing.",
    image: pottingMixImg,
    slug: "potting-mix",
  },
  {
    title: "Grow Bags",
    description: "Ready-to-plant grow bags for greenhouse tomatoes, cucumbers and soft fruits.",
    image: growBagsImg,
    slug: "grow-bags",
  },
];
