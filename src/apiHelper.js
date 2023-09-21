export const handleApiCall = async (type, reportId) => {
  try {
    let apiUrl = "";
    if (type === "Report" || "Page" || "Visual" || "QNA-1" || "QNA-2") {
      apiUrl = genReportApi(reportId);
    }

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

const genReportApi = (reportId) => {
  const api = `http://localhost:4000/getReportEmbedDetails?reportId=${reportId}`;
  return api;
};

// const genPageApi = (reportId) => {
//   const api = `http://localhost:4000/getReportEmbedDetails?reportId=${reportId}`;
//   return api;
// };
