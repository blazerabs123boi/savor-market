const products = [
  {
    id: 'castor-oil',
    category: 'beauty',
    catalogCategory: 'castor-oil',
    featured: true,
    badge: 'Bestseller',
    brand: 'CastorCo',
    name: 'Organic Golden Castor Oil',
    price: 109,
    oldPrice: null,
    image: null,
    imageAlt: 'Organic Golden Castor Oil bottle',
    description: 'Certified organic extra virgin castor oil for skin and hair.'
  },
  {
    id: 'sustain',
    category: 'wellness',
    catalogCategory: 'barbara-o-neill',
    featured: true,
    badge: 'Editors pick',
    brand: "Barbara O'Neill",
    name: 'Sustain Me',
    price: 210,
    oldPrice: null,
    image: null,
    imageAlt: 'Sustain Me book cover',
    description: 'A wellness book by Barbara ONeill.'
  },
  {
    id: 'castor-oil-250ml',
    category: 'beauty',
    catalogCategory: 'castor-oil',
    featured: true,
    badge: 'Sale',
    brand: 'CastorCo',
    name: 'Organic Golden Castor Oil 250ml',
    price: 169,
    oldPrice: null,
    image: null,
    imageAlt: 'Organic Golden Castor Oil 250ml bottle',
    description: 'Certified organic, extra-virgin castor oil made from pressed castor bean seeds. A versatile moisturizing and conditioning oil for skin, hair, scalp, and nails.'
  },
  {
    id: 'breast-castor-pack',
    category: 'wellness',
    catalogCategory: 'castor-oil',
    featured: true,
    badge: 'Castor oil care',
    brand: 'CastorCo',
    name: 'Breast Castor Oil Pack',
    price: 219,
    oldPrice: null,
    image: null,
    imageAlt: 'Breast Castor Oil Pack',
    description: 'A soft, 100% organic cotton pack designed to fit comfortably inside a bra. Use with Queen of the Thrones Organic Castor Oil, sold separately. Small fits approximately A–C cup sizes; the large pack may suit D cup sizes and up.'
  },
  {
    id: 'back-abdomen-castor-pack',
    category: 'wellness',
    catalogCategory: 'castor-oil',
    featured: true,
    badge: 'Castor oil care',
    brand: 'CastorCo',
    name: 'Back Abdomen Castor Oil Pack',
    price: 249,
    oldPrice: null,
    image: null,
    imageAlt: 'Back Abdomen Castor Oil Pack',
    description: 'A soft, 100% organic cotton pack with secure straps for a comfortable fit across the back. Use with Queen of the Thrones Organic Castor Oil, sold separately, as part of a calming self-care routine.'
  }
];

const t = (key, replacements) => window.savorTranslate
  ? window.savorTranslate(key, replacements)
  : key;

const additionalProducts = [
  ['Self Heal By Design', 150, "Barbara O'Neill", 'barbara-o-neill'],
  ['Tre Lune Wild Yam Cream', 260, 'Tre Lune', 'barbara-o-neill'],
  ['Ezyprotein Vegan Vanilla Protein Powder & Superfood Blend 1kg', 366.9, 'Ezyprotein', 'ezyprotein'],
  ['Ezyprotein Vegan Wild Berry Protein Powder & Superfood Blend 800g', 366.9, 'Ezyprotein', 'ezyprotein'],
  ['Ezyprotein Vegan Natural Protein Powder & Superfood Blend 1kg', 366.9, 'Ezyprotein', 'ezyprotein'],
  ['Ezyprotein Vegan Chocolate Protein Powder & Superfood Blend 1kg', 366.9, 'Ezyprotein', 'ezyprotein'],
  ['SNT Organic Turmeric Ground 40g', 20, 'SNT Organic', 'organic-ingredients'],
  ['SNT Organic Cayenne Pepper 40g', 24, 'SNT Organic', 'organic-ingredients'],
  ['SNT Organic Dandelion Leaves Tea Bag 18s', 28, 'SNT Organic', 'organic-ingredients'],
  ['SNT Organic Camomile Leaves Tea Bag 18s', 28, 'SNT Organic', 'organic-ingredients'],
  ['Garden of The Andes Organic Assorted Tea 20s', 25.9, 'Garden of The Andes', 'organic-ingredients'],
  ['Garden of The Andes Organic Patagonian Berries 20s', 28.9, 'Garden of The Andes', 'organic-ingredients'],
  ['Garden of The Andes Organic Rosehips with Hibiscus 20s', 28.9, 'Garden of The Andes', 'organic-ingredients'],
  ['Celtic Sea Salt Fine 200g', 13, 'Celtic Sea Salt', 'organic-ingredients'],
  ['Essential Oil - Eucalyptus 10ml', 60, 'Essential Oil', 'organic-ingredients'],
  ['Essential Oil - Frankincense Wild 5ml', 130, 'Essential Oil', 'organic-ingredients'],
  ['Essential Oil - Tea Tree 10ml', 95, 'Essential Oil', 'organic-ingredients'],
  ['Organic Virgin Raw Coconut Oil 250ml', 45, 'Organic Ingredients', 'organic-ingredients'],
  ['Organic E/V Olive Oil 250ml', 46, 'Organic Ingredients', 'organic-ingredients'],
  ['Organic Avocado Oil 250ml', 80, 'Organic Ingredients', 'organic-ingredients'],
  ['SNT Organic Rose Flower Buds 30g', 43, 'SNT Organic', 'organic-ingredients'],
  ['Activated Charcoal Powder 275g', 159, 'Organic Ingredients', 'organic-ingredients'],
  ['Garden of The Andes Organic Peppermint 20s', 19.9, 'Garden of The Andes', 'organic-ingredients'],
  ['Neck Castor Oil Pack', 179, 'Queen of the Thrones', 'castor-oil'],
  ['Pelvic Castor Oil Pack', 249, 'Queen of the Thrones', 'castor-oil'],
  ['Organic Golden Castor Oil 500ml', 269, 'CastorCo', 'castor-oil'],
  ['Castor Oil Hair Wrap', 219, 'CastorCo', 'castor-oil'],
  ['Organic Golden Castor Oil Roll-on with Rose Quartz', 199, 'CastorCo', 'castor-oil'],
  ['Cotton Flannel Insert + Straps for Castor Oil Pack', 179, 'CastorCo', 'castor-oil'],
  ['Beauty Sleep Castor Oil Eye Mask', 179, 'CastorCo', 'castor-oil'],
  ['Liver Castor Oil Pack', 239, 'CastorCo', 'castor-oil'],
  ['Kids Castor Oil Pack', 219, 'Queen of the Thrones', 'castor-oil']
];

additionalProducts.forEach(([name, price, brand, catalogCategory]) => {
  const category = catalogCategory === 'castor-oil'
    ? 'wellness'
    : catalogCategory === 'ezyprotein' || catalogCategory === 'organic-ingredients'
      ? 'nutrition'
      : 'wellness';
  const id = name === 'Kids Castor Oil Pack'
    ? 'kid-castor-oil-pack'
    : name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  products.push({
    id,
    category,
    catalogCategory,
    badge: {
      'castor-oil': 'Castor oil care',
      'organic-ingredients': 'Organic ingredients',
      ezyprotein: 'Ezyprotein',
      'barbara-o-neill': "Barbara O'Neill"
    }[catalogCategory],
    brand,
    name,
    price,
    oldPrice: null,
    image: null,
    imageAlt: name,
    description: name === 'Tre Lune Wild Yam Cream'
      ? 'A luxurious topical blend of wild yam, chaste tree, and dong quai in nourishing oils.'
      : `${name}, thoughtfully selected for your everyday wellness routine.`
  });
});

