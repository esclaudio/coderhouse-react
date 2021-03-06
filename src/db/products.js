import { getFirestore } from "./firebase";

export const getProducts = (categoryId = null) => {
  return new Promise((resolve, reject) => {
    const db = getFirestore();
    let query = db.collection("products")

    if (categoryId) {
      query = query
        .where("categoryId", "==", categoryId)
        .orderBy("price")
    } else {
      query = query
        .orderBy('categoryId')
        .orderBy("price")
    }

    query
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          resolve([]);
          return;
        }

        const products = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        resolve(products);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    const db = getFirestore();
    const collection = db.collection("products");
    const item = collection.doc(id);

    item
      .get()
      .then((doc) => {
        if (!doc.exists) {
          reject("No se encontró el producto");
          return;
        }

        const product = {
          id: doc.id,
          ...doc.data(),
        };

        resolve(product);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
