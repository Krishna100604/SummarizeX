// api.js
export const fetchContributors = async () => {
    const response = await fetch("https://api.github.com/repos/Krishna100604/AI-Summarizer/contributors");
    if (!response.ok) {
      throw new Error("Failed to fetch contributors");
    }
    return response.json();
  };
  