const productDetails = {
  'castor-oil': {
    name: 'Organic Golden Castor Oil 100ml',
    brand: 'Queen of the Thrones',
    image: 'assets/savor-market/pdf-image-007.jpg',
    imageAlt: 'Queen of the Thrones Organic Golden Castor Oil bottles in 100ml, 250ml, and 500ml sizes',
    description: 'A time-honoured, certified organic, extra-virgin oil pressed from castor bean seeds. Its moisturizing and conditioning properties make it a versatile addition to skin, hair, scalp, and nail care routines.'
  },
  sustain: {
    brand: "Barbara O'Neill",
    image: 'assets/savor-market/pdf-image-091.jpg',
    imageAlt: "Barbara O'Neill's Sustain Me book cover",
    description: 'A practical, illustrated guide to Barbara O’Neill’s nine foundational principles for everyday wellbeing. It explores lifestyle habits such as nutrition, sleep, and stress management, alongside natural approaches to self-care.'
  },
  'castor-oil-250ml': {
    brand: 'Queen of the Thrones',
    image: 'assets/savor-market/pdf-image-007.jpg',
    imageAlt: 'Queen of the Thrones Organic Golden Castor Oil bottles in 100ml, 250ml, and 500ml sizes',
    description: 'Certified organic, extra-virgin castor oil made from pressed castor bean seeds. A versatile moisturizing and conditioning oil for skin, hair, scalp, and nails.'
  },
  'breast-castor-pack': {
    brand: 'Queen of the Thrones',
    image: 'assets/savor-market/pdf-image-020.jpg',
    imageAlt: 'Queen of the Thrones small-breast castor oil pack',
    description: 'A soft, 100% organic cotton pack designed to fit comfortably inside a bra. Use with Queen of the Thrones Organic Castor Oil, sold separately. Small fits approximately A–C cup sizes; the large pack may suit D cup sizes and up.'
  },
  'back-abdomen-castor-pack': {
    name: 'Back Abdomen Castor Oil Pack',
    brand: 'Queen of the Thrones',
    description: 'A soft, 100% organic cotton castor oil pack with secure straps for a comfortable fit across the back or abdomen. Use with Queen of the Thrones Organic Castor Oil, sold separately, as part of a calming self-care routine.'
  },
  'self-heal-by-design': {
    name: 'Self Heal By Design',
    brand: "Barbara O'Neill",
    price: 150,
    image: 'assets/savor-market/pdf-image-087.jpg',
    imageAlt: "Barbara O'Neill's Self Heal by Design book cover",
    description: 'Barbara O’Neill draws on her experience in health, naturopathy, and nutrition in this accessible guide to the body’s natural capacity for healing and the conditions that support a health-conscious lifestyle.'
  },
  'tre-lune-wild-yam-cream': {
    price: 260,
    image: 'assets/savor-market/pdf-image-092.jpg',
    imageAlt: 'Tre Lune Wild Yam Cream',
    description: 'A topical cream with wild yam (Diosgenin), chaste tree, and dong quai in a blend of oils. Made as a gentle addition to a personal self-care routine.'
  },
  'snt-organic-turmeric-ground-40g': {
    image: 'assets/savor-market/pdf-image-046.jpg',
    imageAlt: 'Sonnentor organic ground turmeric',
    description: 'Golden-yellow ground turmeric with a woody, floral aroma. Use in curry blends, rice dishes, stews, lentils, and spiced vegetable dishes.'
  },
  'snt-organic-cayenne-pepper-40g': {
    image: 'assets/savor-market/pdf-image-047.jpg',
    imageAlt: 'Sonnentor organic ground cayenne pepper',
    description: 'Bright orange-red ground cayenne with a fruity aroma, a slight sweetness, and a lively, layered heat.'
  },
  'snt-organic-dandelion-leaves-tea-bag-18s': {
    image: 'assets/savor-market/pdf-image-050.jpg',
    imageAlt: 'Sonnentor organic dandelion leaves tea',
    description: 'Dandelion leaf tea with a delicate, spicy, earthy flavour. Enjoy as a simple herbal infusion.'
  },
  'snt-organic-camomile-leaves-tea-bag-18s': {
    name: 'SNT Organic Camomile Leaves Tea Bag 18s',
    image: 'assets/savor-market/pdf-image-051.jpg',
    imageAlt: 'Sonnentor organic camomile tea',
    description: 'A spicy-aromatic chamomile infusion brewed from German chamomile flowers. The tea may be enjoyed with honey and lemon.'
  },
  'snt-organic-rose-flower-buds-30g': {
    image: 'assets/savor-market/pdf-image-052.jpg',
    imageAlt: 'Sonnentor organic rose buds',
    description: 'Sweet-smelling rose flower buds with a gentle, sensuous taste. Enjoy as a delicate floral infusion or combine with lemon verbena or hemp leaves.'
  },
  'garden-of-the-andes-organic-assorted-tea-20s': {
    image: 'assets/savor-market/pdf-image-055.jpg',
    imageAlt: 'Garden of the Andes organic assorted teas',
    description: 'Organic tea made from hand-picked leaves grown on a certified organic farm in Chile. The teas are certified organic, non-GMO, gluten-free, caffeine-free, and suitable for vegetarian and vegan diets. Packed in unbleached tea bags without glue, preservatives, colouring, or added flavouring.'
  },
  'garden-of-the-andes-organic-patagonian-berries-20s': {
    image: 'assets/savor-market/pdf-image-056.jpg',
    imageAlt: 'Garden of the Andes organic Patagonian fruits tea',
    description: 'Organic Patagonian berries herbal tea from Garden of the Andes, grown and carefully hand-picked on its certified organic farm in Chile.'
  },
  'garden-of-the-andes-organic-rosehips-with-hibiscus-20s': {
    image: 'assets/savor-market/pdf-image-060.jpg',
    imageAlt: 'Garden of the Andes organic rosehip and hibiscus tea',
    description: 'An organic rosehip and hibiscus herbal tea from Garden of the Andes.'
  },
  'garden-of-the-andes-organic-peppermint-20s': {
    image: 'assets/savor-market/pdf-image-059.jpg',
    imageAlt: 'Garden of the Andes organic peppermint tea',
    description: 'Organic peppermint herbal tea from Garden of the Andes.'
  },
  'celtic-sea-salt-fine-200g': {
    image: 'assets/savor-market/pdf-image-061.jpg',
    imageAlt: 'Fine-ground Celtic sea salt',
    description: 'Fine Celtic sea salt for seasoning everyday meals.'
  },
  'essential-oil-eucalyptus-10ml': {
    description: 'Eucalyptus radiata essential oil with a fresh, slightly sweet aroma. Traditionally valued for its cleansing scent.'
  },
  'essential-oil-frankincense-wild-5ml': {
    image: 'assets/savor-market/pdf-image-065.jpg',
    imageAlt: 'Florame wild frankincense essential oil',
    description: 'Wild frankincense essential oil distilled from aromatic Boswellia resin, also known as true incense.'
  },
  'essential-oil-tea-tree-10ml': {
    description: 'Tea tree essential oil with a cleansing, purifying aroma, traditionally valued in Australia.'
  },
  'organic-virgin-raw-coconut-oil-250ml': {
    image: 'assets/savor-market/pdf-image-069.jpg',
    imageAlt: 'Organic virgin raw coconut oil',
    description: 'Certified-organic, raw, extra-virgin coconut oil that is cold-pressed to preserve its fresh, smooth character.'
  },
  'organic-e-v-olive-oil-250ml': {
    name: 'Organic E/V Olive Oil 250ml',
    image: 'assets/savor-market/pdf-image-070.jpg',
    imageAlt: 'Organic extra-virgin olive oil',
    description: 'Cold-pressed organic extra-virgin olive oil made from Tunisian olives. Traditional cultivation and the region’s growing conditions give the oil its distinctive aroma and flavour.'
  },
  'organic-avocado-oil-250ml': {
    name: 'Organic Avocado Oil 250ml',
    image: 'assets/savor-market/pdf-image-071.jpg',
    imageAlt: 'Organic avocado oil',
    description: 'First cold-pressed from selected organic avocados. This full-bodied oil contains omega-9 fatty acids, vitamin E, and flavonoids.'
  },
  'activated-charcoal-powder-275g': {
    image: 'assets/savor-market/pdf-image-074.jpg',
    imageAlt: 'Savor Market activated charcoal powder 275g',
    description: 'A finely porous adsorbent traditionally used in filtration to bind some contaminants. Activated charcoal does not bind every substance and is not a substitute for medical advice or emergency treatment.'
  },
  'ezyprotein-vegan-wild-berry-protein-powder-superfood-blend-800g': {
    description: 'Certified-organic, plant-based wholegrain brown rice protein from Australia. The rice is sprouted and bio-fermented using a chemical-free process; the blend provides all eight essential amino acids. Start with a small amount and follow the product label. Anyone with kidney disease or gout, or who is pregnant or breastfeeding, should consult a health professional before use.'
  },
  'ezyprotein-vegan-natural-protein-powder-superfood-blend-1kg': {
    description: 'Certified-organic, plant-based wholegrain brown rice protein from Australia. The rice is sprouted and bio-fermented using a chemical-free process; the blend provides all eight essential amino acids. Start with a small amount and follow the product label. Anyone with kidney disease or gout, or who is pregnant or breastfeeding, should consult a health professional before use.'
  },
  'ezyprotein-vegan-vanilla-protein-powder-superfood-blend-1kg': {
    description: 'Certified-organic, plant-based wholegrain brown rice protein from Australia. The rice is sprouted and bio-fermented using a chemical-free process; the blend provides all eight essential amino acids. Start with a small amount and follow the product label. Anyone with kidney disease or gout, or who is pregnant or breastfeeding, should consult a health professional before use.'
  },
  'ezyprotein-vegan-chocolate-protein-powder-superfood-blend-1kg': {
    description: 'Certified-organic, plant-based wholegrain brown rice protein from Australia. The rice is sprouted and bio-fermented using a chemical-free process; the blend provides all eight essential amino acids. Start with a small amount and follow the product label. Anyone with kidney disease or gout, or who is pregnant or breastfeeding, should consult a health professional before use.'
  },
  'organic-golden-castor-oil-500ml': {
    brand: 'Queen of the Thrones',
    image: 'assets/savor-market/pdf-image-007.jpg',
    imageAlt: 'Queen of the Thrones Organic Golden Castor Oil bottles in 100ml, 250ml, and 500ml sizes',
    description: 'Certified organic, extra-virgin castor oil made from pressed castor bean seeds. A versatile moisturizing and conditioning oil for skin, hair, scalp, and nails.'
  },
  'organic-golden-castor-oil-roll-on-with-rose-quartz': {
    brand: 'Queen of the Thrones',
    image: 'assets/savor-market/pdf-image-011.jpg',
    imageAlt: 'Organic castor oil roll-on with rose quartz roller',
    description: 'Cold-pressed organic castor oil in an easy roll-on format with rose quartz. Apply to dry areas, cuticles, or hair and scalp as part of a personal care routine. For pack use, apply to the soft side of the pack and follow the pack instructions.'
  },
  'liver-castor-oil-pack': {
    brand: 'Queen of the Thrones',
    image: 'assets/savor-market/pdf-image-014.jpg',
    imageAlt: 'Queen of the Thrones liver castor oil pack',
    description: 'A soft, 100% organic cotton castor oil pack with stretchy, adjustable straps. Use with Queen of the Thrones Organic Castor Oil, sold separately, as part of a comfortable self-care routine.'
  },
  'pelvic-castor-oil-pack': {
    brand: 'Queen of the Thrones',
    image: 'assets/savor-market/pdf-image-019.jpg',
    imageAlt: 'Queen of the Thrones pelvic castor oil pack',
    description: 'A comfortable castor oil pack designed to fit around the pelvic area, made with an inner layer of 100% organic cotton and stretchy straps. Use with Queen of the Thrones Organic Castor Oil, sold separately.'
  },
  'neck-castor-oil-pack': {
    name: 'Neck Castor Oil Pack',
    brand: 'Queen of the Thrones',
    image: 'assets/savor-market/pdf-image-026.jpg',
    imageAlt: 'Queen of the Thrones thyroid castor oil pack',
    description: 'A soft, 100% organic cotton pack with comfortable, adjustable straps, designed for the neck area. Use with Queen of the Thrones Organic Castor Oil, sold separately.'
  },
  'kid-castor-oil-pack': {
    name: 'Kids Castor Oil Pack',
    brand: 'Queen of the Thrones',
    image: 'assets/savor-market/pdf-image-027.jpg',
    imageAlt: 'Kids Castor Oil Pack',
    description: 'A soft, comfortable castor oil pack made with an inner layer of 100% organic cotton and stretchy, adjustable straps. Designed for use with Queen of the Thrones Organic Castor Oil, sold separately. An adult should supervise use.'
  },
  'beauty-sleep-castor-oil-eye-mask': {
    brand: 'Queen of the Thrones',
    image: 'assets/savor-market/pdf-image-035.jpg',
    imageAlt: 'Queen of the Thrones castor oil eye mask',
    description: 'A cozy eye mask with an inner layer of 100% organic cotton. Pair with Queen of the Thrones Organic Castor Oil, sold separately, for a gentle self-care ritual.'
  },
  'castor-oil-hair-wrap': {
    name: 'Castor Oil Hair Wrap',
    brand: 'Queen of the Thrones',
    image: 'assets/savor-market/pdf-image-036.jpg',
    imageAlt: 'Queen of the Thrones castor oil hair wrap',
    description: 'A soft, breathable hair wrap that holds hair in place while helping keep a castor oil hair-care routine tidy. Pair with the organic cotton insert and Queen of the Thrones Organic Castor Oil, sold separately.'
  },
  'cotton-flannel-insert-straps-for-castor-oil-pack': {
    name: 'Cotton Flannel Insert + Straps for Castor Oil Pack',
    brand: 'Queen of the Thrones',
    image: 'assets/savor-market/pdf-image-042.jpg',
    imageAlt: 'Organic cotton castor oil pack insert with straps',
    description: 'A 100% organic cotton flannel insert with a detachable, adjustable strap for a comfortable fit. Made for a traditional castor oil pack routine.'
  }
};

