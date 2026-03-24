# Layout responsive — Luddies Holdings

## Contexto de la actividad

Este ejercicio (aprox. 45 minutos) forma parte del aprendizaje de **diseño web adaptable** (*responsive design*). El objetivo es construir una página con cuatro regiones semánticas (**Header**, **Aside**, **Main**, **Footer**), cada una con color distinto y su nombre visible, usando **CSS Grid** y **media queries** para que el diseño cambie de forma ordenada entre pantallas estrechas (móvil) y anchas (escritorio).

La marca **Luddies Holdings** aparece en la cabecera como identidad del proyecto.

## Objetivos pedagógicos

- Usar HTML5 semántico (`header`, `aside`, `main`, `footer`) y un documento con `lang` y `viewport` correctos.
- Maquetar con **CSS Grid** y **nombres de área** (`grid-template-areas`) para que el esqueleto del layout sea legible en el código.
- Aplicar un **punto de corte** (breakpoint) para pasar de una columna a dos en la zona central.

## Estructura del proyecto

| Archivo       | Función |
|---------------|---------|
| `index.html`  | Estructura de la página y texto visible en cada sección. |
| `styles.css`  | Colores, grid, áreas y media query responsive. |
| `README.md`   | Este archivo: contexto y guía de lectura del código. |

## Cómo probarlo

1. Abre `index.html` en un navegador (doble clic o “Abrir con…”).
2. Opcional: usa **Live Server** o similar si tu editor lo ofrece.
3. Abre las **herramientas de desarrollo** (F12) y activa el modo **dispositivo / responsive**.
4. Cambia el ancho de la ventana por debajo y por encima de **768px**: deberías ver el bloque central pasar de **Aside → Main en columna** a **Aside a la izquierda y Main a la derecha**.

## Partes importantes del código

### `viewport` y `lang` (en `index.html`)

- **`<meta name="viewport" …>`** indica al navegador que el ancho lógico sigue al del dispositivo. Sin esto, muchos móviles “escalan” la página como si fuera de escritorio y el diseño responsive no se comporta como esperas.
- **`lang="es"`** en `<html>` ayuda a accesibilidad, buscadores y herramientas (lectura en voz alta, corrección ortográfica del navegador).

### `grid-template-areas` (en `styles.css`)

En `.page` se define un **mapa verbal** del layout:

- En móvil (estilos por defecto), las áreas se apilan: `header`, `aside`, `main`, `footer`.
- Cada bloque (`header`, `aside`, etc.) recibe `grid-area` con el mismo nombre que en el mapa. Así se ve de un vistazo qué ocupa cada fila o celda sin contar líneas con `grid-column`.

### Media query (mismo archivo)

Dentro de `@media (min-width: 768px)`:

- Cambian **`grid-template-columns`** y **`grid-template-rows`** para tener dos columnas en la fila del medio (Aside + Main) y fila única para Header y Footer a todo el ancho.
- **`grid-template-areas`** se redefine con la forma:

  `"header header"` / `"aside main"` / `"footer footer"`.

  Eso mantiene Header y Footer en **span completo** y coloca Aside y Main lado a lado.

### Colores por sección

En `:root` están las variables **`--color-header`**, **`--color-aside`**, **`--color-main`** y **`--color-footer`**. Cada sección usa `background: var(--color-…)`. Cambiar un valor ahí actualiza todo el bloque sin buscar colores sueltos en el archivo.

## Verificación rápida

- Cuatro zonas visibles con nombres legibles y colores distintos.
- Por debajo de 768px: orden vertical Aside antes que Main.
- Por encima de 768px: Aside a la izquierda, Main expandiéndose a la derecha.
- El título de la pestaña del navegador incluye **Luddies Holdings**.
