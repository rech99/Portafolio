# Plan de Implementación: Formulario de Contacto con Resend

Este plan describe las tareas atómicas y secuenciales para habilitar el envío de correos.

## Tareas

### Fase 1: Configuración de Dependencias y Variables de Entorno
- [x] **T1.1**: Instalar la biblioteca oficial de Resend en el proyecto: `npm install resend`
- [x] **T1.2**: Crear el archivo `.env.local` con la variable de entorno `RESEND_API_KEY=` vacía.

### Fase 2: Creación de la API Backend
- [x] **T2.1**: Crear el archivo `app/api/send/route.ts` con el manejador de la ruta `POST`.
- [x] **T2.2**: Agregar validaciones en la ruta para asegurar la presencia de `name`, `email` y `message`.
- [x] **T2.3**: Manejar excepciones usando bloques `try/catch` para devolver los códigos de error HTTP adecuados (400, 500).

### Fase 3: Integración del Frontend
- [x] **T3.1**: Modificar `app/components/sections/Contact.tsx` para agregar los estados `status` ('idle', 'loading', 'success', 'error') y `errorMessage`.
- [x] **T3.2**: Implementar la llamada `fetch` hacia `/api/send` enviando el formulario en formato JSON.
- [x] **T3.3**: Deshabilitar el botón y los campos mientras se está realizando el envío.
- [x] **T3.4**: Mostrar banners o estados visuales para la respuesta de éxito o de error.

### Fase 4: Pruebas y Validación
- [ ] **T4.1**: Probar el envío localmente configurando temporalmente una clave de API de prueba en `.env.local`.
- [ ] **T4.2**: Confirmar la recepción correcta del mensaje en la bandeja de entrada.