products.forEach((product) => {
  const details = productDetails[product.id];
  if (details) Object.assign(product, details);
});

// Product details supplied in the SM-70 to SM-120 image inventory; prices await confirmation.
products.push(...[
  {
    "id": "sm-70",
    "sku": "SM-70",
    "name": "Brown Rice Cracker",
    "brand": "Matahari",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-70_Brown_Rice_Cracker.png",
    "imageAlt": "Brown Rice Cracker",
    "description": "Brown Rice Cracker by Matahari."
  },
  {
    "id": "sm-71",
    "sku": "SM-71",
    "name": "Pure Peanut Spread - 340g",
    "brand": "Aenon",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-71_Pure_Peanut_Spread_-_340g.png",
    "imageAlt": "Pure Peanut Spread - 340g",
    "description": "Pure Peanut Spread - 340g by Aenon."
  },
  {
    "id": "sm-72",
    "sku": "SM-72",
    "name": "Pure Peanut Spread - 180g",
    "brand": "Aenon",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-72_Pure_Peanut_Spread_-_180g.png",
    "imageAlt": "Pure Peanut Spread - 180g",
    "description": "Pure Peanut Spread - 180g by Aenon."
  },
  {
    "id": "sm-73",
    "sku": "SM-73",
    "name": "Pure Almond Spread - 340g",
    "brand": "Aenon",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-73_Pure_Almond_Spread_-_340g.png",
    "imageAlt": "Pure Almond Spread - 340g",
    "description": "Pure Almond Spread - 340g by Aenon."
  },
  {
    "id": "sm-74",
    "sku": "SM-74",
    "name": "Pure Cashew Spread - 340g",
    "brand": "Aenon",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-74_Pure_Cashew_Spread_-_340g.png",
    "imageAlt": "Pure Cashew Spread - 340g",
    "description": "Pure Cashew Spread - 340g by Aenon."
  },
  {
    "id": "sm-75",
    "sku": "SM-75",
    "name": "Pure Black Tahini Spread - 340g",
    "brand": "Aenon",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-75_Pure_Black_Tahini_Spread_-_340g.png",
    "imageAlt": "Pure Black Tahini Spread - 340g",
    "description": "Pure Black Tahini Spread - 340g by Aenon."
  },
  {
    "id": "sm-76",
    "sku": "SM-76",
    "name": "Bio C Antioxidant - 750ml",
    "brand": "Voelkel",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-76_Bio_C_Antioxidant_-_750ml.png",
    "imageAlt": "Bio C Antioxidant - 750ml",
    "description": "Bio C Antioxidant - 750ml by Voelkel."
  },
  {
    "id": "sm-77",
    "sku": "SM-77",
    "name": "Carrot Juice Field-Fresh - 700ml",
    "brand": "Voelkel",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-77_Carrot_Juice_Field-Fresh_-_700ml.png",
    "imageAlt": "Carrot Juice Field-Fresh - 700ml",
    "description": "Carrot Juice Field-Fresh - 700ml by Voelkel."
  },
  {
    "id": "sm-78",
    "sku": "SM-78",
    "name": "Care Plum Juice - 750ml",
    "brand": "Voelkel",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-78_Care_Plum_Juice_-_750ml.png",
    "imageAlt": "Care Plum Juice - 750ml",
    "description": "Care Plum Juice - 750ml by Voelkel."
  },
  {
    "id": "sm-79",
    "sku": "SM-79",
    "name": "Lacto-fermented Beetroot Juice - 700ml",
    "brand": "Voelkel",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-79_Lacto-fermented_Beetroot_Juice_-_700ml.png",
    "imageAlt": "Lacto-fermented Beetroot Juice - 700ml",
    "description": "Lacto-fermented Beetroot Juice - 700ml by Voelkel."
  },
  {
    "id": "sm-80",
    "sku": "SM-80",
    "name": "Vegetable Composition Lacto-fermented - 700ml",
    "brand": "Voelkel",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-80_Vegetable_Composition_Lacto-fermented_-_700ml.png",
    "imageAlt": "Vegetable Composition Lacto-fermented - 700ml",
    "description": "Vegetable Composition Lacto-fermented - 700ml by Voelkel."
  },
  {
    "id": "sm-81",
    "sku": "SM-81",
    "name": "Kombucha Lime & Ginger - 330ml",
    "brand": "Voelkel",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-81_Kombucha_Lime_Ginger_-_330ml.png",
    "imageAlt": "Kombucha Lime & Ginger - 330ml",
    "description": "Kombucha Lime & Ginger - 330ml by Voelkel."
  },
  {
    "id": "sm-82",
    "sku": "SM-82",
    "name": "Kombucha Sour Cherry & Mint - 330ml",
    "brand": "Voelkel",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-82_Kombucha_Sour_Cherry_Mint_-_330ml.png",
    "imageAlt": "Kombucha Sour Cherry & Mint - 330ml",
    "description": "Kombucha Sour Cherry & Mint - 330ml by Voelkel."
  },
  {
    "id": "sm-83",
    "sku": "SM-83",
    "name": "Kombucha Original - 330ml",
    "brand": "Voelkel",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-83_Kombucha_Original_-_330ml.png",
    "imageAlt": "Kombucha Original - 330ml",
    "description": "Kombucha Original - 330ml by Voelkel."
  },
  {
    "id": "sm-84",
    "sku": "SM-84",
    "name": "Apple Juice Demeter - 750ml",
    "brand": "Why Not?",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-84_Apple_Juice_Demeter_-_750ml.png",
    "imageAlt": "Apple Juice Demeter - 750ml",
    "description": "Apple Juice Demeter - 750ml by Why Not?."
  },
  {
    "id": "sm-85",
    "sku": "SM-85",
    "name": "Semi-Whole Spaghetti - 500g",
    "brand": "Girolomoni",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-85_Semi-Whole_Spaghetti_-_500g.png",
    "imageAlt": "Semi-Whole Spaghetti - 500g",
    "description": "Semi-Whole Spaghetti - 500g by Girolomoni."
  },
  {
    "id": "sm-86",
    "sku": "SM-86",
    "name": "Spaghetti - 500g",
    "brand": "Girolomoni",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-86_Spaghetti_-_500g.png",
    "imageAlt": "Spaghetti - 500g",
    "description": "Spaghetti - 500g by Girolomoni."
  },
  {
    "id": "sm-87",
    "sku": "SM-87",
    "name": "Tricolour Fusilli - 500g",
    "brand": "Girolomoni",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-87_Tricolour_Fusilli_-_500g.png",
    "imageAlt": "Tricolour Fusilli - 500g",
    "description": "Tricolour Fusilli - 500g by Girolomoni."
  },
  {
    "id": "sm-88",
    "sku": "SM-88",
    "name": "Tomato Passata - 700g",
    "brand": "Girolomoni",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-88_Tomato_Passata_-_700g.png",
    "imageAlt": "Tomato Passata - 700g",
    "description": "Tomato Passata - 700g by Girolomoni."
  },
  {
    "id": "sm-89",
    "sku": "SM-89",
    "name": "Tomato & Basil Sauce - 290g",
    "brand": "Girolomoni",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-89_Tomato_Basil_Sauce_-_290g.png",
    "imageAlt": "Tomato & Basil Sauce - 290g",
    "description": "Tomato & Basil Sauce - 290g by Girolomoni."
  },
  {
    "id": "sm-90",
    "sku": "SM-90",
    "name": "Tomato Sauce with Olives & Capers - 290g",
    "brand": "Girolomoni",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-90_Tomato_Sauce_with_Olives_Capers_-_290g.png",
    "imageAlt": "Tomato Sauce with Olives & Capers - 290g",
    "description": "Tomato Sauce with Olives & Capers - 290g by Girolomoni."
  },
  {
    "id": "sm-91",
    "sku": "SM-91",
    "name": "Pumpkin Seed Oil - 250ml",
    "brand": "Emile Noël",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-91_Pumpkin_Seed_Oil_-_250ml.png",
    "imageAlt": "Pumpkin Seed Oil - 250ml",
    "description": "Pumpkin Seed Oil - 250ml by Emile Noël."
  },
  {
    "id": "sm-92",
    "sku": "SM-92",
    "name": "Walnut Oil - 250ml",
    "brand": "Emile Noël",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-92_Walnut_Oil_-_250ml.png",
    "imageAlt": "Walnut Oil - 250ml",
    "description": "Walnut Oil - 250ml by Emile Noël."
  },
  {
    "id": "sm-93",
    "sku": "SM-93",
    "name": "Garlic Paste - 90g",
    "brand": "Emile Noël",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-93_Garlic_Paste_-_90g.png",
    "imageAlt": "Garlic Paste - 90g",
    "description": "Garlic Paste - 90g by Emile Noël."
  },
  {
    "id": "sm-94",
    "sku": "SM-94",
    "name": "Harissa Chilli Paste - 90g",
    "brand": "Emile Noël",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-94_Harissa_Chilli_Paste_-_90g.png",
    "imageAlt": "Harissa Chilli Paste - 90g",
    "description": "Harissa Chilli Paste - 90g by Emile Noël."
  },
  {
    "id": "sm-95",
    "sku": "SM-95",
    "name": "Modena Balsamic Vinegar - 250ml",
    "brand": "Emile Noël",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-95_Modena_Balsamic_Vinegar_-_250ml.png",
    "imageAlt": "Modena Balsamic Vinegar - 250ml",
    "description": "Modena Balsamic Vinegar - 250ml by Emile Noël."
  },
  {
    "id": "sm-96",
    "sku": "SM-96",
    "name": "Pitted Black Olive - 190g",
    "brand": "Emile Noël",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-96_Pitted_Black_Olive_-_190g.png",
    "imageAlt": "Pitted Black Olive - 190g",
    "description": "Pitted Black Olive - 190g by Emile Noël."
  },
  {
    "id": "sm-97",
    "sku": "SM-97",
    "name": "Pure Ceylon Tea - 20s",
    "brand": "Garden of the Andes",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-97_Pure_Ceylon_Tea_-_20s.png",
    "imageAlt": "Pure Ceylon Tea - 20s",
    "description": "Pure Ceylon Tea - 20s by Garden of the Andes."
  },
  {
    "id": "sm-98",
    "sku": "SM-98",
    "name": "Green Tea - 20s",
    "brand": "Garden of the Andes",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-98_Green_Tea_-_20s.png",
    "imageAlt": "Green Tea - 20s",
    "description": "Green Tea - 20s by Garden of the Andes."
  },
  {
    "id": "sm-99",
    "sku": "SM-99",
    "name": "Chamomile Tea - 20s",
    "brand": "Garden of the Andes",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-99_Chamomile_Tea_-_20s.png",
    "imageAlt": "Chamomile Tea - 20s",
    "description": "Chamomile Tea - 20s by Garden of the Andes."
  },
  {
    "id": "sm-100",
    "sku": "SM-100",
    "name": "Ginger Lemongrass Tea - 20s",
    "brand": "Garden of the Andes",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-100_Ginger_Lemongrass_Tea_-_20s.png",
    "imageAlt": "Ginger Lemongrass Tea - 20s",
    "description": "Ginger Lemongrass Tea - 20s by Garden of the Andes."
  },
  {
    "id": "sm-101",
    "sku": "SM-101",
    "name": "Lemon Verbena Tea - 20s",
    "brand": "Garden of the Andes",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-101_Lemon_Verbena_Tea_-_20s.png",
    "imageAlt": "Lemon Verbena Tea - 20s",
    "description": "Lemon Verbena Tea - 20s by Garden of the Andes."
  },
  {
    "id": "sm-102",
    "sku": "SM-102",
    "name": "Liberate Your Liver Tea - 18s",
    "brand": "Sonnentor",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-102_Liberate_Your_Liver_Tea_-_18s.png",
    "imageAlt": "Liberate Your Liver Tea - 18s",
    "description": "Liberate Your Liver Tea - 18s by Sonnentor."
  },
  {
    "id": "sm-103",
    "sku": "SM-103",
    "name": "Happiness Is A Restful Sleep Tea - 18s",
    "brand": "Sonnentor",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-103_Happiness_Is_A_Restful_Sleep_Tea_-_18s.png",
    "imageAlt": "Happiness Is A Restful Sleep Tea - 18s",
    "description": "Happiness Is A Restful Sleep Tea - 18s by Sonnentor."
  },
  {
    "id": "sm-104",
    "sku": "SM-104",
    "name": "Sweet Dreams Tea - 18s",
    "brand": "Sonnentor",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-104_Sweet_Dreams_Tea_-_18s.png",
    "imageAlt": "Sweet Dreams Tea - 18s",
    "description": "Sweet Dreams Tea - 18s by Sonnentor."
  },
  {
    "id": "sm-105",
    "sku": "SM-105",
    "name": "Ginger Energy Tea - 18s",
    "brand": "Sonnentor",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-105_Ginger_Energy_Tea_-_18s.png",
    "imageAlt": "Ginger Energy Tea - 18s",
    "description": "Ginger Energy Tea - 18s by Sonnentor."
  },
  {
    "id": "sm-106",
    "sku": "SM-106",
    "name": "Rooibos Tea - 18s",
    "brand": "Sonnentor",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-106_Rooibos_Tea_-_18s.png",
    "imageAlt": "Rooibos Tea - 18s",
    "description": "Rooibos Tea - 18s by Sonnentor."
  },
  {
    "id": "sm-107",
    "sku": "SM-107",
    "name": "Earl Grey Black Tea - 18s",
    "brand": "Sonnentor",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-107_Earl_Grey_Black_Tea_-_18s.png",
    "imageAlt": "Earl Grey Black Tea - 18s",
    "description": "Earl Grey Black Tea - 18s by Sonnentor."
  },
  {
    "id": "sm-108",
    "sku": "SM-108",
    "name": "Jasmine Green Tea - 18s",
    "brand": "Sonnentor",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-108_Jasmine_Green_Tea_-_18s.png",
    "imageAlt": "Jasmine Green Tea - 18s",
    "description": "Jasmine Green Tea - 18s by Sonnentor."
  },
  {
    "id": "sm-109",
    "sku": "SM-109",
    "name": "12-Herbs Seasoning - 120g",
    "brand": "Sonnentor",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-109_12-Herbs_Seasoning_-_120g.png",
    "imageAlt": "12-Herbs Seasoning - 120g",
    "description": "12-Herbs Seasoning - 120g by Sonnentor."
  },
  {
    "id": "sm-110",
    "sku": "SM-110",
    "name": "Chakalaka Spice - 65g",
    "brand": "Sonnentor",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-110_Chakalaka_Spice_-_65g.png",
    "imageAlt": "Chakalaka Spice - 65g",
    "description": "Chakalaka Spice - 65g by Sonnentor."
  },
  {
    "id": "sm-111",
    "sku": "SM-111",
    "name": "Chili Flakes - 45g",
    "brand": "Sonnentor",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-111_Chili_Flakes_-_45g.png",
    "imageAlt": "Chili Flakes - 45g",
    "description": "Chili Flakes - 45g by Sonnentor."
  },
  {
    "id": "sm-112",
    "sku": "SM-112",
    "name": "Pizza & Pasta Seasoning - 20g",
    "brand": "Sonnentor",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-112_Pizza_Pasta_Seasoning_-_20g.png",
    "imageAlt": "Pizza & Pasta Seasoning - 20g",
    "description": "Pizza & Pasta Seasoning - 20g by Sonnentor."
  },
  {
    "id": "sm-113",
    "sku": "SM-113",
    "name": "Basil - 15g",
    "brand": "Sonnentor",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-113_Basil_-_15g.png",
    "imageAlt": "Basil - 15g",
    "description": "Basil - 15g by Sonnentor."
  },
  {
    "id": "sm-114",
    "sku": "SM-114",
    "name": "Ginger Powder - 30g",
    "brand": "Sonnentor",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-114_Ginger_Powder_-_30g.png",
    "imageAlt": "Ginger Powder - 30g",
    "description": "Ginger Powder - 30g by Sonnentor."
  },
  {
    "id": "sm-115",
    "sku": "SM-115",
    "name": "Pepper Black Powder - 50g",
    "brand": "Sonnentor",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-115_Pepper_Black_Powder_-_50g.png",
    "imageAlt": "Pepper Black Powder - 50g",
    "description": "Pepper Black Powder - 50g by Sonnentor."
  },
  {
    "id": "sm-116",
    "sku": "SM-116",
    "name": "Demeter Coconut Milk - 400g",
    "brand": "MeritO",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": null,
    "imageAlt": "Demeter Coconut Milk - 400g",
    "description": "Demeter Coconut Milk - 400g by MeritO."
  },
  {
    "id": "sm-117",
    "sku": "SM-117",
    "name": "Agave Syrup - 250ml",
    "brand": "NaturGreen",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": "assets/snacks/SM-117_Agave_Syrup_-_250ml.png",
    "imageAlt": "Agave Syrup - 250ml",
    "description": "Agave Syrup - 250ml by NaturGreen."
  },
  {
    "id": "sm-120",
    "sku": "SM-120",
    "name": "Molasses",
    "brand": "Savor Market",
    "category": "nutrition",
    "catalogCategory": "snacks",
    "shopSection": "snacks",
    "badge": "Snacks",
    "price": null,
    "oldPrice": null,
    "image": null,
    "imageAlt": "Molasses",
    "description": "Molasses."
  }
]);

