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
      age: number;
      genre: string;
      height: number;
      start_age: number;
    };
    userId: string;
    path: string;
  };
  
  declare type UpdateSimulParams = {
    simul: {
      _id: string;
      age: number;
      genre: string;
      height: number;
      start_age: number;
    
    };
    userId: string;
    path: string;
  };

  declare type AuthorParams = {
author: {
  _id: string;
  firstName: string;
  lastName: string;
};
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

  // ====== MUSCLEFORM PARAMS
  declare type MuscleFormProps = {
    userId: string;
    creditBalance: number;
    data?: Simul | null;
  };