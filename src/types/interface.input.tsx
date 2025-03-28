export interface InputProps {
    name: string;
    type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'date' | 'time'; // Tipos de input estándar
    value: string;
    placeholder?: string;
    disabled?: boolean; 
    maxLength?: number;        // Máximo de caracteres permitidos
    minLength?: number;
    autoFocus?: boolean;       // Enfoca automáticamente el input
    autoComplete?: string;     // Controla el autocompletado del navegador
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;    // Mensaje de error opcional
    classes?: string;          // Clases adicionales para el input
}