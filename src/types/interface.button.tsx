export interface ButtonProps {
    type?: 'success';  // Tipos estándar de botones
    text: string;                          // Texto que se mostrará en el botón
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;                   // Deshabilita el botón
    isLoading?: boolean;                  // Indica si el botón está en estado de carga
    icon?: React.ReactNode;               // Permite agregar un ícono dentro del botón
    variant?: 'primary' | 'secondary' | 'danger' | 'success'; // Variantes de estilo
    size?: 'small' | 'medium' | 'large';  // Tamaños predefinidos
    classes?: string;                     // Clases adicionales para personalización
    ariaLabel?: string;                   // Accesibilidad
    fullWidth?: boolean;                  // Ocupa el ancho completo del contenedor
}