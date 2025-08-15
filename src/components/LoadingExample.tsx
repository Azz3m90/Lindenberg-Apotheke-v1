import { useState } from "react";
import { useAsyncOperation, LOADING_MESSAGES } from "../utils/loaderUtils";

/**
 * Example component showing how to use the global loader
 * This can be removed - it's just for demonstration
 */
export default function LoadingExample() {
  const { executeWithLoader } = useAsyncOperation();
  const [result, setResult] = useState<string>("");

  const simulateApiCall = async (): Promise<string> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return "Data loaded successfully!";
  };

  const handleLoadData = async () => {
    try {
      const data = await executeWithLoader(
        simulateApiCall,
        LOADING_MESSAGES.PHARMACY_DATA
      );
      setResult(data);
    } catch (error) {
      setResult("Error loading data");
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Global Loader Example</h3>
      <button
        onClick={handleLoadData}
        className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700"
      >
        Load Data with Global Loader
      </button>
      {result && <p className="mt-4 text-green-600 font-semibold">{result}</p>}
    </div>
  );
}
