import axios from "axios";
import { toast } from "react-toastify";
import { create } from "zustand";

const useApisStore = create((set, get) => ({
  fetchdata: {}, 
  loading: false,
  error: null,

  setData: async (url, data, key) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post(url, data);
      await get().getData(url,key);
      toast.success("Created successfully!");
      console.log(response.data, "Data Added");
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },

  getData: async (url, key) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(url);
      set((state) => ({
        fetchdata: { ...state.fetchdata, [key]: response.data },
        loading: false,
      }));
      console.log("Fetch Data Response");
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },

  deleteData: async (url, id, key) => {
    set({ loading: true, error: null });
    try {
      await axios.delete(`${url}${id}`);
      set((state) => {
        const updatedData = state.fetchdata[key]?.filter((item) => item.id !== id);
        return {
          fetchdata: { ...state.fetchdata, [key]: updatedData },
          loading: false,
        };
      });
      await get().getData(url,key);
      toast.success("deleted successfully!");
      console.log("Data Deleted and State Updated Locally");
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },
  
}));

export default useApisStore;