const shopSections = ['snacks', 'wellness'];
products.forEach((product) => {
  if (!product.shopSection) {
    product.shopSection = product.catalogCategory === 'castor-oil'
      || product.catalogCategory === 'barbara-o-neill'
      || product.catalogCategory === 'ezyprotein'
      || /^Essential Oil|^Activated Charcoal/i.test(product.name)
      ? 'wellness' : 'snacks';
  }
});
const matchesCatalogFilter = (product, filter) => shopSections.includes(filter)
  ? product.shopSection === filter : product.catalogCategory === filter;

const collectionProducts = {
  snacks: new Set(products.filter(p => p.shopSection === 'snacks').map(p => p.id)),
  wellness: new Set(products.filter(p => p.shopSection === 'wellness').map(p => p.id)),
  'clean-nutrition': new Set([
    'ezyprotein-vegan-vanilla-protein-powder-superfood-blend-1kg',
    'ezyprotein-vegan-wild-berry-protein-powder-superfood-blend-800g',
    'ezyprotein-vegan-natural-protein-powder-superfood-blend-1kg',
    'ezyprotein-vegan-chocolate-protein-powder-superfood-blend-1kg',
    'snt-organic-turmeric-ground-40g',
    'snt-organic-cayenne-pepper-40g',
    'snt-organic-dandelion-leaves-tea-bag-18s',
    'snt-organic-camomile-leaves-tea-bag-18s',
    'garden-of-the-andes-organic-assorted-tea-20s',
    'garden-of-the-andes-organic-patagonian-berries-20s',
    'celtic-sea-salt-fine-200g',
    'organic-virgin-raw-coconut-oil-250ml',
    'organic-avocado-oil-250ml',
    'organic-e-v-olive-oil-250ml',
    'snt-organic-rose-flower-buds-30g',
    'activated-charcoal-powder-275g',
    'garden-of-the-andes-organic-peppermint-20s',
    'garden-of-the-andes-organic-rosehips-with-hibiscus-20s'
  ]),
  'skin-hair': new Set([
    'castor-oil',
    'castor-oil-250ml',
    'breast-castor-pack',
    'back-abdomen-castor-pack',
    'tre-lune-wild-yam-cream',
    'essential-oil-tea-tree-10ml',
    'essential-oil-frankincense-wild-5ml',
    'neck-castor-oil-pack',
    'organic-golden-castor-oil-500ml',
    'castor-oil-hair-wrap',
    'organic-golden-castor-oil-roll-on-with-rose-quartz',
    'cotton-flannel-insert-straps-for-castor-oil-pack',
    'beauty-sleep-castor-oil-eye-mask',
    'liver-castor-oil-pack',
    'kid-castor-oil-pack',
    'pelvic-castor-oil-pack'
  ]),
  'morning-reset': new Set([
    'sustain',
    'snt-organic-turmeric-ground-40g',
    'snt-organic-cayenne-pepper-40g',
    'snt-organic-dandelion-leaves-tea-bag-18s',
    'snt-organic-camomile-leaves-tea-bag-18s',
    'garden-of-the-andes-organic-assorted-tea-20s',
    'garden-of-the-andes-organic-patagonian-berries-20s',
    'essential-oil-eucalyptus-10ml',
    'organic-virgin-raw-coconut-oil-250ml',
    'garden-of-the-andes-organic-peppermint-20s',
    'garden-of-the-andes-organic-rosehips-with-hibiscus-20s'
  ])
};

