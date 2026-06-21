import { useSyncExternalStore } from 'react';
import { ProgressService } from '../services/progress';

/** Re-renders the component whenever progress changes. */
export function useProgress() {
  useSyncExternalStore(ProgressService.subscribe, ProgressService.getVersion, ProgressService.getVersion);
  return ProgressService.get();
}
