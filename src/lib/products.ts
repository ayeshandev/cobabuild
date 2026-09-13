import type { StaticImageData } from "next/image";
import mulchBlockImg from "@/assets/products/mulch-block.webp";
import pottingMixImg from "@/assets/products/potting-mix.webp";
import growBagsImg from "@/assets/products/grow-bags.webp";
import cocoPeatBalesImg from "@/assets/products/coco-peat-bales.webp";
import cocoPeatBriquettesImg from "@/assets/products/coco-peat-briquettes.webp";
import coirPeatBrickImg from "@/assets/products/coir-peat-brick.webp";
import seedRaisingMixBlockImg from "@/assets/products/seed-raising-mix-block.webp";
import nakedGardenSoilBlockImg from "@/assets/products/naked-garden-soil-block.webp";
import megaGardenSoilImg from "@/assets/products/mega-garden-soil.webp";

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
  /** Additional product photos shown alongside the primary image on the product detail page. */
  gallery?: StaticImageData[];
  description: string;
  features: string[];
  usage?: string;
  applications: Application[];
  /** Technical spec table — omitted entirely (not just left empty) for products with no published specs. */
  specs?: SpecTable;
  packagingNote?: string;
  /** Other products in this same range, linked from the detail page (e.g. Coco Peat Bales' three SKUs). */
  subProducts?: { name: string; slug: string }[];
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
        { label: "Block Weight", values: ["4.1 Kg ± 100g", "4.1 Kg ± 100g", "6.5 Kg ± 100g"] },
        { label: "Compression Ratio", values: ["5:1", "5:1", "5:1"] },
        { label: "Volume After Expansion", values: ["Up To 60 Ltr", "Up To 65 Ltr", "Up To 90 Ltr"] },
        { label: "Blocks per Pallet", values: ["126 within box", "128 without box", "96 without box"] },
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
      columns: ["1.00 Kg ± 100g", "2.5 Kg ± 50g", "4.1 Kg ± 100g"],
      rows: [
        { label: "Dimension (cm)", values: ["21 x 14 x 9", "28 x 28 x 7", "28 x 28 x 14"] },
        { label: "Compression Ratio", values: ["5:1", "5:1", "5:1"] },
        { label: "Volume After Expansion", values: ["Up To 15 Ltr", "Up To 30 Ltr", "Up To 65 Ltr"] },
        { label: "Blocks per Pallet", values: ["465", "256", "126"] },
        { label: "Half Pallets per 40' FCL", values: ["40", "40", "40"] },
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
        { label: "Dimension (cm)", values: ["25 x 18 x 5", "25 x 20 x 6", "110 x 15 x 4", "100 x 20 x 4", "25 x 20 x 4"] },
        { label: "Weight", values: ["865g ± 50g", "1 kg ± 50g", "2.5kg ± 100g", "2.5 kg ± 100g", "800g ± 50g"] },
        { label: "Compression Ratio", values: ["5:1", "5:1", "5:1", "5:1", "5:1"] },
        { label: "Expansion (cm)", values: ["25 x 18 x 18", "25 x 20 x 18", "110 x 15 x 15", "100 x 20 x 15", "20 x 25 x 15"] },
        { label: "Blocks per Pallet", values: ["560", "400", "210", "200", "530"] },
        { label: "Half Pallets per 40' FCL", values: ["40", "40", "40", "40", "40"] },
        { label: "Blocks per 40' FCL", values: ["22,400", "16,000", "8,400", "8,000", "21,200"] },
        { label: "M/Tons per 40' FCL", values: ["19.376", "16.000", "21.000", "20.000", "16.960"] },
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
    subProducts: [
      { name: "Seed Raising Mix Block", slug: "seed-raising-mix-block" },
      { name: "Mega Garden Soil", slug: "naked-garden-soil-block" },
      { name: "Naked Garden Soil Block", slug: "naked-garden-soil-block" },
    ],
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
  },
  {
    slug: "coir-peat-brick",
    name: "Coir-Peat Brick",
    category: "Coco Peat",
    tagline: "Natural coconut fibre brick that expands into a versatile soil conditioner and growing medium",
    image: coirPeatBrickImg,
    description:
      "Coba Peat Coir-Peat Brick is a natural, lightweight growing medium made from coconut husk fibre. It is a versatile addition for improving soil structure, enhancing moisture retention, and creating a healthier growing environment for plants. When hydrated and incorporated into soil or potting blends, Coba Peat Coir-Peat helps improve the soil's ability to retain moisture while maintaining a loose, airy structure. It can be particularly useful for improving heavy or compacted soils and can provide lasting organic matter in the growing medium. Coba Peat Coir-Peat is suitable for preparing homemade potting mixes, containers, hanging baskets, garden beds, and vegetable gardens. Its versatility also makes it useful for applications such as worm farms, hydroponic growing systems, and reptile habitats.",
    features: [
      "Expands when hydrated – produces a generous volume of growing medium from a compact brick",
      "Improves soil structure – helps loosen dense soils and supports better aeration",
      "Excellent moisture management – helps retain water around plant roots while maintaining a suitable growing texture",
      "Natural coconut fibre – made from a renewable, plant-based source",
      "Versatile application – suitable for potting mixes, garden beds, containers, worm farms, hydroponics, and reptile habitats",
      "Long-lasting soil conditioner – provides durable organic fibre that can remain beneficial in soil for several years",
    ],
    applications: [
      { icon: "Package", label: "Potting mixes & containers" },
      { icon: "Flower2", label: "Hanging baskets" },
      { icon: "TreePine", label: "Garden beds & vegetable gardens" },
      { icon: "Layers", label: "Worm farms & hydroponic systems" },
      { icon: "Home", label: "Reptile habitats" },
    ],
    specs: {
      columns: ["600g ± 50g", "1 Kg ± 100g"],
      rows: [
        { label: "Yield", values: ["Up To 9 Ltr", "Up to 15 Ltr"] },
        { label: "Block Dimension", values: ["20 x 10 x 5 cm", "21 x 14 x 9 cm"] },
        { label: "Compression Ratio", values: ["8:1", "5:1"] },
        { label: "Half Pallets per 1x40' FCL", values: ["40", "40"] },
        { label: "Boxes per Pallet", values: ["150", "60"] },
        { label: "Briquette per Box", values: ["6", "6"] },
        { label: "Briquette per Pallet", values: ["900", "360"] },
        { label: "Briquette per 40' FCL", values: ["36,000", "14,400"] },
        { label: "M/Tons per 1x40' FCL", values: ["21.600", "14.400"] },
      ],
    },
    packagingNote:
      "Packed either as (1) unwrapped briquettes stacked on treated wooden pallets and wrapped with stretch film, or (2) blocks individually shrink-wrapped with labels, stacked on treated wooden pallets and wrapped with stretch film.",
  },
  {
    slug: "seed-raising-mix-block",
    name: "Seed Raising Mix Block",
    category: "Coco Peat",
    tagline: "Premium concentrated coir-based mix for healthy seed germination and propagation",
    image: seedRaisingMixBlockImg,
    description:
      "Coba Peat Seed Raising Mix is a premium, concentrated coir-based growing medium specially formulated to support healthy seed germination and plant propagation. Enriched with fertiliser, it provides young plants with the moisture, nutrients, and growing environment they need to get off to a strong start. Its excellent moisture-retention properties help maintain consistent hydration around seeds and cuttings, reducing the need for frequent watering. The coir-based medium also helps create a balanced growing environment throughout changing weather conditions, making it suitable for seed raising, propagation, and garden applications.",
    features: [
      "Supports healthy germination – creates a favourable environment for seeds to establish quickly",
      "Ideal for propagation – suitable for raising seedlings and propagating cuttings",
      "Excellent moisture retention – holds water effectively around developing roots and seeds",
      "Fertiliser enriched – provides additional nutrients to encourage strong early growth",
      "Versatile growing medium – suitable for use in seed trays, pots, propagation systems, and garden beds",
    ],
    applications: [
      { icon: "Sprout", label: "As a growing media for plants" },
      { icon: "Warehouse", label: "As a potting mix in nurseries" },
      { icon: "TreePine", label: "Ideal for commercial gardens" },
      { icon: "Landmark", label: "Ideal for landscaping & turfing" },
    ],
  },
  {
    slug: "naked-garden-soil-block",
    name: "Mega Garden Soil / Naked Garden Soil Block",
    category: "Coco Peat",
    tagline: "Coir-based garden soil block for moisture balance, drainage and healthy root development",
    image: megaGardenSoilImg,
    gallery: [nakedGardenSoilBlockImg],
    description:
      "Give your plants a healthy growing environment with Coba Peat Garden Soil Block, a premium coir-based growing medium designed to support moisture balance, drainage, and healthy root development. Made from carefully processed, fine-grade coir, Coba Peat helps retain essential moisture while allowing excess water to drain away. It is especially useful during warm conditions when plants need consistent moisture and can also help maintain a more stable growing environment during cooler periods. Simply add water to expand the compact block, then mix and apply it directly to your garden beds or growing areas. Both Garden Soil blocks go with the same features with or without labels — that's the only difference between the naked block and the branded Mega Coir Garden Soil pack.",
    features: [
      "Premium-quality coir-based growing medium",
      "Helps maintain consistent moisture around plant roots",
      "Provides effective drainage and aeration",
      "Supports a balanced growing environment",
      "Convenient compressed block format",
      "Easy to expand — just add water and use",
    ],
    usage:
      "Simply add water to expand the compact block, then mix and apply it directly to your garden beds or growing areas.",
    applications: [
      { icon: "Sprout", label: "Establishing new garden beds" },
      { icon: "Layers", label: "Refreshing and topping up existing soil" },
      { icon: "Leaf", label: "Organic vegetable gardens" },
      { icon: "Flower", label: "Herb gardens" },
      { icon: "Flower2", label: "Flower beds and ornamental plants" },
      { icon: "Package", label: "General garden and container applications" },
    ],
    specs: {
      columns: ["Naked Garden Soil 45L", "Seed Raising Mix", "Mega Garden Soil"],
      rows: [
        { label: "Weight", values: ["3.25 Kg ± 100g", "2 Kg ± 100g", "6.5 Kg ± 100g"] },
        { label: "Yield", values: ["60 – 65 Ltr", "30 Ltr", "85 – 90 Ltr"] },
        { label: "Block Dimension", values: ["28 x 28 x 14 cm", "25 x 18 x 12 cm", "28 x 28 x 18 cm"] },
        { label: "Compression Ratio", values: ["5:1", "5:1", "5:1"] },
        { label: "Loadability per Pallet", values: ["128 Blocks", "216 Blocks", "96 Blocks"] },
        { label: "Half Pallets per 1x40' FCL", values: ["40", "40", "40"] },
        { label: "Blocks per 40' FCL", values: ["5,120", "8,460", "3,840"] },
        { label: "Total M/Tons per 1x40' FCL", values: ["24.120", "17.280", "24.960"] },
      ],
    },
  },
];