products.forEach((product) => {
  product.collections = Object.entries(collectionProducts)
    .filter(([, productIds]) => productIds.has(product.id))
    .map(([collectionId]) => collectionId);

  if (!product.collections.length) product.collections.push('clean-nutrition');
});

const grid = document.querySelector('#product-grid');
const productsPage = document.querySelector('.all-products-page');
const categoryResultsGrid = document.querySelector('#category-products-grid');
const collectionGrids = Object.fromEntries(
  Object.keys(collectionProducts).map((id) => [id, document.querySelector(`#collection-grid-${id}`)])
);
const cartPage = document.querySelector('#cart-page');
const filterButtons = document.querySelectorAll('button.filter-btn');
const searchInput = document.querySelector('#product-search');
const cartCount = document.querySelector('#cart-count');
const newsletterForm = document.querySelector('.newsletter-form');
const catalogCategories = [...shopSections, 'castor-oil', 'barbara-o-neill', 'ezyprotein', 'organic-ingredients'];
const requestedCategory = new URLSearchParams(window.location.search).get('category');
let activeFilter = catalogCategories.includes(requestedCategory) ? requestedCategory : 'all';
const cartStorageKey = 'savor-market-cart';
const pendingCheckoutStorageKey = 'savor-market-pending-checkout';
let checkoutStatusMessage = '';

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

function readCart() {
  try {
    const savedCart = JSON.parse(window.localStorage.getItem(cartStorageKey) || '{}');
    if (!savedCart || typeof savedCart !== 'object' || Array.isArray(savedCart)) return {};
    const availableProductIds = new Set(products.map((product) => product.id));
    return Object.fromEntries(
      Object.entries(savedCart).filter(([productId, quantity]) =>
        availableProductIds.has(productId) && Number.isInteger(quantity) && quantity > 0
      )
    );
  } catch (error) {
    console.error('Unable to read the saved shopping cart.', error);
    return {};
  }
}

let cart = readCart();

function saveCart() {
  try {
    window.localStorage.setItem(cartStorageKey, JSON.stringify(cart));
  } catch (error) {
    console.error('Unable to save the shopping cart in this browser.', error);
  }
}

function readPendingCheckout() {
  try {
    const pending = JSON.parse(window.sessionStorage.getItem(pendingCheckoutStorageKey) || 'null');
    if (!pending || typeof pending.sessionId !== 'string' || !pending.items || typeof pending.items !== 'object') return null;
    const items = Object.fromEntries(
      Object.entries(pending.items).filter(([id, quantity]) =>
        products.some((product) => product.id === id) && Number.isInteger(quantity) && quantity > 0
      )
    );
    return Object.keys(items).length ? { sessionId: pending.sessionId, items } : null;
  } catch (error) {
    console.error('Unable to read the pending checkout details.', error);
    return null;
  }
}

function clearPendingCheckout() {
  try {
    window.sessionStorage.removeItem(pendingCheckoutStorageKey);
  } catch (error) {
    console.error('Unable to clear the pending checkout details.', error);
  }
}

function renderCartCount() {
  const count = Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  document.querySelectorAll('.cart-count').forEach((element) => {
    element.textContent = count;
  });
}

function productMarkup(product) {
  return `
    <article class="product-card-item">
      <a class="product-detail-link" href="product.html?product=${encodeURIComponent(product.id)}" aria-label="View ${product.name}">
        <div class="product-visual${product.id === 'breast-castor-pack' ? ' product-visual--crop-edge' : ''}">
          <span class="product-badge">${product.badge}</span>
          ${product.image
            ? `<img src="${product.image}" alt="${product.imageAlt}" loading="lazy" />`
            : `<span class="product-image-placeholder" aria-label="Product image coming soon"><span aria-hidden="true">✦</span><small>Image coming soon</small></span>`}
        </div>
      </a>
      <div class="product-info">
        <span class="product-brand">${product.brand}</span>
        <h3 class="product-title"><a class="product-detail-link" href="product.html?product=${encodeURIComponent(product.id)}">${product.name}</a></h3>
        <div class="product-meta">
          <div class="product-price">
            <strong>${Number.isFinite(product.price) ? 'RM ' + product.price.toFixed(2) : 'Price coming soon'}</strong>
            ${product.oldPrice ? `<span>RM ${product.oldPrice.toFixed(2)}</span>` : ''}
          </div>
          <button class="add-btn" type="button" data-id="${product.id}" ${Number.isFinite(product.price) ? '' : 'disabled'}>${Number.isFinite(product.price) ? 'Add' : 'Coming soon'}</button>
        </div>
      </div>
    </article>
  `;
}

function renderProducts() {
  if ((!grid && !productsPage) || !searchInput) return;

  const query = searchInput.value.trim().toLowerCase();

  let filtered = products.filter((product) => {
    const matchesFilter = activeFilter === 'all'
      || (catalogCategories.includes(activeFilter)
        ? matchesCatalogFilter(product, activeFilter)
        : product.category === activeFilter);
    const matchesQuery = !query || product.name.toLowerCase().includes(query) || product.brand.toLowerCase().includes(query) || product.description.toLowerCase().includes(query);
    return matchesFilter && matchesQuery;
  });

  if (productsPage) {
    const sortControl = document.querySelector('#product-sort');
    const sortOrder = sortControl ? sortControl.value : 'featured';
    if (sortOrder === 'price-low') filtered.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
    if (sortOrder === 'price-high') filtered.sort((a, b) => (b.price ?? -Infinity) - (a.price ?? -Infinity));
    if (sortOrder === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));
    const isCategorySelected = catalogCategories.includes(activeFilter);
    Object.entries(collectionGrids).forEach(([collectionId, collectionGrid]) => {
      if (!collectionGrid) return;
      const collectionProductsFiltered = filtered.filter((product) => product.collections.includes(collectionId));
      collectionGrid.innerHTML = collectionProductsFiltered.map(productMarkup).join('');
      const section = collectionGrid.closest('.product-collection-section');
      if (section) section.hidden = isCategorySelected || collectionProductsFiltered.length === 0;
    });

    if (categoryResultsGrid) {
      categoryResultsGrid.innerHTML = filtered.map(productMarkup).join('');
      categoryResultsGrid.closest('.product-category-results').hidden = !isCategorySelected;
    }

    const resultCount = document.querySelector('#product-result-count');
    if (resultCount) {
      const categoryControl = document.querySelector(`[data-catalog-filter="${activeFilter}"]`);
      const categoryName = categoryControl ? categoryControl.dataset.categoryName : '';
      resultCount.textContent = isCategorySelected
        ? t('Showing {count} {category} products', { count: filtered.length, category: t(categoryName) })
        : t('Showing all {count} products across the collections', { count: products.length });
    }

    document.querySelectorAll('[data-catalog-filter]').forEach((control) => {
      const category = control.dataset.catalogFilter;
      const selected = category === activeFilter || (category === 'all' && activeFilter === 'all');
      control.classList.toggle('active', selected);
      if (selected) control.setAttribute('aria-current', 'page');
      else control.removeAttribute('aria-current');

      if (category !== 'all') {
        const count = products.filter((product) => matchesCatalogFilter(product, category)).length;
        const countElement = control.querySelector('.category-count');
        if (countElement) countElement.textContent = `(${count})`;
      }
    });
  }

  if (grid) {
    grid.innerHTML = filtered.filter((product) => product.featured).map(productMarkup).join('');
  }
}

filterButtons.forEach((button) => {
  button.classList.toggle(
    'active',
    (button.dataset.filter || button.dataset.catalogFilter) === activeFilter
  );
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter || button.dataset.catalogFilter;
    if (button.dataset.catalogFilter) {
      const nextUrl = activeFilter === 'all'
        ? `${window.location.pathname}${window.location.hash}`
        : `${window.location.pathname}?category=${encodeURIComponent(activeFilter)}${window.location.hash}`;
      window.history.pushState({}, '', nextUrl);
    }
    renderProducts();
  });
});

document.querySelectorAll('a[data-catalog-filter]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    activeFilter = link.dataset.catalogFilter;
    const nextUrl = activeFilter === 'all'
      ? `${window.location.pathname}${window.location.hash}`
      : `${window.location.pathname}?category=${encodeURIComponent(activeFilter)}${window.location.hash}`;
    window.history.pushState({}, '', nextUrl);
    renderProducts();
  });
});

