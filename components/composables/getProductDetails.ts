import { ref, onMounted } from 'vue';
import type { ProductDetails } from "~/types/product-details";

export function useGetDetails() {

  const product = ref<ProductDetails>();
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
    product,
    loading,
    error
  };
}