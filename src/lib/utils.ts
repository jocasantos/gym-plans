import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ERROR HANDLER
export const handleError = (error: unknown) => {
  if (error instanceof Error) {
    // This is a native JavaScript error (e.g., TypeError, RangeError)
    console.error(error.message);
    throw new Error(`Error: ${error.message}`);
  } else if (typeof error === "string") {
    // This is a string error message
    console.error(error);
    throw new Error(`Error: ${error}`);
  } else {
    // This is an unknown type of error
    console.error(error);
    throw new Error(`Unknown error: ${JSON.stringify(error)}`);
  }
};


interface getMuscleMassProps {
  height: number;
  age_start: number;
  genre: string;
}

// FUNCTION TO GET THE MUSCLE MASS
export const getMuscleMass = ({height, age_start, genre}: getMuscleMassProps) => {
  function heightScore (height: number, genre: string) {
    if (genre === "masculino") {
      if (height < 160) {
        return 1;
      } else if (height >= 160 && height < 170) {
        return 2;
      } else if (height >= 170 && height < 180) {
        return 3;
      } else if (height >= 180 && height < 190) {
        return 4;
      } else if (height >= 190) {
        return 5;
      }
    }
    if (genre === "feminino") {
      if (height < 150) {
        return 1;
      } else if (height >= 150 && height < 160) {
        return 2;
      } else if (height >= 160 && height < 170) {
        return 3;
      } else if (height >= 170 && height < 180) {
        return 4;
      } else if (height >= 180) {
        return 5;
      }
    }
        // Default return value if no conditions match
        return 1;
  }

  function ageScore (age_start: number, genre: string) {
    if (genre === "masculino") {
      if (age_start < 17) {
        return 5;
      } else if (age_start >= 17 && age_start < 21) {
        return 4;
      } else if (age_start >= 21 && age_start < 25) {
        return 3;
      } else if (age_start >= 25 && age_start < 30) {
        return 2;
      } else if (age_start >= 30) {
        return 1;
      }
    }
    if (genre === "feminino") {
      if (age_start < 15) {
        return 5;
      } else if (age_start >= 15 && age_start < 19) {
        return 4;
      } else if (age_start >= 19 && age_start < 23) {
        return 3;
      } else if (age_start >= 23 && age_start < 27) {
        return 2;
      } else if (age_start >= 28) {
        return 1;
      }
    }
        // Default return value if no conditions match
        return 1;
  }

  const muscleMass = (0.7 * heightScore(height, genre)) + (0.3 * age_start);
  console.log(muscleMass);
  
  return muscleMass;
}