window.addEventListener('popstate', () => {
  const category = new URLSearchParams(window.location.search).get('category');
  activeFilter = catalogCategories.includes(category) ? category : 'all';
  renderProducts();
});

if (searchInput) searchInput.addEventListener('input', renderProducts);
const productSort = document.querySelector('#product-sort');
if (productSort) productSort.addEventListener('change', renderProducts);
renderCartCount();

document.addEventListener('error', (event) => {
  const image = event.target;
  if (!(image instanceof HTMLImageElement)) return;
  const imageContainer = image.closest('.product-visual, .cart-item-image, .product-detail-image');
  if (!imageContainer) return;
  console.error(`Unable to load product image: ${image.src}`);
  imageContainer.classList.add('image-unavailable');
  image.hidden = true;
}, true);

document.addEventListener('click', (event) => {
  const target = event.target.closest('.add-btn, .detail-add-btn, .cart-quantity-decrease, .cart-quantity-increase, .cart-remove, .checkout-button');
  if (!target) return;

  if (target.classList.contains('checkout-button')) {
    startCheckout(target);
    return;
  }

  if (target.classList.contains('add-btn') || target.classList.contains('detail-add-btn')) {
    const productId = target.dataset.id || new URLSearchParams(window.location.search).get('product');
    const selectedProduct = products.find(product => product.id === productId);
    if (!selectedProduct || !Number.isFinite(selectedProduct.price)) return;
    const quantityInput = document.querySelector('#product-quantity');
    const quantity = target.classList.contains('detail-add-btn') && quantityInput
      ? Math.max(1, Math.floor(Number(quantityInput.value) || 1))
      : 1;
    cart[productId] = (cart[productId] || 0) + quantity;
    saveCart();
    renderCartCount();
    if (cartPage) renderCart();
    const originalText = target.textContent;
    target.textContent = t('Added');
    target.disabled = true;
    target.classList.add('is-added');

    window.setTimeout(() => {
      target.textContent = originalText;
      target.disabled = false;
      target.classList.remove('is-added');
    }, 850);
    return;
  }

  const productId = target.dataset.id;
  if (target.classList.contains('cart-remove')) {
    delete cart[productId];
  } else {
    const nextQuantity = (cart[productId] || 0) + (target.classList.contains('cart-quantity-increase') ? 1 : -1);
    if (nextQuantity <= 0) delete cart[productId];
    else cart[productId] = nextQuantity;
  }
  saveCart();
  renderCartCount();
  renderCart();
});

function renderCart() {
  if (!cartPage) return;

  const entries = Object.entries(cart)
    .map(([id, quantity]) => ({ product: products.find((product) => product.id === id), quantity }))
    .filter((entry) => entry.product);
  const subtotal = entries.reduce((total, entry) => total + entry.product.price * entry.quantity, 0);

  if (!entries.length) {
    cartPage.innerHTML = `
      <div class="cart-empty">
        ${checkoutStatusMessage ? `<p class="checkout-status" role="status">${escapeHtml(checkoutStatusMessage)}</p>` : ''}
        <span class="cart-empty-icon" aria-hidden="true">🛒</span>
        <h1>${t('Your cart is empty')}</h1>
        <p>${t('Find something you love and add it to your cart.')}</p>
        <a class="primary-btn" href="products.html">${t('Shop')}</a>
      </div>
    `;
    return;
  }

  cartPage.innerHTML = `
    ${checkoutStatusMessage ? `<p class="checkout-status" role="status">${escapeHtml(checkoutStatusMessage)}</p>` : ''}
    <div class="cart-heading">
      <div>
        <p class="eyebrow eyebrow-dark">${t('Your selections')}</p>
        <h1>${t('Shopping cart')}</h1>
      </div>
      <a class="text-link text-link--strong" href="products.html">${t('Shop')}</a>
    </div>
    <div class="cart-layout">
      <div class="cart-items">
        ${entries.map(({ product, quantity }) => `
          <article class="cart-item">
            <a class="cart-item-image" href="product.html?product=${encodeURIComponent(product.id)}">
              ${product.image
                ? `<img src="${product.image}" alt="${product.imageAlt}" />`
                : `<span class="product-image-placeholder" aria-label="Product image coming soon"><span aria-hidden="true">✦</span></span>`}
            </a>
            <div class="cart-item-info">
              <span class="product-brand">${product.brand}</span>
              <h2><a href="product.html?product=${encodeURIComponent(product.id)}">${product.name}</a></h2>
              <strong class="cart-item-price">${Number.isFinite(product.price) ? 'RM ' + product.price.toFixed(2) : 'Price coming soon'}</strong>
              <div class="cart-item-actions">
                <div class="quantity-control" aria-label="Quantity for ${product.name}">
                  <button class="cart-quantity-decrease" type="button" data-id="${product.id}" aria-label="Decrease ${product.name} quantity">−</button>
                  <span>${quantity}</span>
                  <button class="cart-quantity-increase" type="button" data-id="${product.id}" aria-label="Increase ${product.name} quantity">+</button>
                </div>
                <button class="cart-remove" type="button" data-id="${product.id}">${t('Remove')}</button>
              </div>
            </div>
            <strong class="cart-line-total">RM ${(product.price * quantity).toFixed(2)}</strong>
          </article>
        `).join('')}
      </div>
      <aside class="cart-summary">
        <h2>${t('Order summary')}</h2>
        <div><span>${t('Subtotal')}</span><strong>RM ${subtotal.toFixed(2)}</strong></div>
        <p>${t('Delivery charges are not included yet. Pos Laju delivery costs are not calculated at checkout. Please contact us to confirm the delivery charge before ordering.')}</p>
        <button class="checkout-button" type="button">${t('Continue to secure payment')}</button>
        <small>${t('Product prices are charged in RM; Pos Laju delivery charges are not included.')}</small>
      </aside>
    </div>
  `;
}

async function startCheckout(button) {
  button.disabled = true;
  button.textContent = t('Preparing secure checkout…');
  checkoutStatusMessage = '';

  if (window.location.protocol === 'file:') {
    checkoutStatusMessage = t('Secure checkout is available only on the deployed website, not from a local file preview.');
    renderCart();
    return;
  }

  try {
    const checkoutItems = Object.entries(cart).map(([id, quantity]) => ({ id, quantity }));
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: checkoutItems })
    });
    const result = await response.json();
    if (!response.ok || !result.url || !result.sessionId) {
      throw new Error(result.error || 'Unable to start secure checkout. Please try again later.');
    }
    window.sessionStorage.setItem(pendingCheckoutStorageKey, JSON.stringify({
      sessionId: result.sessionId,
      items: Object.fromEntries(checkoutItems.map(({ id, quantity }) => [id, quantity]))
    }));
    window.location.assign(result.url);
  } catch (error) {
    console.error('Unable to start Stripe checkout.', error);
    clearPendingCheckout();
    checkoutStatusMessage = error.message || 'Unable to start secure checkout. Please try again later.';
    renderCart();
  }
}

async function handleCheckoutReturn() {
  const params = new URLSearchParams(window.location.search);
  const checkoutState = params.get('checkout');
  if (checkoutState === 'cancelled') {
    clearPendingCheckout();
    checkoutStatusMessage = t('Payment was not completed. Your cart is saved.');
    renderCart();
    return;
  }
  if (checkoutState !== 'success') return;

  const sessionId = params.get('session_id');
  if (!sessionId) {
    checkoutStatusMessage = 'We could not verify this payment. Please contact the store before trying again.';
    renderCart();
    return;
  }

  const pendingCheckout = readPendingCheckout();
  try {
    const response = await fetch(`/api/checkout-session?session_id=${encodeURIComponent(sessionId)}`);
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || 'Unable to verify payment.');

    if (result.paid) {
      const matchingCheckout = pendingCheckout && pendingCheckout.sessionId === sessionId;
      if (matchingCheckout) {
        Object.entries(pendingCheckout.items).forEach(([id, quantity]) => {
          const remaining = (cart[id] || 0) - quantity;
          if (remaining > 0) cart[id] = remaining;
          else delete cart[id];
        });
      }
      clearPendingCheckout();
      saveCart();
      renderCartCount();
      checkoutStatusMessage = matchingCheckout
        ? t('Payment received. Please contact us to confirm Pos Laju delivery arrangements; delivery charges are not included.')
        : 'Payment received. Your saved cart was left unchanged; please review it before placing another order. Delivery charges are not included.';
      window.history.replaceState({}, '', window.location.pathname);
    } else {
      checkoutStatusMessage = 'Your payment is still being processed. Your cart has been kept while we verify it.';
    }
  } catch (error) {
    console.error('Unable to verify the Stripe checkout session.', error);
    checkoutStatusMessage = 'We could not verify the payment yet. Your cart is unchanged; please contact the store before retrying.';
  }
  renderCart();
}

function updateTimer() {
  const target = new Date();
  target.setHours(target.getHours() + 14, target.getMinutes() + 14, target.getSeconds() + 48);

  const timer = document.querySelector('#countdown-timer');
  if (!timer) return;

  const render = () => {
    const now = new Date();
    let diff = Math.max(0, target.getTime() - now.getTime());

    const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
    const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');

    timer.textContent = `${hours}:${minutes}:${seconds}`;
  };

  render();
  setInterval(render, 1000);
}

const flashBadge = document.querySelector('.floating-badge');
if (flashBadge) {
  flashBadge.innerHTML = '<span>Flash sale</span><strong id="countdown-timer">00:00:00</strong>';
}

updateTimer();

if (newsletterForm) newsletterForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = newsletterForm.querySelector('button');
  const input = newsletterForm.querySelector('input');

  button.textContent = 'Thanks!';
  button.disabled = true;
  input.value = '';

  window.setTimeout(() => {
    button.textContent = 'Join now';
    button.disabled = false;
  }, 1200);
});

const accountForms = document.querySelectorAll('[data-account-form]');
const accountTabs = document.querySelectorAll('[data-account-mode]');
const accountStatus = document.querySelector('#account-status');
const authConfig = window.SAVOR_MARKET_AUTH_CONFIG;
let authClient = null;
let authenticatedUser = null;
let passwordRecoveryActive = false;
let selectedAccountMode = 'signin';

