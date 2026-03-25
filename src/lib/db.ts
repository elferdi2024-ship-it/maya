import { openDB, DBSchema, IDBPDatabase } from 'idb';

export interface PendingPhoto {
  id: string;
  tourId: string;
  userId: string;
  blob: Blob;
  metadata: {
    room: string;
    sharpness: number;
    timestamp: number;
    orientation: { alpha: number; beta: number; gamma: number };
  };
  status: 'pending' | 'syncing' | 'failed';
}

interface BarrioDB extends DBSchema {
  photos: {
    key: string;
    value: PendingPhoto;
    indexes: { 'by-status': string; 'by-tour': string };
  };
}

let dbPromise: Promise<IDBPDatabase<BarrioDB>> | null = null;

export const getDB = () => {
  if (!dbPromise) {
    dbPromise = openDB<BarrioDB>('barrio360-db', 1, {
      upgrade(db) {
        const store = db.createObjectStore('photos', { keyPath: 'id' });
        store.createIndex('by-status', 'status');
        store.createIndex('by-tour', 'tourId');
      },
    });
  }
  return dbPromise;
};

export const savePhotoLocally = async (photo: PendingPhoto) => {
  const db = await getDB();
  await db.put('photos', photo);
};

export const getPendingPhotos = async () => {
  const db = await getDB();
  return db.getAllFromIndex('photos', 'by-status', 'pending');
};

export const updatePhotoStatus = async (id: string, status: PendingPhoto['status']) => {
  const db = await getDB();
  const photo = await db.get('photos', id);
  if (photo) {
    photo.status = status;
    await db.put('photos', photo);
  }
};

export const deletePhotoLocally = async (id: string) => {
  const db = await getDB();
  await db.delete('photos', id);
};
