import { ref, onMounted } from 'vue';
import type { IrrigatorProduct } from "~/types/irrigator-grid";
import type { TitleInfo } from "~/types/title-info";

export function useIrrigator() {

  const irrigators = ref<IrrigatorProduct[]>([
    {
      id: 1,
      name: "Waterpik Water Flosser Model WF-02, 5oz",
      image: "https://res.cloudinary.com/dkv2cmxfs/image/upload/v1700500931/Best/WaterPicWF02/hpp82kmw3yjoyjbira9h.webp",
      alt: 'Waterpik Water Flosser Model WF-02, 5oz',
      price: "$39.99",
      rating: 4.2,
      reviewCount: 47996
    },
    {
      id: 2,
      name: "Nicwell Professional Water Flosser F5025, 200ml",
      image: "https://res.cloudinary.com/dkv2cmxfs/image/upload/v1700448959/Best/Nicwellf5025/ofjladptkdqgsbyeqcve.webp",
      alt: 'Nicwell Professional Water Flosser F5025, 200ml',
      price: "$27.99",
      rating: 4.3,
      reviewCount: 477966
    },
    {
      id: 3,
      name: "Nicefeel Cordless Water Flosser FC1592BK, 300ml",
      image: "https://res.cloudinary.com/dkv2cmxfs/image/upload/v1700616746/Best/Nicefeel-FC1592-BK/rp9vi5urhelrbxwgjquw.webp",
      alt: 'Nicefeel Cordless Water Flosser FC1592BK, 300ml',
      price: "$79.99",
      rating: 4.2,
      reviewCount: 22112
    },
    {
      id: 4,
      name: "InSmart Professional Cordless Water Dental Flosser FC256, 300ml",
      image: "https://res.cloudinary.com/dkv2cmxfs/image/upload/v1700628391/Best/Insmart-FC256/wepwdcnie4cnqdymep3c.webp",
      alt: 'InSmart Professional Cordless Water Dental Flosser FC256, 300ml',
      price: "$29.99",
      rating: 4.3,
      reviewCount: 16103
    },
    {
      id: 5,
      name: "Coslus Water Dental Flosser Teeth Pick, F5020E 300ml",
      image: "https://res.cloudinary.com/dkv2cmxfs/image/upload/v1700541237/Best/Coslus300ml/bekj7waajyb9egnw08a8.webp",
      alt: 'Coslus Water Dental Flosser Teeth Pick, F5020E 300ml',
      price: "$29.99",
      rating: 4.4,
      reviewCount: 27395
    },
    {
      id: 6,
      name: "Bitvae C2 Professional Water Dental Flosser, 260ml",
      image: "https://res.cloudinary.com/dkv2cmxfs/image/upload/v1700560366/Best/Bitvae/ditfkdygrm4qoohqzttw.webp",
      alt: 'Bitvae C2 Professional Water Dental Flosser, 260ml',
      price: "$19.99",
      rating: 4.4,
      reviewCount: 16372
    }
  ]);

  const titleInfo = ref<TitleInfo>({
    title: "Portable and Affordable Oral Irrigators",
    description: "Upgrade your smile game without breaking the bank! Dive into the coolest portable and affordable oral irrigators on Amazon. We've rounded up the best brands for easy, breezy dental care.",
    subtext: "Click on the following images to read our review of the top-rated portable oral Irrigators.",
    slug: "reviews/portable-and-affordable-oral-irrigators"
  });

  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchPosts = async () => {
    loading.value = true;
    try {
      // In a real application, this would be an API call
      // await fetch('/api/posts')
      loading.value = false;
    } catch (e) {
      error.value = 'Failed to fetch posts';
      loading.value = false;
    }
  };

  onMounted(fetchPosts);

  return {
    irrigators,
    titleInfo,
    loading,
    error
  };
}