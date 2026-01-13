import { database, ref, push, set, onValue, update, remove } from './firebase';

class FirebaseService {
  constructor() {
    this.db = database;
  }

  // Save data to a specific path
  async saveData(path, data) {
    try {
      const dataRef = ref(this.db, path);
      await set(dataRef, data);
      return { success: true };
    } catch (error) {
      console.error('Error saving data:', error);
      return { success: false, error: error.message };
    }
  }

  // Add new data to a path with auto-generated key
  async addData(path, data) {
    try {
      const dataRef = ref(this.db, path);
      const newRef = push(dataRef);
      await set(newRef, data);
      return { success: true, id: newRef.key };
    } catch (error) {
      console.error('Error adding data:', error);
      return { success: false, error: error.message };
    }
  }

  // Update data at a specific path
  async updateData(path, data) {
    try {
      const dataRef = ref(this.db, path);
      await update(dataRef, data);
      return { success: true };
    } catch (error) {
      console.error('Error updating data:', error);
      return { success: false, error: error.message };
    }
  }

  // Delete data at a specific path
  async deleteData(path) {
    try {
      const dataRef = ref(this.db, path);
      await remove(dataRef);
      return { success: true };
    } catch (error) {
      console.error('Error deleting data:', error);
      return { success: false, error: error.message };
    }
  }

  // Listen for real-time updates
  listenToData(path, callback) {
    const dataRef = ref(this.db, path);
    return onValue(dataRef, (snapshot) => {
      const data = snapshot.exists() ? snapshot.val() : null;
      callback(data);
    });
  }

  // Get data once (not real-time)
  async getDataOnce(path) {
    return new Promise((resolve, reject) => {
      const dataRef = ref(this.db, path);
      const unsubscribe = onValue(dataRef, (snapshot) => {
        unsubscribe();
        const data = snapshot.exists() ? snapshot.val() : null;
        resolve({ success: true, data });
      }, (error) => {
        unsubscribe();
        reject({ success: false, error: error.message });
      });
    });
  }
}

export default new FirebaseService();
