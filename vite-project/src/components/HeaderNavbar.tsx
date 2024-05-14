import { useState } from 'react';
import { logout } from '../lib/authUtils';

// Componente funcional de React para el desplegable de la barra de navegación
function HeaderNavbar(props: any) {
    const [isOpen, setIsOpen] = useState(false);

    // Función para alternar la visibilidad del desplegable
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            {/* Botón del desplegable */}
            <button
                className="flex items-center justify-center px-3 py-2 text-gray-700 hover:text-gray-900 focus:outline-none"
                onClick={toggleDropdown}
            >
                {props.children}
            </button>
            {/* Contenido del desplegable */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                    <div className="py-1 flex flex-col">

                        {/* Elementos del desplegable */}
                        <a
                            href="/Profile"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        >
                            Mi Perfil
                        </a>
                        <a
                            href="/userevents"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        >
                            Mis Eventos
                        </a>
                        <a
                            href="/userfavorites"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        >
                            Eventos Favoritos
                        </a>
                        <a
                            href="/login"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                            onClick={logout}
                        >
                            Cerrar Sesion
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HeaderNavbar;
