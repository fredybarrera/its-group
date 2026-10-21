/**
 * `srcset` de una portada raster (PNG/WebP) con su variante de 800 px (`nombre-800.ext`),
 * para no enviar la imagen de 1200 px a tarjetas y pantallas chicas. Los SVG escalan
 * solos y devuelven `undefined`. Al agregar una portada raster, generar también su `-800`.
 */
export function coverSrcset(cover: string): string | undefined {
  const match = cover.match(/^(.*)\.(png|webp)$/)
  if (!match) return undefined
  return `${match[1]}-800.${match[2]} 800w, ${cover} 1200w`
}
