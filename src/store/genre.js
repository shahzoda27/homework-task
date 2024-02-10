import { create } from "zustand";
import axiosClient from './../plugins/axiosClient';

const useGenreStore = create((set) => ({
  genres: [],
  getGenres: async () => {
    try {
      const response = await axiosClient.get("/category/get/all");
      set({ genres: response.data });
    } catch (error) {
      console.error(error);
    }
  },
  addGenre: async (payload) => {
    try {
      const response = await axiosClient.post("/category/create", payload);
      if (response.status === 201) {
        set((state) => ({ genres: [...state.genres, response.data] }));
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  },
  updateGenre: async (payload) => {
    try {
      const response = await axiosClient.patch(`/category/update/${payload.id}`, payload);
      if (response.status === 200) {
        set((state) => ({
          genres: state.genres.map((genre) => (genre.id === payload.id ? response.data : genre)),
        }));
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  },
  deleteGenre: async (id) => {
    try {
      const response = await axiosClient.delete(`/category/delete/${id}`);
      if (response.status === 200) {
        set((state) => ({
          genres: state.genres.filter((genre) => genre.id !== id),
        }));
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  },
}));

export default useGenreStore;
