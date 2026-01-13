# Instrucción para Implementar/Mejorar Efecto "Light Rays" en Landing Page

**Objetivo:** Lograr un efecto de fondo "Celestial/Aurora" que emane desde la parte superior central hacia abajo, integrándose sutilmente con el diseño limpio y blanco de la Landing Page.

## Ubicación del Archivo
El componente principal donde se debe aplicar el cambio es: `src/App.tsx`.
El componente del efecto es: `src/components/LightRays.tsx`.

## Configuración Óptima (Best Practice)

Para que el efecto se vea elegante ("Premium") y no invasivo, usa la siguiente configuración dentro de la sección Hero en `App.tsx`:

```tsx
{/* Contenedor del Efecto: Posición absoluta detrás del contenido */}
<div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
  
  {/* 1. Componente LightRays */}
  <LightRays
    raysOrigin="top-center"       // ORIGEN: Arriba al centro
    raysColor="#7c3aed"           // COLOR: Violeta Marca (Primary)
    raysSpeed={0.2}               // VELOCIDAD: Lenta y relajante
    lightSpread={0.7}             // DISPERSIÓN: Amplia para cubrir el ancho
    rayLength={1.2}               // LONGITUD: Se desvanece antes del final
    followMouse={true}            // INTERACCIÓN: Sigue suavemente al mouse
    mouseInfluence={0.03}         // INFLUENCIA: Muy sutil (evita mareos)
    className="opacity-50 mix-blend-multiply" // ESTILO: Fusión suave con el fondo blanco
  />

  {/* 2. Máscara de Degradado (Fade-Out) */}
  {/* Esto asegura que los rayos se desvanezcan a blanco en la parte inferior de la sección */}
  <div 
    className="absolute inset-0 z-10"
    style={{
      background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 60%, rgba(255,255,255,1) 100%)'
    }}
  ></div>

</div>
```

## Detalles Importantes

1.  **Dirección (Top-to-Bottom):** La propiedad `raysOrigin="top-center"` es clave. Asegúrate de que el componente `LightRays.tsx` soporte esta propiedad y ajuste la coordenada Y a `1.2` (fuera de la pantalla arriba) para que los rayos "caigan".
2.  **Color:** No uses blanco sobre blanco. Usa un color corporativo (`#7c3aed` o similar) pero controla su intensidad con `opacity`.
3.  **Z-Index:** El contenedor del efecto debe tener `z-Index: 0` (o negativo si es necesario), y el contenido de texto/imágenes debe tener `z-Index: 20` o mayor para estar "encima" de la luz.
4.  **Transición:** El degradado inferior (`linear-gradient`) es vital para que el corte de la sección no sea brusco.

## Verificación
El resultado debe verse como haces de luz etéreos bajando desde el logo/menú hacia los teléfonos, dando profundidad sin quitar legibilidad al título "Tu aliado financiero".
