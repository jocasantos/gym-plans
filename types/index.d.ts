/* eslint-disable no-unused-vars */

// ====== USER PARAMS
declare type CreateUserParams = {
    clerkId: string;
    email: string;
    firstName: string;
    lastName: string;
    photo: string;
  };
  
  declare type UpdateUserParams = {
    firstName: string;
    lastName: string;
    photo: string;
  };
  
  // ====== SIMULATION PARAMS
  declare type AddSimulParams = {
    simul: {
      publicId: string;
      secureURL: string;
      age: number;
      genre: string;
      weight: number;
      height: number;
      start_year: number;
    };
    userId: string;
    path: string;
  };
  
  declare type UpdateSimulParams = {
    simul: {
      _id: string;
      publicId: string;
      secureURL: string;
      age: number;
      genre: string;
      weight: number;
      height: number;
      start_year: number;
    
    };
    userId: string;
    path: string;
  };
  
  
  // ====== TRANSACTION PARAMS
  declare type CheckoutTransactionParams = {
    credits: number;
    amount: number;
    buyerId: string;
  };
  
  declare type CreateTransactionParams = {
    stripeId: string;
    amount: number;
    credits: number;
    buyerId: string;
    createdAt: Date;
  };
