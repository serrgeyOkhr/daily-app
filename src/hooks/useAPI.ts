import { ref } from "vue";

export default function useAPI() {
  const loading = ref(false);
  const API = () => {
    const result = ref();
    const status = ref();
    const OK = ref();
    const get = async (url: string) => {
      try {
        loading.value = true;
        const r = await fetch(url);
        status.value = r.status;
        if (!r.ok) {
          throw new Error(`Response status: ${r.status}`);
        } else {
          OK.value = r.ok;
          result.value = await r.json();
        }
      } finally {
        loading.value = false;
      }
    };
    return {
      result,
      status,
      OK,
      get,
    };
  };

  return { loading, API: API() };
}
