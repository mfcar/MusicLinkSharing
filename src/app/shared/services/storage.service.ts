import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  // tslint:disable-next-line:no-any
  setJsonSessionStorage(key: string, value: any): void {
    this.setItemSessionStorage(key, JSON.stringify(value));
  }

  // tslint:disable-next-line:no-any
  setJsonLocalStorage(key: string, value: any): void {
    this.setItemLocalStorage(key, JSON.stringify(value));
  }

  setItemSessionStorage(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  setItemLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getItemSessionStorage(key: string): string {
    return sessionStorage.getItem(key) as string;
  }

  getItemLocalStorage(key: string): string {
    return localStorage.getItem(key) as string;
  }

  // tslint:disable-next-line:no-any
  getJsonSessionStorage<T>(key: string): T {
    return JSON.parse(this.getItemSessionStorage(key)) as T;
  }

  // tslint:disable-next-line:no-any
  getJsonLocalStorage<T>(key: string): T {
    return JSON.parse(this.getItemLocalStorage(key)) as T;
  }

  removeItemSessionStorage(key: string): void {
    sessionStorage.removeItem(key);
  }

  removeItemLocalStorage(key: string): void {
    localStorage.removeItem(key);
  }

  clearSessionStorage(): void {
    sessionStorage.clear();
  }

  clearLocalStorage(): void {
    localStorage.clear();
  }

  clearStorage(): void {
    this.clearSessionStorage();
    this.clearLocalStorage();
  }
}
