/**
 * Direção visual: Laboratório Neon Editorial.
 * Papel: centralizar assets hospedados para manter a interface funcional no Manus e no GitHub Pages.
 */

const storageOrigin = (import.meta.env.VITE_ASSET_ORIGIN ?? "").replace(/\/+$/, "");

export function assetUrl(fileName: string) {
  return `${storageOrigin}/manus-storage/${fileName}`;
}
