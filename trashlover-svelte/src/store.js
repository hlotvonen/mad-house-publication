import { writable } from 'svelte/store';
import { persist, createLocalStorage } from "@macfja/svelte-persistent-store"

export const userChoices = persist(writable({
  sunnuntai: [{}, {}, {}, {}, {}, {}, {}],
  maanantai: [{}, {}, {}, {}, {}, {}, {}],
  tiistai: [{}, {}, {}, {}, {}, {}, {}],
  keskiviikko: [{}, {}, {}, {}, {}, {}, {}],
  torstai: [{}, {}, {}, {}, {}, {}, {}],
  perjantai: [{}, {}, {}, {}, {}, {}, {}],
  lauantai: [{}, {}, {}, {}, {}, {}, {}]
}), createLocalStorage(), "userChoices");

export const storePageCounts = persist(writable({
  maanantai: 0,
  tiistai: 0,
  keskiviikko: 0,
  torstai: 0,
  perjantai: 0,
  lauantai: 0,
  sunnuntai: 0
}), createLocalStorage(), "storePageCounts");

export const storeTotalProgress = persist(writable(0), createLocalStorage(), "storeTotalProgress");