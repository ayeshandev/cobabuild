import type { StaticImageData } from "next/image";
import mulchBlockImg from "@/assets/products/mulch-block.jpeg";
import pottingMixImg from "@/assets/products/potting-mix.jpg";
import growBagsImg from "@/assets/products/grow-bags.jpeg";
import cocoPeatBalesImg from "@/assets/products/coco-peat-bales.jpg";
import cocoPeatBriquettesImg from "@/assets/products/coco-peat-briquettes.jpg";
import coirPeatBrickImg from "@/assets/products/coir-peat-brick.jpeg";
import seedRaisingMixBlockImg from "@/assets/products/seed-raising-mix-block.jpg";
import nakedGardenSoilBlockImg from "@/assets/products/naked-garden-soil-block.png";
import megaGardenSoilImg from "@/assets/products/mega-garden-soil.jpeg";

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
      columns: ["600g + 50g"],
      rows: [
        { label: "Dimension", values: ["20 x 10 x 5 cm"] },
        { label: "Compression Ratio", values: ["8:1"] },
        { label: "Yield", values: ["9 Ltr"] },
        { label: "Half Pallets per 1x40' FCL", values: ["40"] },
        { label: "Boxes per Pallet", values: ["150"] },
        { label: "Briquette per Box", values: ["6"] },
        { label: "Briquette per Pallet", values: ["900"] },
        { label: "Briquette per 40' FCL", values: ["36,000"] },
        { label: "M/Tons per 1x40' FCL", values: ["21.600"] },
      ],
    },
    packagingNote:
      "Packed either as (1) unwrapped briquettes stacked on treated wooden pallets and wrapped with stretch film, or (2) blocks individually shrink-wrapped with labels, stacked on treated wooden pallets and wrapped with stretch film.",
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
    usage:
      "Place the brick in a container large enough to accommodate its expansion, slowly add water and allow it to hydrate. Once expanded, simply pull it apart and mix it into soil, potting blends or garden beds.",
    applications: [
      { icon: "Package", label: "Potting mixes & containers" },
      { icon: "Flower2", label: "Hanging baskets" },
      { icon: "TreePine", label: "Garden beds & vegetable gardens" },
      { icon: "Layers", label: "Worm farms & hydroponic systems" },
      { icon: "Home", label: "Reptile habitats" },
    ],
    specs: {
      columns: ["1 Kg + 100g"],
      rows: [
        { label: "Yield", values: ["15 Ltr"] },
        { label: "Block Dimension", values: ["21 x 14 x 9 cm"] },
        { label: "Compression Ratio", values: ["5:1"] },
        { label: "Half Pallets per 1x40' FCL", values: ["40"] },
        { label: "Boxes per Pallet", values: ["60"] },
        { label: "Briquette per Box", values: ["6"] },
        { label: "Briquette per Pallet", values: ["360"] },
        { label: "Briquette per 40' FCL", values: ["14,400"] },
        { label: "M/Tons per 1x40' FCL", values: ["14.400"] },
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
    usage:
      "Place the block in a container, slowly add water and allow it to expand into a loose seed-raising mix. Once expanded, simply pull it apart and it's ready to use in trays, pots or garden beds.",
    applications: [
      { icon: "Leaf", label: "Seed trays & propagation systems" },
      { icon: "Sprout", label: "Raising seedlings & cuttings" },
      { icon: "Package", label: "Pots & containers" },
      { icon: "TreePine", label: "Garden bed applications" },
    ],
    specs: {
      columns: ["2 Kg + 100g"],
      rows: [
        { label: "Yield", values: ["30 Ltr"] },
        { label: "Block Dimension", values: ["25 x 18 x 12 cm"] },
        { label: "Compression Ratio", values: ["5:1"] },
        { label: "Loadability per Pallet", values: ["216 Blocks"] },
        { label: "Half Pallets per 1x40' FCL", values: ["40"] },
        { label: "Blocks per 40' FCL", values: ["8,460"] },
        { label: "Total M/Tons per 1x40' FCL", values: ["17.280"] },
      ],
    },
    packagingNote:
      "As per buyers' requirements, labeling can be arranged with their brand names, including their company details.",
  },
  {
    slug: "naked-garden-soil-block",
    name: "Naked Garden Soil Block",
    category: "Coco Peat",
    tagline: "Coir-based garden soil block for moisture balance, drainage and healthy root development",
    image: nakedGardenSoilBlockImg,
    gallery: [megaGardenSoilImg],
    description:
      "Give your plants a healthy growing environment with Coba Peat Garden Soil Block, a premium coir-based growing medium designed to support moisture balance, drainage, and healthy root development. Made from carefully processed, fine-grade coir, Coba Peat helps retain essential moisture while allowing excess water to drain away. It is especially useful during warm conditions when plants need consistent moisture and can also help maintain a more stable growing environment during cooler periods. Simply add water to expand the compact block, then mix and apply it directly to your garden beds or growing areas. Both the naked block and the branded Mega Coir Garden Soil package share the same features — the only difference is the label.",
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
      columns: ["Naked Garden Soil 45L", "Mega Garden Soil"],
      rows: [
        { label: "Weight", values: ["3.25 Kg + 100g", "6.5 Kg + 100g"] },
        { label: "Yield", values: ["60 – 65 Ltr", "85 – 90 Ltr"] },
        { label: "Block Dimension", values: ["28 x 28 x 14 cm", "28 x 28 x 18 cm"] },
        { label: "Compression Ratio", values: ["5:1", "5:1"] },
        { label: "Loadability per Pallet", values: ["128 Blocks", "96 Blocks"] },
        { label: "Half Pallets per 1x40' FCL", values: ["40", "40"] },
        { label: "Blocks per 40' FCL", values: ["5,120", "3,840"] },
        { label: "Total M/Tons per 1x40' FCL", values: ["24.120", "24.960"] },
      ],
    },
    packagingNote:
      "Available either as an unlabeled ('naked') block or branded with customer packaging such as Mega Coir Garden Soil — features are identical either way.",
  },
];
