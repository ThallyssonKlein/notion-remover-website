// pages/api/addDocument.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
} else {
  getApp();
}

const db = getFirestore();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const docRef = await addDoc(collection(db, 'leads'), req.body);
      res.status(200).json({ id: docRef.id });
    } catch (error) {
      res.status(500).json({ error: 'Error adding document' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}