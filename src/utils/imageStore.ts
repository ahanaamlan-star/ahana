/**
 * Client-side persistence for authentic founder imagery.
 * Allows instant local attachment of extracted PDF photographs.
 */

const STORAGE_PREFIX = 'overdose_founder_img_';

export function getStoredFounderImage(founderName: string): string | null {
  try {
    return localStorage.getItem(`${STORAGE_PREFIX}${founderName}`);
  } catch {
    return null;
  }
}

export function saveStoredFounderImage(founderName: string, dataUrl: string): void {
  try {
    localStorage.setItem(`${STORAGE_PREFIX}${founderName}`, dataUrl);
  } catch (e) {
    console.warn('Could not cache founder image in localStorage', e);
  }
}

export function removeStoredFounderImage(founderName: string): void {
  try {
    localStorage.removeItem(`${STORAGE_PREFIX}${founderName}`);
  } catch (e) {
    console.warn('Could not remove cached founder image', e);
  }
}