try {
  window.localStorage.removeItem('savor-market-demo-session');
  window.sessionStorage.removeItem('savor-market-demo-session');
} catch (error) {
  console.error('Unable to remove the previous demo account state.', error);
}

function setAccountStatus(message, kind = 'error') {
  if (!accountStatus) return;
  accountStatus.textContent = message;
  accountStatus.classList.toggle('is-success', kind === 'success');
  accountStatus.classList.toggle('is-info', kind === 'info');
}

function updateAccountLinks() {
  document.querySelectorAll('.account-entry').forEach((link) => {
    const signedIn = Boolean(authenticatedUser);
    link.textContent = signedIn ? 'Sign out' : 'Sign in';
    link.setAttribute('aria-label', signedIn ? 'Sign out of your account' : 'Sign in');
    link.href = signedIn ? '#sign-out' : 'login.html';
  });
}

function renderAccountState() {
  if (!accountForms.length) return;

  const accountSwitch = document.querySelector('[data-account-switch]');
  const accountSession = document.querySelector('[data-account-session]');
  const resetForm = document.querySelector('#reset-password-panel');
  const accountHeading = document.querySelector('#account-heading');
  const accountIntro = document.querySelector('#account-intro');
  const signedIn = Boolean(authenticatedUser);

  accountSession.hidden = !signedIn;
  accountSwitch.hidden = signedIn || passwordRecoveryActive;
  resetForm.hidden = !passwordRecoveryActive;

  accountForms.forEach((form) => {
    form.hidden = signedIn || passwordRecoveryActive || form.dataset.accountForm !== selectedAccountMode;
  });

  if (signedIn) {
    accountHeading.textContent = 'Your account';
    accountIntro.textContent = 'You are signed in to Savor Market.';
    accountSession.querySelector('[data-account-email]').textContent = authenticatedUser.email || '';
  } else if (passwordRecoveryActive) {
    accountHeading.textContent = 'Choose a new password';
    accountIntro.textContent = 'Set a new password for your Savor Market account.';
  } else {
    accountHeading.textContent = selectedAccountMode === 'signup' ? 'Your ritual starts here' : 'Welcome back';
    accountIntro.textContent = selectedAccountMode === 'signup'
      ? 'Create an account to keep your favorite finds and wellness essentials close.'
      : 'Sign in to keep your favorite finds and everyday rituals close.';
  }
}

function setAuthControlsEnabled(enabled) {
  document.querySelectorAll('[data-auth-control]').forEach((control) => {
    control.disabled = !enabled;
  });
}

function isStrongPassword(password) {
  return password.length >= 12
    && /[a-z]/.test(password)
    && /[A-Z]/.test(password)
    && /\d/.test(password)
    && /[^A-Za-z0-9]/.test(password);
}

function validatePassword(form) {
  const password = form.elements.namedItem('password')?.value
    || form.elements.namedItem('newPassword')?.value
    || '';
  if (!isStrongPassword(password)) {
    throw new Error('Use at least 12 characters with an uppercase letter, a lowercase letter, a number, and a symbol.');
  }

  const confirmation = form.elements.namedItem('confirmPassword');
  if (confirmation && confirmation.value !== password) {
    throw new Error('The passwords do not match.');
  }
  return password;
}

function setFormBusy(form, busy) {
  form.querySelectorAll('button[type="submit"]').forEach((button) => {
    button.disabled = busy || !authClient;
  });
}

function authRedirectUrl(search = '') {
  return `${window.location.origin}${window.location.pathname}${search}`;
}

async function initializeAuthentication() {
  setAuthControlsEnabled(false);
  updateAccountLinks();
  renderAccountState();

  if (!authConfig || !authConfig.url || !authConfig.publishableKey) {
    setAccountStatus('Authentication is not configured yet. Add your Supabase project URL and publishable key in auth-config.js to enable sign-in.', 'info');
    return;
  }

  let projectUrl;
  try {
    projectUrl = new URL(authConfig.url);
  } catch (error) {
    console.error('The Supabase project URL is invalid.', error);
    setAccountStatus('Authentication setup is incomplete: the Supabase project URL in auth-config.js is invalid.');
    return;
  }
  if (projectUrl.protocol !== 'https:' || projectUrl.pathname !== '/' || projectUrl.search
    || projectUrl.hash || projectUrl.username || projectUrl.password) {
    setAccountStatus('Authentication setup is incomplete: configure a valid HTTPS Supabase project URL.');
    return;
  }

  try {
    const { createClient } = await import('https://esm.sh/@supabase/supabase-js@2.117.2');
    authClient = createClient(projectUrl.origin, authConfig.publishableKey, {
      auth: {
        autoRefreshToken: true,
        detectSessionInUrl: true,
        flowType: 'pkce',
        persistSession: true
      }
    });
    setAuthControlsEnabled(true);

    authClient.auth.onAuthStateChange((event, session) => {
      authenticatedUser = session?.user || null;
      if (event === 'PASSWORD_RECOVERY') passwordRecoveryActive = true;
      if (event === 'SIGNED_OUT') passwordRecoveryActive = false;
      updateAccountLinks();
      renderAccountState();
    });

    const { data, error } = await authClient.auth.getSession();
    if (error) throw error;
    authenticatedUser = data.session?.user || null;
    passwordRecoveryActive = new URLSearchParams(window.location.search).has('recover')
      && Boolean(data.session);
    updateAccountLinks();
    renderAccountState();

    if (new URLSearchParams(window.location.search).has('signed-out')) {
      setAccountStatus('You have been signed out.', 'success');
    } else if (new URLSearchParams(window.location.search).has('recover') && !data.session) {
      setAccountStatus('Open the password-reset link from your email to choose a new password.', 'info');
    }
    if (!data.session && !new URLSearchParams(window.location.search).has('recover')) {
      setAccountStatus('', 'info');
    }
  } catch (error) {
    console.error('Unable to initialize Supabase authentication.', error);
    authClient = null;
    setAuthControlsEnabled(false);
    setAccountStatus('Authentication could not be initialized. Check the Supabase URL/key and network connection, then try again.');
  }
}

accountTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    selectedAccountMode = tab.dataset.accountMode;
    accountTabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
    });
    renderAccountState();
    if (authClient) setAccountStatus('');
  });
});

accountForms.forEach((form) => {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!authClient) {
      setAccountStatus('Authentication is not configured. Contact the store administrator.');
      return;
    }

    setFormBusy(form, true);
    setAccountStatus('');
    try {
      if (form.dataset.accountForm === 'signup') {
        const email = form.elements.namedItem('email').value.trim().toLowerCase();
        const password = validatePassword(form);
        const fullName = form.elements.namedItem('name').value.trim();
        const { data, error } = await authClient.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: fullName },
            emailRedirectTo: authRedirectUrl()
          }
        });
        if (error) throw error;

        if (data.session) {
          authenticatedUser = data.session.user;
          updateAccountLinks();
          renderAccountState();
          setAccountStatus('Your account is ready and you are signed in.', 'success');
        } else {
          setAccountStatus('If this address can be registered, check your email for a confirmation link before signing in.', 'success');
        }
      } else {
        const email = form.elements.namedItem('email').value.trim().toLowerCase();
        const password = form.elements.namedItem('password').value;
        const { data, error } = await authClient.auth.signInWithPassword({ email, password });
        if (error) throw error;
        authenticatedUser = data.user;
        updateAccountLinks();
        renderAccountState();
        setAccountStatus('You are signed in.', 'success');
      }
    } catch (error) {
      setAccountStatus(error.message || 'We could not complete that authentication request. Please try again.');
    } finally {
      setFormBusy(form, false);
    }
  });
});

document.querySelectorAll('.password-toggle').forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const input = toggle.parentElement.querySelector('input');
    const showPassword = input.type === 'password';
    input.type = showPassword ? 'text' : 'password';
    toggle.textContent = showPassword ? 'Hide' : 'Show';
    toggle.setAttribute('aria-label', showPassword ? 'Hide password' : 'Show password');
    toggle.setAttribute('aria-pressed', String(showPassword));
  });
});

const forgotPasswordButton = document.querySelector('[data-account-action="forgot"]');
if (forgotPasswordButton) {
  forgotPasswordButton.addEventListener('click', async () => {
    if (!authClient) {
      setAccountStatus('Authentication is not configured. Contact the store administrator.');
      return;
    }
    const email = document.querySelector('#signin-panel input[name="email"]').value.trim().toLowerCase();
    if (!email) {
      setAccountStatus('Enter your email address first, then choose “Forgot password?”.');
      document.querySelector('#signin-panel input[name="email"]').focus();
      return;
    }

    forgotPasswordButton.disabled = true;
    try {
      const { error } = await authClient.auth.resetPasswordForEmail(email, {
        redirectTo: authRedirectUrl('?recover=1')
      });
      if (error) throw error;
      setAccountStatus('If an account uses that address, a password-reset link will arrive by email.', 'success');
    } catch (error) {
      setAccountStatus(error.message || 'We could not send a password-reset email. Please try again.');
    } finally {
      forgotPasswordButton.disabled = false;
    }
  });
}

const resetPasswordForm = document.querySelector('#reset-password-panel');
if (resetPasswordForm) {
  resetPasswordForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!authClient) {
      setAccountStatus('Authentication is not configured. Contact the store administrator.');
      return;
    }

    setFormBusy(resetPasswordForm, true);
    try {
      const password = validatePassword(resetPasswordForm);
      const { error } = await authClient.auth.updateUser({ password });
      if (error) throw error;
      const { error: signOutError } = await authClient.auth.signOut({ scope: 'local' });
      if (signOutError) throw signOutError;
      passwordRecoveryActive = false;
      selectedAccountMode = 'signin';
      renderAccountState();
      setAccountStatus('Your password has been changed. Sign in with your new password.', 'success');
      resetPasswordForm.reset();
    } catch (error) {
      setAccountStatus(error.message || 'We could not update your password. Request a new reset link and try again.');
    } finally {
      setFormBusy(resetPasswordForm, false);
    }
  });
}

