---
name: ui-ux-design-expert
description: "Pautas de diseño UX/UI para construir interfaces web profesionales y elegantes en el portafolio, evitando colores como el morado."
---

# Guía de Diseño UI/UX: Estilo Profesional y Elegante

Esta skill guía el desarrollo de la interfaz de usuario (UI) y la experiencia de usuario (UX) para el portafolio. Se enfoca en un aspecto premium, limpio y altamente corporativo/profesional.

---

## 🎨 Paleta de Colores Profesional (Sin Tonos Morados)

Para mantener una estética corporativa, sobria y limpia, se prohíbe el uso de morado, púrpura o tonos similares. En su lugar, se emplearán las siguientes combinaciones:

*   **Fondo & Superficies (Obsidian & Slate):**
    *   Fondo principal: Gris muy oscuro con matiz azulado (e.g., `#090d16` o `oklch(14% 0.015 240)`).
    *   Tarjetas/Contenedores: Gris pizarra semitransparente con efecto vidrio (glassmorphism) e.g. `rgba(30, 41, 59, 0.5)`.
*   **Colores de Acento (Teal & Cool Blue):**
    *   Azul corporativo profundo (e.g., `#0f52ba` o `#2563eb`).
    *   Turquesa / Esmeralda suave para elementos de éxito o resaltados limpios (e.g., `#0d9488` o `#10b981`).
*   **Tipografía y Textos:**
    *   Texto primario: Blanco puro o zinc claro (`#f4f4f5`).
    *   Texto secundario: Gris frío (`#94a3b8`).

---

## 📐 Tipografía y Jerarquía Visual

1.  **Tipografías del Sistema / Web Fonts Modernas:**
    *   Preferir fuentes sin serifa de alto rendimiento y legibilidad (e.g., **Inter**, **Outfit**, o la fuente nativa del sistema).
2.  **Jerarquía de Tamaños:**
    *   Títulos principales (`h1`): Fuertes, grandes y con espaciado de letras ligeramente reducido (`letter-spacing: -0.02em`).
    *   Párrafos: Tamaño de fuente legible (mínimo `1rem` o `16px`) con una altura de línea holgada (`line-height: 1.625`).

---

## ✨ Efectos Visuales y Micro-interacciones

*   **Glassmorphism (Efecto Vidrio):**
    *   Para tarjetas y la barra de navegación superior:
        ```css
        background: rgba(15, 23, 42, 0.65);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.08);
        ```
*   **Suavidad en Transiciones:**
    *   Cualquier estado de hover, foco o cambio de color debe durar entre `200ms` y `300ms` con una curva de velocidad suave (`cubic-bezier(0.4, 0, 0.2, 1)` o `ease-in-out`).
*   **Sombra y Profundidad:**
    *   Utilizar sombras suaves y difusas para dar elevación sin saturar la vista.

---

## 📱 Responsive & Layout

*   **Mobile-First / Enfoque Adaptativo:**
    *   Todos los componentes deben fluir correctamente en dispositivos móviles utilizando flexbox o CSS Grid flexible (`grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`).
*   **Accesibilidad (a11y):**
    *   Asegurar un contraste mínimo de `4.5:1` para textos regulares frente al fondo.
    *   Mantener el contorno de enfoque (`outline`) claro para la navegación por teclado.
