const blogPosts = [
  {
    id: 1,
    title: 'Afuri Ramen - Pearl District',
    author: 'Sarah Chen',
    date: '2024-01-15',
    rating: 4.5,
    review: 'Afuri Ramen brings authentic Japanese ramen to the Pearl District with their signature yuzu shio broth. The broth is light yet flavorful, with a perfect balance of citrus and umami. The chashu pork is melt-in-your-mouth tender, and the ajitama egg is perfectly marinated. The noodles have great texture and the portion size is generous. The modern, minimalist interior creates a relaxed dining atmosphere. Service is quick and friendly, making it perfect for both lunch and dinner. Their seasonal specials are always worth trying.',
    slug: 'afuri-ramen-pearl-district'
  },
  {
    id: 2,
    title: 'Marukin Ramen - Downtown',
    author: 'Mike Tanaka',
    date: '2024-01-14',
    rating: 4.2,
    review: 'Marukin Ramen offers a solid traditional ramen experience in the heart of downtown. Their tonkotsu broth is rich and creamy, though slightly less intense than some competitors. The noodles are perfectly cooked with good chewiness. The chashu is well-seasoned and tender, and the bamboo shoots add nice texture. The restaurant has a cozy, authentic Japanese atmosphere. Portion sizes are reasonable for the price point. Service is efficient, though it can get busy during peak hours. A reliable choice for classic ramen in the downtown area.',
    slug: 'marukin-ramen-downtown'
  },
  {
    id: 3,
    title: 'Boxer Ramen - Alberta Arts',
    author: 'Emily Rodriguez',
    date: '2024-01-13',
    rating: 4.8,
    review: 'Boxer Ramen in Alberta Arts is a standout with their creative fusion approach to traditional ramen. Their signature Boxer Ramen features a rich pork broth with a hint of spice that keeps you coming back for more. The noodles are house-made and have perfect texture. The toppings are generous and include tender chashu, marinated egg, and fresh vegetables. The atmosphere is casual and welcoming, perfect for the Alberta neighborhood vibe. The staff is knowledgeable about their menu and always friendly. Their seasonal specials showcase local ingredients beautifully.',
    slug: 'boxer-ramen-alberta-arts'
  },
  {
    id: 4,
    title: 'Hapa Ramen - Mississippi',
    author: 'David Kim',
    date: '2024-01-12',
    rating: 3.9,
    review: 'Hapa Ramen on Mississippi offers a unique Hawaiian-Japanese fusion that sets it apart from traditional ramen shops. The broth has interesting flavor profiles that blend Asian and Pacific influences. The noodles are good quality, though sometimes a bit soft. The toppings are creative and include some unexpected ingredients that work well together. The restaurant has a laid-back, island-inspired atmosphere. Service is friendly but can be slow during busy periods. While not traditional ramen, it\'s an interesting take on the dish that\'s worth trying for something different.',
    slug: 'hapa-ramen-mississippi'
  },
  {
    id: 5,
    title: 'Noraneko - Central Eastside',
    author: 'Lisa Wong',
    date: '2024-01-11',
    rating: 4.6,
    review: 'Noraneko in Central Eastside is a hidden gem that serves some of the most authentic ramen in Portland. Their shoyu broth is perfectly balanced with deep, complex flavors that develop over hours of simmering. The noodles are imported from Japan and have excellent texture and springiness. The chashu is incredibly tender and flavorful, clearly marinated for hours. The ajitama eggs are perfectly cooked with runny centers. The small, intimate space creates a cozy dining experience. Service is attentive and the staff clearly cares about their craft.',
    slug: 'noraneko-central-eastside'
  },
  {
    id: 6,
    title: 'Ramen Ryoma - Beaverton',
    author: 'Alex Johnson',
    date: '2024-01-10',
    rating: 4.1,
    review: 'Ramen Ryoma in Beaverton provides a solid ramen experience for the suburbs. Their tonkotsu broth is rich and satisfying, though not as complex as some downtown options. The noodles are well-cooked and the portion sizes are generous. The chashu is tender and the vegetables are fresh. The restaurant has a clean, modern atmosphere that\'s family-friendly. Service is efficient and the staff is welcoming. While it may not be the most authentic ramen in Portland, it\'s a reliable choice for those in the Beaverton area who want good ramen without driving downtown.',
    slug: 'ramen-ryoma-beaverton'
  },
  {
    id: 7,
    title: 'Kizuki Ramen - Lloyd District',
    author: 'Maria Garcia',
    date: '2024-01-09',
    rating: 4.3,
    review: 'Kizuki Ramen in the Lloyd District offers a polished ramen experience with their signature garlic tonkotsu broth. The broth is rich and flavorful with a nice garlic kick that adds depth without being overwhelming. The noodles are perfectly cooked and the chashu is tender and well-seasoned. The restaurant has a modern, clean atmosphere that\'s perfect for both casual and business dining. Service is professional and efficient. The menu offers good variety with different broth options. While it\'s a chain restaurant, the quality is consistently good and the Lloyd location is convenient for many.',
    slug: 'kizuki-ramen-lloyd-district'
  },
  {
    id: 8,
    title: 'Yuzu Ramen - Hawthorne',
    author: 'James Wilson',
    date: '2024-01-08',
    rating: 4.7,
    review: 'Yuzu Ramen on Hawthorne is a neighborhood favorite that consistently delivers excellent ramen. Their yuzu shio broth is bright and refreshing with perfect citrus notes that complement the rich pork base. The noodles are house-made and have excellent texture and springiness. The chashu is melt-in-your-mouth tender and the ajitama eggs are perfectly marinated. The restaurant has a warm, welcoming atmosphere that feels like a local gathering spot. Service is friendly and the staff remembers regular customers. The seasonal specials are always creative and delicious.',
    slug: 'yuzu-ramen-hawthorne'
  },
  {
    id: 9,
    title: 'Ramen Ippo - Division',
    author: 'Jennifer Lee',
    date: '2024-01-07',
    rating: 4.0,
    review: 'Ramen Ippo on Division offers a straightforward, no-frills ramen experience that focuses on the basics done well. Their shoyu broth is clean and flavorful, though not as complex as some competitors. The noodles are good quality and well-cooked. The toppings are simple but fresh, with tender chashu and properly marinated eggs. The restaurant has a casual, unpretentious atmosphere that\'s perfect for a quick meal. Service is fast and efficient. While it may not be the most innovative ramen in Portland, it\'s a reliable choice for traditional ramen at a reasonable price point.',
    slug: 'ramen-ippo-division'
  },
  {
    id: 10,
    title: 'Shigezo - Pearl District',
    author: 'Robert Chen',
    date: '2024-01-06',
    rating: 4.4,
    review: 'Shigezo in the Pearl District offers a sophisticated take on traditional ramen with their premium ingredients and refined preparation. Their tonkotsu broth is rich and creamy with deep, complex flavors that develop over long simmering. The noodles are imported from Japan and have perfect texture. The chashu is incredibly tender and the ajitama eggs are perfectly cooked with runny centers. The restaurant has an elegant, modern atmosphere that\'s perfect for special occasions. Service is attentive and the staff is knowledgeable about their menu. The quality justifies the higher price point.',
    slug: 'shigezo-pearl-district'
  },
  {
    id: 11,
    title: 'Ramen Ryoma - Tanasbourne',
    author: 'Amanda Foster',
    date: '2024-01-05',
    rating: 3.8,
    review: 'Ramen Ryoma in Tanasbourne provides a decent ramen option for the northern suburbs. Their broth is serviceable though not particularly memorable, and the noodles are standard quality. The chashu is tender enough and the vegetables are fresh. The restaurant has a clean, casual atmosphere that\'s family-friendly. Service is adequate though not particularly attentive. While it\'s convenient for those in the Tanasbourne area, the quality doesn\'t quite match some of the better ramen shops in Portland. It\'s a reasonable choice for a quick meal but not worth a special trip.',
    slug: 'ramen-ryoma-tanasbourne'
  },
  {
    id: 12,
    title: 'Kukai Ramen - Lake Oswego',
    author: 'Thomas Nguyen',
    date: '2024-01-04',
    rating: 4.9,
    review: 'Kukai Ramen in Lake Oswego is an exceptional ramen experience that rivals the best in Portland. Their tonkotsu broth is incredibly rich and complex, with layers of flavor that develop over 18 hours of simmering. The noodles are perfectly cooked with excellent texture and springiness. The chashu is melt-in-your-mouth tender and the ajitama eggs are perfectly marinated with runny centers. The restaurant has an elegant, modern atmosphere with attention to detail in every aspect. Service is impeccable and the staff is passionate about their craft. The quality is consistently outstanding and worth the drive to Lake Oswego.',
    slug: 'kukai-ramen-lake-oswego'
  }
]