async function signOutAndRedirect() {
  if (!authClient) {
    window.location.href = 'login.html';
    return;
  }
  try {
    const { error } = await authClient.auth.signOut({ scope: 'local' });
    if (error) throw error;
    window.location.href = 'login.html?signed-out=1';
  } catch (error) {
    console.error('Unable to sign out of the Supabase session.', error);
    const message = error.message || 'Sign out failed. Please try again.';
    if (accountStatus) setAccountStatus(message);
    else window.alert(message);
  }
}

document.querySelector('[data-account-signout]')?.addEventListener('click', signOutAndRedirect);
document.querySelectorAll('.account-entry').forEach((link) => {
  link.addEventListener('click', (event) => {
    if (!authenticatedUser) return;
    event.preventDefault();
    signOutAndRedirect();
  });
});

initializeAuthentication();

const productDetail = document.querySelector('#product-detail');
if (productDetail) {
  const reviewStorageKey = 'savor-market-local-reviews';
  const productId = new URLSearchParams(window.location.search).get('product');
  const product = products.find((item) => item.id === productId);

  function readProductReviews() {
    try {
      const savedReviews = JSON.parse(window.localStorage.getItem(reviewStorageKey) || '{}');
      const reviews = savedReviews && !Array.isArray(savedReviews) && Array.isArray(savedReviews[productId])
        ? savedReviews[productId]
        : [];
      return reviews.filter((review) =>
        review
        && typeof review.id === 'string'
        && Number.isInteger(review.rating)
        && review.rating >= 1
        && review.rating <= 5
        && typeof review.text === 'string'
        && review.text.length > 0
        && review.text.length <= 500
        && typeof review.createdAt === 'string'
      ).slice(0, 100);
    } catch (error) {
      console.error('Unable to read local product reviews.', error);
      return [];
    }
  }

  function renderProductReviews(message = '') {
    const reviewsRegion = document.querySelector('#product-reviews');
    if (!reviewsRegion || !product) return;

    const reviews = readProductReviews();
    const average = reviews.length
      ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
      : null;
    reviewsRegion.innerHTML = `
      <div class="reviews-heading">
        <div>
          <p class="eyebrow eyebrow-dark">${t('Local review preview')}</p>
          <h2 id="reviews-heading">${t('Customer reviews')}</h2>
        </div>
        <div class="reviews-rating" aria-live="polite">
          <strong>${average || '—'}</strong>
          <span aria-label="${average ? `${average} / 5` : t('No ratings yet')}">${average ? '★'.repeat(Math.round(Number(average))) : '☆☆☆☆☆'}</span>
          <small>${t('{count} local reviews', { count: reviews.length })}</small>
        </div>
      </div>
      <p class="reviews-disclaimer">${t('Reviews are saved only in this browser on this device. They are not shared with other shoppers or verified purchases.')}</p>
      <p class="review-status" role="status">${message ? escapeHtml(message) : ''}</p>
      <form class="review-form" id="product-review-form">
        <label class="review-field">
          <span>${t('Your rating')}</span>
          <select name="rating" required>
            <option value="">${t('Choose a rating')}</option>
            <option value="5">${t('5 stars')}</option>
            <option value="4">${t('4 stars')}</option>
            <option value="3">${t('3 stars')}</option>
            <option value="2">${t('2 stars')}</option>
            <option value="1">${t('1 star')}</option>
          </select>
        </label>
        <label class="review-field">
          <span>${t('Your review')}</span>
          <textarea name="review" minlength="8" maxlength="500" placeholder="${t('Share your experience with this product...')}" required></textarea>
        </label>
        <button class="primary-btn" type="submit">${t('Save review on this device')}</button>
      </form>
      <div class="review-list" aria-live="polite">
        ${reviews.length ? reviews.slice().reverse().map((review) => {
          const reviewDate = new Date(review.createdAt);
          const dateText = Number.isNaN(reviewDate.getTime())
            ? ''
            : reviewDate.toLocaleDateString(document.documentElement.lang);
          return `
            <article class="review-card">
              <div class="review-card-heading">
                <span class="review-stars" aria-label="${review.rating} / 5">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</span>
                <time datetime="${escapeHtml(review.createdAt)}">${escapeHtml(dateText)}</time>
              </div>
              <p>${escapeHtml(review.text)}</p>
              <button class="review-delete" type="button" data-review-delete="${escapeHtml(review.id)}">${t('Delete review')}</button>
            </article>
          `;
        }).join('') : `<p class="reviews-empty">${t('No reviews yet. Be the first to leave feedback on this device.')}</p>`}
      </div>
    `;
  }

  if (!product) {
    productDetail.innerHTML = `
      <div class="product-not-found">
        <h1>Product not found</h1>
        <p>We couldn't find that product. Browse the shop to see what's available.</p>
        <a class="primary-btn" href="products.html">Shop</a>
      </div>
    `;
  } else {
    document.title = `${product.name} | Savor Market`;
    productDetail.innerHTML = `
      <nav class="product-breadcrumb" aria-label="Breadcrumb">
        <a href="index.html">Home</a><span aria-hidden="true">/</span>
        <a href="products.html">Shop</a><span aria-hidden="true">/</span>
        <span aria-current="page">${product.name}</span>
      </nav>
      <div class="product-detail-layout">
        <div class="product-detail-image${product.id === 'breast-castor-pack' ? ' product-detail-image--crop-edge' : ''}">
          <span class="product-badge">${product.badge}</span>
          ${product.image
            ? `<img src="${product.image}" alt="${product.imageAlt}" />`
            : `<span class="product-image-placeholder" aria-label="Product image coming soon"><span aria-hidden="true">✦</span><small>Image coming soon</small></span>`}
        </div>
        <div class="product-detail-copy">
          <p class="product-brand">${product.brand}</p>
          <h1>${product.name}</h1>
          <div class="product-detail-price">
            <strong>${Number.isFinite(product.price) ? 'RM ' + product.price.toFixed(2) : 'Price coming soon'}</strong>
            ${product.oldPrice ? `<span>RM ${product.oldPrice.toFixed(2)}</span>` : ''}
            ${Number.isFinite(product.price) ? '<small>(incl. SST)</small>' : ''}
          </div>
          <p class="product-stock"><span aria-hidden="true">●</span> ${Number.isFinite(product.price) ? 'In stock' : 'Coming soon'}</p>
          <section class="product-description">
            <h2>Description</h2>
            <p>${product.description}</p>
          </section>
          <div class="product-purchase">
            <div class="quantity-control" aria-label="Product quantity">
              <button id="quantity-minus" type="button" aria-label="Decrease quantity" disabled>−</button>
              <input id="product-quantity" type="number" min="1" value="1" aria-label="Quantity" />
              <button id="quantity-plus" type="button" aria-label="Increase quantity">+</button>
            </div>
            <button class="detail-add-btn" type="button" ${Number.isFinite(product.price) ? '' : 'disabled'}>${Number.isFinite(product.price) ? 'Add to Cart' : 'Price coming soon'}</button>
          </div>
          <ul class="product-assurances" aria-label="Shopping benefits">
            <li>Authentic product</li>
            <li>Quality guaranteed</li>
            <li>Fast delivery</li>
            <li>Easy returns</li>
          </ul>
        </div>
      </div>
      <section class="product-reviews" id="product-reviews" aria-labelledby="reviews-heading"></section>
    `;

    renderProductReviews();
    productDetail.addEventListener('submit', (event) => {
      if (event.target.id !== 'product-review-form') return;
      event.preventDefault();
      const form = event.target;
      const rating = Number(form.elements.namedItem('rating').value);
      const reviewText = form.elements.namedItem('review').value.trim();
      if (!Number.isInteger(rating) || rating < 1 || rating > 5 || reviewText.length < 8 || reviewText.length > 500) {
        renderProductReviews(t('Unable to save your review in this browser.'));
        return;
      }

      try {
        const savedReviews = JSON.parse(window.localStorage.getItem(reviewStorageKey) || '{}');
        const reviewData = savedReviews && !Array.isArray(savedReviews) ? savedReviews : {};
        const reviews = readProductReviews();
        reviews.push({
          id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`,
          rating,
          text: reviewText,
          createdAt: new Date().toISOString()
        });
        reviewData[productId] = reviews.slice(-100);
        window.localStorage.setItem(reviewStorageKey, JSON.stringify(reviewData));
        renderProductReviews(t('Review saved on this device.'));
      } catch (error) {
        console.error('Unable to save a local product review.', error);
        renderProductReviews(t('Unable to save your review in this browser.'));
      }
    });

    productDetail.addEventListener('click', (event) => {
      const deleteButton = event.target.closest('[data-review-delete]');
      if (!deleteButton) return;

      try {
        const savedReviews = JSON.parse(window.localStorage.getItem(reviewStorageKey) || '{}');
        const reviewData = savedReviews && !Array.isArray(savedReviews) ? savedReviews : {};
        const reviews = readProductReviews().filter((review) => review.id !== deleteButton.dataset.reviewDelete);
        if (reviews.length) reviewData[productId] = reviews;
        else delete reviewData[productId];
        window.localStorage.setItem(reviewStorageKey, JSON.stringify(reviewData));
        renderProductReviews();
      } catch (error) {
        console.error('Unable to delete a local product review.', error);
        renderProductReviews(t('Unable to save your review in this browser.'));
      }
    });

    const quantityInput = document.querySelector('#product-quantity');
    const minusButton = document.querySelector('#quantity-minus');
    const plusButton = document.querySelector('#quantity-plus');
    const updateQuantityButtons = () => {
      const quantity = Math.max(1, Math.floor(Number(quantityInput.value) || 1));
      quantityInput.value = quantity;
      minusButton.disabled = quantity <= 1;
    };

    minusButton.addEventListener('click', () => {
      quantityInput.value = Number(quantityInput.value) - 1;
      updateQuantityButtons();
    });
    plusButton.addEventListener('click', () => {
      quantityInput.value = Number(quantityInput.value) + 1;
      updateQuantityButtons();
    });
    quantityInput.addEventListener('change', updateQuantityButtons);
  }
}

renderProducts();
renderCart();
if (cartPage) handleCheckoutReturn();

if (window.location.hash) {
  const section = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
  if (section) window.requestAnimationFrame(() => section.scrollIntoView());
}
