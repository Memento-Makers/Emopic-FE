import { create } from 'zustand';

interface FileState {
  files: File[];
  addFiles: (newFiles: File[]) => void;
  clearFiles: () => void;
}

export const useFileStore = create<FileState>(set => ({
  files: [],
  addFiles: newFiles =>
    set(state => ({ files: [...state.files, ...newFiles] })),
  clearFiles: () => set({ files: [] }),
}));
