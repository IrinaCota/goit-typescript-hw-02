export interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  description?: string;
}