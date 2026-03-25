import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase';
import { getPendingPhotos, updatePhotoStatus, deletePhotoLocally } from './db';

export const syncPendingPhotos = async () => {
  if (!navigator.onLine) return;

  const pendingPhotos = await getPendingPhotos();
  
  for (const photo of pendingPhotos) {
    try {
      await updatePhotoStatus(photo.id, 'syncing');
      
      const storageRef = ref(storage, `tours/${photo.userId}/${photo.tourId}/raw/${photo.id}.jpg`);
      
      const uploadTask = uploadBytesResumable(storageRef, photo.blob, {
        contentType: 'image/jpeg',
        customMetadata: {
          room: photo.metadata.room,
          sharpness: photo.metadata.sharpness.toString(),
          timestamp: photo.metadata.timestamp.toString(),
          orientation: JSON.stringify(photo.metadata.orientation)
        }
      });

      await new Promise((resolve, reject) => {
        uploadTask.on('state_changed', 
          null, 
          (error) => reject(error),
          () => resolve(uploadTask.snapshot.ref)
        );
      });

      // Successfully uploaded
      await deletePhotoLocally(photo.id);
      console.log(`Photo ${photo.id} synced successfully`);

    } catch (error) {
      console.error(`Failed to sync photo ${photo.id}`, error);
      await updatePhotoStatus(photo.id, 'failed');
    }
  }
};

// Setup automatic sync when coming online
export const setupAutoSync = () => {
  window.addEventListener('online', () => {
    console.log('Device is online. Starting sync...');
    syncPendingPhotos();
  });
};
